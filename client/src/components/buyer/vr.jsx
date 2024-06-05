import React from "react";
import "aframe";
//import { STORE_DATA } from "../../lib/storeData";
import "../../index.css";

const VRScene = () => {


 /* const handleHotspotClick = () => {
    alert("Hotspot clicked!");
  }; */


  return (
    <a-scene
      background="color: #ECECEC"
      embedded=""
      inspector=""
      keyboard-shortcuts=""
      screenshot=""
      xr-mode-ui=""
      device-orientation-permission-ui=""
    >
      <a-box
        position="-1 0.5 -3"
        rotation="0 45 0"
        color="#4CC3D9"
        material=""
        geometry=""
      ></a-box>
      <a-sphere
        position="0 1.25 -5"
        radius="1.25"
        color="#EF2D5E"
        material=""
        geometry=""
      ></a-sphere>
      <a-cylinder
        position="1 0.75 -3"
        radius="0.5"
        height="1.5"
        color="#FFC65D"
        material=""
        geometry=""
      ></a-cylinder>
      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
        material=""
        geometry=""
      ></a-plane>
      <canvas
        className="a-canvas a-grab-cursor"
        data-aframe-canvas="true"
        data-engine="three.js r164"
        width="952"
        height="300"
      ></canvas>
    
      <a-entity
        camera=""
        position=""
        wasd-controls=""
        rotation=""
        look-controls=""
        aframe-injected=""
      ></a-entity>
      <div class="a-enter-vr fullscreen" aframe-injected="">
        <button
          class="a-enter-vr-button"
          title="Enter VR mode with a headset or fullscreen without"
          aframe-injected=""
        ></button>
      </div>
      <div class="a-orientation-modal a-hidden" aframe-injected="">
        <button aframe-injected="">Exit VR</button>
      </div>
      <a-entity
        light=""
        data-aframe-default-light=""
        aframe-injected=""
      ></a-entity>
      <a-entity
        light=""
        position=""
        data-aframe-default-light=""
        aframe-injected=""
      ></a-entity>
    </a-scene>
  );
};

export default VRScene;
