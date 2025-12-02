import { logoutUser } from "@/utils/browserHelper";
import Image from "next/image";

const NewUserNavBar = ({ userName = "", userId = "" }) => {
  return (
    <div className="relative group">
      <div className="flex items-center p-2 rounded cursor-pointer">
        <Image
          src={"https://assets.fyers.in/images/global-header/user-img.svg"}
          alt="User-icon"
          width={28}
          height={28}
        />
        <div className="flex flex-col gap-[4px]">
          <span className="ml-2 font-manrope not-italic text-[#F0F0FA] text-[14px] font-[500]">
            {userName}
          </span>
          <span className="ml-2 font-manrope not-italic text-[#F0F0FA] text-[12px] font-[400] leading-[16px]">
            {userId}
          </span>
        </div>
      </div>

      <div
        className="absolute top-full left-0 z-[1500] min-w-[8rem] bg-white border border-[#e2e8fe] shadow-[2px_4px_20px_0_rgba(0,0,0,0.16)] drop-shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 py-3 px-1 flex items-center space-x-2 cursor-pointer"
        onClick={logoutUser}
      >
        <img
          src="https://assets.fyers.in/images/global-header/icon-logout.svg"
          alt="logout-svg"
        />
        <span className="text-[#2a394e]">Logout</span>
      </div>
    </div>
  );
};

export default NewUserNavBar;
