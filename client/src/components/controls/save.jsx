import React, { useState } from "react";
import { HiHeart, HiBackspace } from "react-icons/hi";
import classNames from "classnames";

export default function Save({ save }) {
    return (
        <button>
            <span>
                <HiHeart
                    className={classNames(
                        save ? "fill-primary-200" : "fill-primary-100",
                    )}
                />
            </span>
        </button>
    );
}

export function SaveButton({ storeId }) {
    const [save, setSaveStatus] = useState(true);

    const handleToggleSave = () => {
        setSaveStatus(!save); // Toggle the save state
    };

    return (
        <div>
            {save ? (
                <button
                    onClick={handleToggleSave}
                    className="w-auto bg-red-100 text-red-600 inline-flex gap-1 justify-center items-center rounded-full px-4 py-2.5 hover:bg-red-400 hover:text-white"
                >
                    <span className="text-label-lg">
                        <HiBackspace />
                    </span>
                    <span className="text-label-md">Unsave</span>
                </button>
            ) : (
                <button
                    onClick={handleToggleSave}
                    className="w-auto bg-primary-100 text-primary-900 inline-flex gap-1 justify-center items-center rounded-full text-label-md px-4 py-2.5 hover:bg-primary-900 hover:text-white"
                >
                    <span className="text-label-lg">
                        <HiHeart />
                    </span>
                    <span className="text-label-md">Save</span>
                </button>
            )}
        </div>
    );
}
