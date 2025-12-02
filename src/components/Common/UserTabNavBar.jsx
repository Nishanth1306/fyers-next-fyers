import { logoutUser } from "@/utils/browserHelper";
import Image from "next/image";

const UserTabNavBar = ({ userId = "", bottomArrowOpen = false }) => {

  return (
    <div className="relative group">
      <div className="flex items-center p-2 rounded cursor-pointer">
        <Image
          src={"https://assets.fyers.in/images/global-header/user-img.svg"}
          alt="User-icon"
          width={28}
          height={28}
        />
        <span className="ml-2 text-[13px] font-semibold text-xs text-[#6a7582]">
          {userId}
        </span>
        {bottomArrowOpen && (
          <svg
            className="ml-1 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
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

export default UserTabNavBar;
