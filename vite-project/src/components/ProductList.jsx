import React, { useState, useEffect } from "react";
import axios from "axios";
import ValidationHelper from "../util/ValidationHelper";
import Loader from "./Loader";

const ProductList = () => {
  let [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      await callProductList();
    })();
  }, []);

  const callProductList = async () => {
    let res = await axios.get(`${ValidationHelper.API_Base}/product-list`);
    let products = res.data["data"];
    setData(products);
  };

  return (
    <div>
      {data == null ? (
        <Loader />
      ) : (
        <div className="container list-card">
          <div className="row">
            {data.map((item, i) => {
              return (
                <div className="col-md-3 p-1">
                  <div className="card p-3">
                    <img className="w-100" alt="" src={item["image"]} />
                    <h5>
                      {" "}
                      Price:
                      {item["discount"] === 0 ? (
                        <span>{item["price"]}</span>
                      ) : (
                        <span>
                          <strike>
                            {<span className="mx-2">{item["price"]}</span>}
                          </strike>
                          {<span>{item["discount_price"]}</span>}
                        </span>
                      )}
                    </h5>
                    <p>{item["title"]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
