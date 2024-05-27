import React from "react";
import { USER } from "../../lib/consts/userDetails";
import {HiChevronDown} from 'react-icons/hi'

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
  return (
    <button className="inline-flex justify-between w-full p-20 items-center">
      <div className="inline-flex justify-start gap-3 items-center">
        <img src={item.avatar} alt="user" />
        <span className="text-sm text-primary-100 font-normal leading-tight max-lg:hidden lg:flex">
          {item.name}
        </span>
      </div>
      <span className="text-primary-100"><HiChevronDown /></span>
    </button>
  );
}
