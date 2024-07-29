import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="flex gap-5">
      <Sidebar show={isShow} setShow={setIsShow} />
      <div
        className={`md:pr-[320px] w-full pt-[56px] md:pt-0 ${
          !isShow && "pr-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
