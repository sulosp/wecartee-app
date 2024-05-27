import { React, useState } from "react";
import { USER } from "../../lib/consts/userDetails";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

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

  return (
    <button
      className="inline-flex justify-between w-full p-20 items-center"
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
  );
}
