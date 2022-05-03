import React from "react";
import { header, headerLogo } from "../../assets/header";

export const NavItem = (props) => {
  return (
    <>
      {header?.map(navItem => {
        return(          
          <div className="z-10 text-[9.5px] bg-[#FFFFFF33] py-[4px] px-[16px] rounded-[4px] tracking-widest cursor-pointer hover:bg-[#FFFFFF] hover:transition-all delay-300 ease-in-out hover:shadow-lg shadow-white hidden lg:block">
            {navItem}
          </div>
        )
      })}

      {headerLogo?.map(navItem => {
        return <div className="z-10 text-[9.5px] bg-[#FFFFFF33] py-[4px] px-[16px] rounded-[4px] tracking-widest cursor-pointer hover:bg-[#FFFFFF] hover:transition-all delay-200 ease-in-out hover:shadow-lg shadow-white hidden lg:block">
          <i className={navItem}></i>
        </div>
      })}
    </>
  );
};
