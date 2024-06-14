import React from "react";
import { HiOutlineViewGrid, HiOutlineViewBoards } from "react-icons/hi";
import classNames from "classnames";

export default function ViewToggle({ activeView, setActiveView }) {
  const handleGridClick = () => {
    setActiveView("card");
  };

  const handleBoardClick = () => {
    setActiveView("list");
  };

  return (
    <div className="btn-group inline-flex gap-2">
      <button
        onClick={handleGridClick}
        className={classNames(
          "p-12 rounded-md focus:bg-primary-100 focus-visible:bg-primary-100 active:bg-primary-100",
          { "bg-primary-100": activeView === "card" }
        )}
      >
        <span>
          <HiOutlineViewGrid />
        </span>
      </button>
      <button
        onClick={handleBoardClick}
        className={classNames(
          "p-12 rounded-md focus:bg-primary-100 focus-visible:bg-primary-100 active:bg-primary-100",
          { "bg-primary-100": activeView === "list" }
        )}
      >
        <span>
          <HiOutlineViewBoards />
        </span>
      </button>
    </div>
  );
}
