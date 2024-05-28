import React, { useState } from "react";
import { USER } from "../../lib/consts/userDetails";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BuyerIcon } from "../../assets/buyerIcon.svg";
import { ReactComponent as SellerIcon } from "../../assets/sellerIcon.svg";
import classNames from "classnames";

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
    "rounded-full p-[10px] text-white max-lg:p-0 w-1/2 inline-flex justify-center items-center gap-2 ";

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col p-20 gap-5">
      <div className="inline-flex max-lg:hidden  rounded-full p-[8px]  bg-gradient-to-r from-blue-400 to-fuchsia-500 shadow-inner items-center">
        <Link to="/"
          className={classNames(
            pathname === "/businessDirectory" || pathname === "/cart" || pathname === "/socialZone" || pathname === "/savedBusinesses" || pathname === "/chat" || pathname === "/"
              ? "text-primary-900 bg-primary-100"
              : "text-primary-100",
            LinkClasses
          )}
        >
          <span>
            <BuyerIcon />
          </span>
          <span>Buyer</span>
        </Link>
        <Link to="/overview" className={classNames(
            pathname=== "/overview"  ? "text-primary-900 bg-primary-100"
            : "text-primary-100" ,LinkClasses)}>
          <span>
            <SellerIcon />
          </span>
          <span>Seller</span>
        </Link>
      </div>
      <button
        className="inline-flex justify-between w-full items-center"
        onClick={handleClick}
      >
        <div className="inline-flex justify-start gap-3 items-center">
          <img src={item.avatar} alt="user" />
          <span className="text-sm text-primary-100 font-normal leading-tight max-lg:hidden lg:flex">
            {item.name}
          </span>
        </div>

        <span className="text-primary-100">
          {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </button>
    </div>
  );
}
