import React, { useEffect, useState } from "react";
import { STORE_DATA } from "../../lib/storeData";
import { Entity, Scene } from "aframe-react";
import "aframe";

export default function VR() {
  const [height, setHeight] = useState(window.innerHeight);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHotspotClick = () => {
    setCurrentCategoryIndex((prevIndex) => {
      const nextIndex = prevIndex + 1 >= STORE_DATA[0].category.length ? 0 : prevIndex + 1;
      return nextIndex;
    });
  };

//  https://github.com/aframevr/aframe/blob/master/examples/showcase/ui/index.html



  return (

    <>
      {STORE_DATA.map((store) => (
        <div key={store.id} style={{ width: "100%", height: `${height}px`, overflow: "hidden" }}>
          <Scene key={store.id} embedded>
            <Entity primitive="a-sky" src={store.category[currentCategoryIndex].img} />
            {/* Hotspot */}
            <Entity
              geometry={{ primitive: "circle", radius: 0.1 }}
              material={{ color: "red" }}
              position={{ x: 0, y: 2, z: -3 }}
              events={{ click: handleHotspotClick }}
              clickable
            />
          </Scene>
        </div>
      ))}
    </>
  );
}
