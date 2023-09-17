// @ts-nocheck

const stripe = require("stripe")(process.env.STRIPE_KEY);
if (!stripe) {
  console.log("there is error in stripe");
}

("use strict");
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    if (!products) {
      console.log("there is no product");
    }
    const lineitems = await Promise.all(
      products?.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product?.id);
        console.log(product);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.title,
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        };
      })
    );
    console.log(lineitems);
    if (!lineitems) {
      console.log("there is error in lineitems");
    }

    try {
      const session = await stripe?.checkout?.sessions?.create({
        line_items: lineitems,
        mode: "payment",
        payment_method_types: ["card"],

        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
      });

      if (!session) {
        console.log("there is error in session");
      }

      await strapi.service("api::order.order").create({
        data: {
          stripeid: session?.id,
          products,
        },
      });

      return { stripesession: session };
    } catch (error) {
      console.log(`the error is ${error}`);
    }
  },
}));
