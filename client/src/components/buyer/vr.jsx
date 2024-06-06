// src/VrImage.js
import React from "react";
import "aframe";
import { STORE_DATA } from "../../lib/storeData";
import { Entity, Scene } from "aframe-react";

export default function VR() {
  return (
    <div style={{ width: "100%", height: "1000px" }}>
      <Scene embedded>
        <a-assets>
          <img id="vr-image" src={STORE_DATA[0].views[0].img} alt="VR" />
        </a-assets>
        
        <Entity primitive="a-sky" src="#vr-image" scale="1 1 1"></Entity>
      </Scene>
    </div>
  );
}
