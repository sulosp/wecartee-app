import React, { useEffect, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe";

export default function VR({ store }) {
  const [height, setHeight] = useState(window.innerHeight);
  const [currentImages, setCurrentImages] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Initialize currentImages with the initial images of the current store
    const initialImages = {};
    store.category.forEach(cat => {
      initialImages[cat.id] = cat.img;
    });
    setCurrentImages(initialImages);
  }, [store]);

  const handleNextView = () => {
    // Implement logic to handle view change if necessary
  };

  const handleChangeImage = (catId, newImg) => {
    setCurrentImages((prevImages) => ({
      ...prevImages,
      [catId]: newImg,
    }));
  };

  return (
    <div style={{ width: "100%", height: `${height}px`, overflow: "hidden" }}>
      <Scene embedded>
        {store.category.map((cat) => (
          <React.Fragment key={cat.id}>
            <Entity primitive="a-sky" src={currentImages[cat.id]} />
            
            <Entity
              geometry={{ primitive: "box", width: 0.2, height: 0.1, depth: 0.1 }}
              material={{ color: "green" }}
              position={cat.position }
              events={{
                click: () => handleChangeImage(cat.id, 'path/to/new/image.jpg')
              }}
            />
          </React.Fragment>
        ))}
        <Entity
          geometry={{ primitive: "cylinder", height: 0.1, radius: 0.05 }}
          material={{ color: "blue" }}
          position="0 1 -1"
          rotation="-90 0 0"
          events={{ click: handleNextView }}
        >
          <a-animation
            attribute="rotation"
            to="0 360 0"
            dur="1000"
            repeat="indefinite"
          />
        </Entity>
      </Scene>
    </div>
  );
}
