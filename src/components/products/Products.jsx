import React, { useEffect, useState } from "react";
import "./products.css";
import Product from "../product/Product";
import { data } from "./data";
import { Button } from "primereact/button";
function Products(props) {
  const [select, setSelect] = useState("all");
  const [dataViwed, setDataViwed] = useState([]);
  function getData() {
    switch (select) {
      case "all": {
        return data.map((e) => e);
      }
      case "camera": {
        return data.filter((e, index) => e.name == "camera");
      }
      case "screen": {
        return data.filter((e, index) => e.name == "screen");
      }
      case "clock": {
        return data.filter((e, index) => e.name == "clock");
      }
    }
  }
  function showData() {
    setDataViwed(getData());
  }
  useEffect(() => {
    showData();
  }, []);
  // console.log(data[0])
  return (
    <>
      <div className="w-12 flex justify-content-center align-items-center surface-0 p-5 mt-4">
       <div className="w-10 md:w-7 flex justify-content-between"> 
       <div className="text-xl"> Filter Data : </div>
        <div className="flex flex-wrap justify-content-center gap-2">
        <Button 
            label="All"
            onClick={() => {
              setSelect("all");
              showData();
            }}
          />
          <Button 
            label="camera"
            onClick={() => {
              setSelect("camera");
              showData();
            }}
          />
          <Button
          className="mr-1"
            label="screen"
            onClick={() => {
              setSelect("screen");
              showData();
            }}
          />
          <Button
            label="clock"
            onClick={() => {
              setSelect("clock");
              showData();
            }}
          />
        </div>

       </div>
             </div>
      <div className="card products-page grid justify-content-center">
        {/* <Product/> */}
        {dataViwed.map((e, index) => {
          return <Product key={index} data={e} />;
        })}
      </div>
    </>
  );
}

export default Products;
