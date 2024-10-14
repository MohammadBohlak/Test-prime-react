import React, { useState } from "react";
import "./product.css";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';;
// import one from '../../images/products/camera1.jpg'

export default function Product({ data }) {
  const [visible, setVisible] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [value, setValue] = useState("");
  // console.log(props.data.src)
  const header = <img alt="Card" src={data.src} />;
  const footer = (<div className="flex justify-content-between align-items-center h-3rem">
    <Button label = "Buy" className="bg-teal-900 text-lg w-5 text-color" icon = "pi pi-shopping-cart" onClick={() => setShowBuy(true)}/>
    <Button label="Show details"  className="w-5" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Details" visible={visible} maximizable style={{ width: '50vw' ,height:"40vh", overflowY:"auto" }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
            <Dialog header="Enter your card Number" visible={showBuy} maximizable style={{ width: '50vw' ,height:"40vh" }} onHide={() => {if (!showBuy) return; setShowBuy(false); }}>
            <FloatLabel className="mt-6 w-12">
                <InputNumber className="w-12" id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </FloatLabel>
            </Dialog>
  </div>)
  //   <>
  //     <Button label="Save" icon="pi pi-check" />
  //     <Button
  //       label="Cancel"
  //       severity="secondary"
  //       icon="pi pi-times"
  //       style={{ marginLeft: "0.5em" }}
  //     />
  //   </>
  // );
  let x = "m-5 md:col-5 sm:col-6 lg:col-3";
  return (
    <>
      <Card
        title={data.title}
        subTitle={data.subTitle}
        footer={footer}
        header={header}
        className={x}
      >
        <hr/>
        <p className="m-0 h-6rem">
          {data.description}
        </p>
      </Card>
    </>
  );
}
