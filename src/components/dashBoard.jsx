import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./menuBar";

export default function DashBoard() {
  return (
    <>
    <div>
    <MenuBar />
    </div>
      
      <div>
        <Outlet/>
      </div>
    </>
  );
}
