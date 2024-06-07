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

  const history = useNavigate();
  const { storeId, categoryId, viewId } = useParams();

  const store = STORE_DATA.stores.find(store => store.id === parseInt(storeId));
  const category = store.categories.find(cat => cat.id === parseInt(categoryId));
  const view = category.views.find(view => view.id === parseInt(viewId));

  const navigateToView = (connectedViewId) => {
    history.push(`/store/${storeId}/category/${categoryId}/view/${connectedViewId}`);
  };

  return (
    <div style={{ width: "100%", height: `${height}px`, overflow: "hidden" }}>
      <Scene embedded>
        
      <Entity primitive="a-sky" src={view.image} />
      {view.connectedViews.map((connectedViewId, index) => (
        <Entity
          key={connectedViewId}
          geometry={{ primitive: 'circle', radius: 2 }}
          material={{ color: 'red' }}
          position={{ x: 5 * (index + 1), y: 2, z: -3 }}
          events={{
            click: () => navigateToView(connectedViewId),
          }}
        />
      ))}

       
      </Scene>
    </div>
  );
}

// INSIDE SCENE

//<a-assets>
         //<img id="vr-image" src={STORE_DATA[0].views[0].img} alt="VR" />
      //  </a-assets>

      //  <Entity primitive="a-sky" src="#vr-image" scale="1 1 1"></Entity>

