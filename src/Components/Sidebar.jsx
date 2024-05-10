import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../public/images/sidebar-logo.svg"
import home from "../../public/images/sidebar-home.svg"
import discount from "../../public/images/sidebar-discount.svg"
import statistic from "../../public/images/sidebar-static.svg"
import message from "../../public/images/sidebar-message.svg"
import noti from "../../public/images/sidebar-notification.svg";
import settings from "../../public/images/sidebar-settings.svg";
import logout from "../../public/images/sidebar-logout.svg";

const Sidebar = () => {
  return (
    <div className="fixed">
      <div className="sidebar justify-between p-4 bg-[#1F1D2B] flex flex-col items-center h-screen w-24 rounded-r-xl gap-5">
        <NavLink to="/">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={Logo}
            alt=""
          />
        </NavLink>
        <NavLink to="/">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={home}
            alt=""
          />
        </NavLink>
        <NavLink to="/discount">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={discount}
            alt=""
          />
        </NavLink>
        <NavLink to="/stat">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={statistic}
            alt=""
          />
        </NavLink>
        <NavLink to="/message">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={message}
            alt=""
          />
        </NavLink>
        <NavLink to="/notify">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={noti}
            alt=""
          />
        </NavLink>
        <NavLink to="/settings">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={settings}
            alt=""
          />
        </NavLink>
        <NavLink to="/logout">
          <img
            className="cursor-pointer p-4 hover:bg-[#EA7C69] rounded-lg transition-all duration-500"
            src={logout}
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar