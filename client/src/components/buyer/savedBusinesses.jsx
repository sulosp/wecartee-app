import React from "react";
import CardView from "../shared/cardView";
import BUSINESS_DIRECTORY_LIST from "../../lib/businessDirectoryList";

export default function SavedBusinesses() {
    return (
        <div className="gap-5 flex-col justify-center items-start max-h-screen  p-24 bg-surface-100 w-full">
            <CardView storeList={BUSINESS_DIRECTORY_LIST} />
        </div>
    );
}
