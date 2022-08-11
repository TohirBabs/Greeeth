import React from "react";
import Badgeicon from "./Dashboard/Badgeicon";
import { Cycleicon } from "./Dashboard/Cycleicon";
import Dashicon from "./Dashboard/Dashicon";
import { Footprinticon } from "./Dashboard/Footprinticon";
import { Goalicon } from "./Dashboard/Goalicon";
// import { Logouticon } from "./Dashboard/Logout.png";
import { Offseticon } from "./Dashboard/Offseticon";
import { Projecticon } from "./Dashboard/Projecticon";
// import { Treeicon } from "./Dashboard/Treeico";
import { Walleticon } from "./Dashboard/Walleticon";
import FootLogo from "../../assets/FootLogo";
// import { Treeicon } from "./Dashboard/Treeicon";
// import { Logouticon } from "./Dashboard/Logouticon";
// import { Offseticon } from "./Dashboard/Offseticon";

const Sidebar = () => {
  return (
    <div className="bg-lgreen sm:px-8 sm:py-10 py-2 flex-none">
      <div className="sm:block hidden">
        <FootLogo />
      </div>
      <div className="sm:hidden">
        <FootLogo small={true} />
      </div>

      <div className="mt-16 sm:pl-4  sm:pl-0">
        <ul className="mx-auto">
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Dashicon clr="white" />
            <p className="text-white hidden sm:block">Overview</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Walleticon />
            <p className="text-white hidden sm:block">Wallet</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Footprinticon />
            <p className="text-white hidden sm:block">Carbon footprint</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Offseticon />
            <p className="text-white hidden sm:block">Carbon offset</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Projecticon />
            <p className="text-white hidden sm:block">Project</p>
          </div>
          {/* <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Treeicon />
            <p className="text-white hidden sm:block">Trees</p>
          </div> */}
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Cycleicon />
            <p className="text-white hidden sm:block">Life cycle analysis</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Goalicon />
            <p className="text-white hidden sm:block">Goal</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start my-6 sm:p-4 p-1 sm:gap-2">
            <Badgeicon />
            <p className="text-white hidden sm:block">Badge</p>
          </div>
          {/* <div className="flex items-center justify-center sm:justify-start my-6 mt-10 sm:p-4 p-1 sm:gap-2">
            <Logouticon />
            <p className="text-white hidden sm:block">Log out</p>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;