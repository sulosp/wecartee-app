import React from "react";
import "aframe";
import { STORE_DATA } from "../../lib/storeData";
import '../../index.css';

const VRScene = () => {
  const handleHotspotClick = () => {
    alert("Hotspot clicked!");
  };

  return (
    <div className="flex w-full h-full vr-scene-container">
      <a-scene embedded>
        <a-assets>
          <img id="store" src={STORE_DATA[0].views[0].img} alt="Store" />
        </a-assets>

        <a-sky src="#store" rotation="0 -130 0"></a-sky>
        <a-camera></a-camera>
        {/* Add hotspots */}
        <a-box
          position="0 1.5 -3"
          rotation="0 45 0"
          color="#4CC3D9"
          depth="0.5"
          height="0.5"
          width="0.5"
          event-set__click="_event: click; color: yellow"
          onClick={handleHotspotClick}
        ></a-box>
      </a-scene>
    </div>
  );
};

export default VRScene;
