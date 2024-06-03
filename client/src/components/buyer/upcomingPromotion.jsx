import React, { useState } from "react";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

export default function ImageCarousel() {
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);

  // Filter out promotions with upcomingPromotion not null
  const promotionsWithImages = BUSINESS_DIRECTORY_LIST.filter(
    (item) => item.upcomingPromotion !== null
  );

  const nextPromotion = () => {
    setCurrentPromotionIndex(
      (prevIndex) => (prevIndex + 1) % promotionsWithImages.length
    );
  };

  const prevPromotion = () => {
    setCurrentPromotionIndex(
      (prevIndex) =>
        (prevIndex - 1 + promotionsWithImages.length) %
        promotionsWithImages.length
    );
  };

  return (
    <div className="flex flex-col justify-start items-start h-full bg-white gap-5 p-20 rounded-lg">
      <span className="text-title-md font-semibold text-primary-400 ">
        Upcoming Promotions
      </span>
      <div className="image-carousel inline-flex w-full justify-center items-center">
        <button
          onClick={prevPromotion}
          className="flex justify-center z-3 items-center p-3 rounded-md  bg-primary-100 -mr-4 size-10 "
        >
          <HiChevronLeft />
        </button>
        <div className="w-full">
        <div className="relative w-60 z-1">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={promotionsWithImages[(currentPromotionIndex - 1 + promotionsWithImages.length) % promotionsWithImages.length].upcomingPromotion}
            alt={`Promotion ${currentPromotionIndex - 1}`}
          />
        </div>
        <div className="relative w-80 z-3">
          <img
            className="w-full"
            src={promotionsWithImages[currentPromotionIndex].upcomingPromotion}
            alt={`Promotion ${currentPromotionIndex}`}
          />
        </div>
        <div className="relative w-60 z-1">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={promotionsWithImages[(currentPromotionIndex + 1) % promotionsWithImages.length].upcomingPromotion}
            alt={`Promotion ${currentPromotionIndex + 1}`}
          />
        </div>
        </div>
        <button
          onClick={nextPromotion}
          className="flex justify-center items-center p-3 rounded-md  bg-primary-100 -ml-4 size-10 z-3"
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
