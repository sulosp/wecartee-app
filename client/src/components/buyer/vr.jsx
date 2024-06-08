import React, { useEffect, useState } from "react";
import { STORE_DATA } from "../../lib/storeData";
import { Entity, Scene } from "aframe-react";
import "aframe";

export default function VR() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (

    <>
      {STORE_DATA.map((store) => (
        <div key={store.id} style={{ width: "100%", height: `${height}px`, overflow: "hidden" }}>
          {store.category.map((category) => (
            <Scene key={category.id} embedded>
              <Entity primitive="a-sky" src={category.img} />
              {category.connectedViews.map((viewId, index) => (
                <Entity
                  key={viewId}
                  geometry={{ primitive: "circle", radius: 0.1 }}
                  material={{ color: "red" }}
                  position={{ x: index * 2, y: 2, z: -3 }}
                />
              ))}
            </Scene>
          ))}

        </div>
      ))}
    </>
  );
}
