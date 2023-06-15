import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import { RiPaletteLine } from "react-icons/ri"
import { GiMeepleGroup } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { SettingsIcon } from "@chakra-ui/icons";

const Sidebar = ({ show, setShow }) => {
  
  return (
    <div className={show ? "sidebar" : "sidebar-hide"}>
      <div className="sidebar-nav">
        <Link href={"/"}>Asikur Icons </Link>
      </div>

      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/"}>Getting Started</Link>
        <a href="#">
          <AiOutlineRight />
        </a>
      </div>
      <div className="sidebar-nav">
        <RiPaletteLine />

        <Link href={"/"}>Styled System</Link>
        <a href="#">
          <AiOutlineRight />
        </a>
      </div>
      <div className="sidebar-nav">
        <GiMeepleGroup />

        <Link href={"/"}>Components</Link>
        <a href="#">
          <AiOutlineRight />
        </a>
      </div>
      <div className="sidebar-nav">
        <SettingsIcon />

        <Link href={"/blog"}>Hooks</Link>
      </div>
      <div className="sidebar-nav">
        <SettingsIcon />

        <Link href={"/figma"}>Figma</Link>
      </div>
      <div className="sidebar-nav">
        <MdOutlineGroups />

        <Link href={"/community"}>Community</Link>
      </div>
      {/* 2 */}
      <div className="sidebar-nav">
        <Link href={"/playground"}>Playground</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/"}>Home</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/"}>Home</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/blog"}>Blogs</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/about"}>About</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/login"}>login</Link>
      </div>
      {/* 3 */}
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/"}>Home</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/"}>Home</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/"}>Home</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/blog"}>Blogs</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/about"}>About</Link>
      </div>
      <div className="sidebar-nav">
        <AiOutlineHome />

        <Link href={"/login"}>login</Link>
      </div>
    </div>
  );
};

export default Sidebar;
