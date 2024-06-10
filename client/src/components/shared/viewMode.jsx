import React, { useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BuyerIcon } from "../../assets/buyerIcon.svg";
import { ReactComponent as SellerIcon } from "../../assets/sellerIcon.svg";
import classNames from "classnames";



const USER = [
  {
      
      key :'user',  
       name : 'Mark S',
       avatar: '/assets/userImg.png',
           
                  
      }
]

export default function ViewMode() {
  return (
    <div>
      {USER.map((item) => (
        <ProfileBtn key={item.key} item={item} />
      ))}
    </div>
  );
}

export function ProfileBtn({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const LinkClasses =
    "rounded-full p-[10px]  max-lg:p-0 w-1/2 max-lg:w-full  max-lg:min-h-8  inline-flex justify-center items-center gap-2 ";

  const { pathname } = useLocation();

  return (
    <div
      className={classNames(
        "flex flex-col justify-end p-20 max-lg:p-8 gap-5 transition-all ease-in-out duration-300 max-lg:items-center  ",
        isExpanded ? "max-h-[150px] max-lg:max-h-[170px] S " : "max-h-[70px] "
      )}
    >
      <div
        className={classNames(
          "inline-flex max-lg:flex-col max-lg:w-10 max-lg:p-[5px]  max-lg:gap-4 rounded-full p-[8px] bg-gradient-to-r from-blue-400 to-fuchsia-500 shadow-inner  items-center  transition-opacity ease-in duration-100 ",
          isExpanded ? "opacity-100 " : "opacity-0 "
        )}
      >
        <Link
          to="/"
          className={classNames(
            pathname === "/businessDirectory" ||
              pathname === "/cart" ||
              pathname.startsWith("/socialZone") ||
              pathname === "/savedBusinesses" ||
              pathname === "/buyerchat" ||
              pathname === "/"
              ? "text-primary-900 bg-primary-100 "
              : "text-primary-100 fill-primary-100",
            LinkClasses
          )}
        >
          <span>
            <BuyerIcon />
          </span>
          <span className="max-lg:hidden"> Buyer</span>
        </Link>
        <Link
          to="/overview"
          className={classNames(
            pathname === "/overview" || pathname === "/sellerchat"
              ? "text-primary-900 bg-primary-100"
              : "text-primary-100 fill-primary-100",
            LinkClasses
          )}
        >
          <span>
            <SellerIcon />
          </span>
          <span className="max-lg:hidden">Seller</span>
        </Link>
      </div>

      <button
        className="inline-flex justify-between w-full items-center max-lg:justify-center"
        onClick={handleClick}
      >
        <div className="inline-flex justify-start gap-3 items-center">
          <img src={item.avatar} alt="user" />
          <span className="text-sm text-primary-100 font-normal leading-tight max-lg:hidden lg:flex">
            {item.name}
          </span>
        </div>

        <span className="text-primary-100 max-lg:hidden ">
          {isExpanded ? (
            <HiChevronUp className="transform rotate-0 transition-transform ease-in-out duration-300" />
          ) : (
            <HiChevronUp className="transform rotate-180 transition-transform ease-in-out duration-300" />
          )}
        </span>
      </button>
    </div>
  );
}
