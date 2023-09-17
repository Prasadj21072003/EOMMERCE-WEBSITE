import { useState, useEffect } from "react";
import axios from "axios";
import { Await } from "react-router-dom";

const Usefetch = (url) => {
  const [itemdata, setitemdata] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + `${url}`, {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
          },
        });

        setitemdata(res?.data.data);

        // console.log(res?.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getdata();
  }, [url]);
  //console.log(itemdata);
  return { itemdata };
};

export default Usefetch;
