import React from "react";
import "./home.css";
// import { Card } from "primereact/card";
import { Image } from 'primereact/image';
import Devices from "../../images/devices.png"
function Home(props) {
  return (
    <div className="home surface-0">
      <div className="home-left w-6 flex align-items-center justify-content-center pl-2">
        <div className="home-content">
          <p>Latest best Device</p>
          <hr className="w-6 m-0 mt-3 mb-2" />
          <p>All Google Accessories in Up to 60% Off</p>
        </div>
      </div>
      <div className="home-right card w-6 flex align-items-center justify-content-center">
        {" "}
        <Image
          src={Devices}
          alt="Image"
          
        />
      </div>
    </div>
  );
}

export default Home;
