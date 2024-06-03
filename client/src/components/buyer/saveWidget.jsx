import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { BUSINESS_DIRECTORY_LIST } from '../../lib/businessDirectoryList';

export default function SaveWidget() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const uniqueCategories = [...new Set(BUSINESS_DIRECTORY_LIST.map(business => business.category).flat())];

    const filteredBusinesses = selectedCategory === "All"
        ? BUSINESS_DIRECTORY_LIST.filter(savedBusiness => savedBusiness.save)
        : BUSINESS_DIRECTORY_LIST.filter(savedBusiness => savedBusiness.save && savedBusiness.category.includes(selectedCategory));

    return (
        <div className="flex flex-col justify-start items-start h-auto bg-white gap-5 p-20 rounded-lg" >
            <div>
                <span className="text-title-md font-semibold text-primary-400">Saved Businesses</span>
            </div>
            <div className="inline-flex gap-2 flex-wrap">
                {uniqueCategories.map(category => (
                    <button
                        key={category}
                        className={`font-medium text-label-md py-5 px-12 rounded-full  ${selectedCategory === category ? 'bg-primary-100 text-primary-400' : 'bg-surface-100 text-secondary-200'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex flex-row gap-5 flex-wrap ">
                {filteredBusinesses.map(savedBusiness => (
                    <img key={savedBusiness.key} src={savedBusiness.iconPath} alt={savedBusiness.business} className="w-15 h-15 rounded-full"/>
                ))}
                <Link to="savedBusinesses" className="w-15 h-15 bg-surface-100 rounded-full flex flex-col justify-center items-center border-dashed border-primary-100 border-2">
                   <HiPlus className="fill-primary-100" />
                </Link>
            </div>
        </div>
    );
}
