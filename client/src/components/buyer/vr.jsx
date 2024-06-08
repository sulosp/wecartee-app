import React, { useEffect, useState } from "react";
import { STORE_DATA } from "../../lib/storeData";
import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();
  const { storeId, categoryId } = useParams();

  const store = STORE_DATA.find(store => store.id === parseInt(storeId));
  const category = store.category.find(cat => cat.id === parseInt(categoryId));

  const navigateToView = (viewId) => {
    navigate(`/store/${storeId}/category/${categoryId}/view/${viewId}`);
  };

  return (
    <div style={{ width: "100%", height: `${height}px`, overflow: "hidden" }}>
      <Scene embedded>
        <Entity primitive="a-sky" src={category.img} />
        {category.views?.map((view, index) => (
          <Entity
            key={view.id}
            geometry={{ primitive: 'circle', radius: 2 }}
            material={{ color: 'red' }}
            position={{ x: 5 * (index + 1), y: 2, z: -3 }}
            events={{
              click: () => navigateToView(view.id),
            }}
          />
        ))}
      </Scene>
    </div>
  );
}
