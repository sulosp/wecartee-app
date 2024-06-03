import React, { useState, useEffect, useCallback } from "react";
import { BUSINESS_DIRECTORY_LIST } from "../../lib/businessDirectoryList";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

export default function ImageCarousel() {
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);

  const promotionsWithImages = BUSINESS_DIRECTORY_LIST.filter(
    (item) => item.upcomingPromotion !== null
  );

  const nextPromotion = useCallback(() => {
    setCurrentPromotionIndex(
      (prevIndex) => (prevIndex + 1) % promotionsWithImages.length
    );
  }, [promotionsWithImages.length]);

  const prevPromotion = useCallback(() => {
    setCurrentPromotionIndex(
      (prevIndex) =>
        (prevIndex - 1 + promotionsWithImages.length) %
        promotionsWithImages.length
    );
  }, [promotionsWithImages.length]);

  useEffect(() => {
    const interval = setInterval(nextPromotion, 5000);
    return () => clearInterval(interval);
  }, [nextPromotion]);

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
        <div className="w-full inline-flex justify-center items-center">
          <div className="relative w-96 h-64 z-2 overflow-hidden rounded-md">
            <img
              className="absolute top-0 left-0 w-full h-full transition duration-1000"
              src={
                promotionsWithImages[
                  (currentPromotionIndex - 1 + promotionsWithImages.length) %
                    promotionsWithImages.length
                ].upcomingPromotion
              }
              alt={`Promotion ${currentPromotionIndex - 1}`}
            />
          </div>
          <div className="relative w-56 h-48 -ml-100 z-1 overflow-hidden rounded-md">
            <img
              className="w-full h-full transition duration-1000"
              src={
                promotionsWithImages[currentPromotionIndex].upcomingPromotion
              }
              alt={`Promotion ${currentPromotionIndex}`}
            />
          </div>
          <div className="relative w-36 h-24 -ml-100 z-0 overflow-hidden rounded-md">
            <img
              className="absolute top-0 left-0 w-full h-full transition duration-1000"
              src={
                promotionsWithImages[
                  (currentPromotionIndex + 1) % promotionsWithImages.length
                ].upcomingPromotion
              }
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
