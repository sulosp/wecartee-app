import React from 'react';
import { HiStar } from "react-icons/hi";

export default function Rating({ rating }) {

    return (

        <div className="inline-flex">

            {[...Array(5)].map((_, index) => (
                <HiStar
                    key={index}
                    className={`star ${index < rating ? 'fill-yellow-400' : 'fill-yellow-400 opacity-25'}`}
                />
            ))}

        </div>

    );
}
