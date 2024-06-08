import React from "react";
import VR from "../buyer/vr";
import { STORE_DATA } from "../../lib/storeData";
import { Link } from "react-router-dom";

console.log('STORE_DATA:', STORE_DATA);

export default function Store() {
    return (
        <>
            {STORE_DATA.map((store) => (
                <div key={store.id} className="flex flex-col w-full h-full relative justify-center items-center">
                    <div className="absolute z-1 top-0 w-full inline-flex justify-between items-center">
                        <div className="view-options btn-group p-5 rounded-full bg-white">
                            <Link to={store.url}>
                                {store.name}
                            </Link>
                        </div>
                    </div>
                    <h1 className="z-1 text-white w-5/12 text-center text-display-lg">
                        {store.tagline}
                    </h1>
                    <div className="absolute z-0 top-0 left-0 w-full h-full">
                        <VR />
                    </div>
                </div>
            ))}
        </>
    );
}
