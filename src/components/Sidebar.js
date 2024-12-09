import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 h-80">
      <ul>
        <li>Music</li>
        <li>Videos</li>
        <li>Themes</li>
      </ul>
      <h3 className="font-bold">Subscriptions</h3>
      <ul>
        <li>Music</li>
        <li>Videos</li>
        <li>Themes</li>
      </ul>
      <h3 className="font-bold pt-5">Watch later</h3>
      <ul>
        <li>Music</li>
        <li>Videos</li>
        <li>Themes</li>
      </ul>
    </div>
  );
};

export default Sidebar;
