import AccordionItem from "./AccordionItem";
import AccordionDropDowns from "./AccordionDropDowns";
import { dropDowns } from "@/data/navbarLinks";
import { useUser } from "@/contexts/UserContext";
import UserTabNavBar from "./UserTabNavBar";
import { logoutUser } from "@/utils/browserHelper";

const MobileNavBar = ({ isOpen, setToogle }) => {
  const userData = useUser();
  return (
    <>
      {/* Hamburger Icon */}
      <div
        className="block sm:hidden cursor-pointer"
        onClick={setToogle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#2A394E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
            stroke="#2A394E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="absolute top-2/12 left-[2.5%] w-[95%] min-h-[80vh] bg-white rounded-lg shadow-[2px_4px_32px_16px_rgba(42,43,46,0.1)] z-[999] sm:hidden "
          id="mobile-nav"
          role="menu"
        >
          {/* Top */}
          <div className="flex justify-between items-center p-5 bg-transparent">
            {/* User info */}
            {userData.userLoggedIn ? (
              <UserTabNavBar userId={userData.userId} />
            ) : (
              <div></div>
            )}

            {/* Close btn */}
            <button onClick={setToogle} className="cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7619 15.0002L22.1369 9.63773C22.3723 9.40235 22.5045 9.08311 22.5045 8.75023C22.5045 8.41735 22.3723 8.09811 22.1369 7.86273C21.9016 7.62735 21.5823 7.49512 21.2494 7.49512C20.9166 7.49512 20.5973 7.62735 20.3619 7.86273L14.9994 13.2377L9.63694 7.86273C9.40156 7.62735 9.08231 7.49512 8.74944 7.49512C8.41656 7.49512 8.09732 7.62735 7.86194 7.86273C7.62656 8.09811 7.49432 8.41735 7.49432 8.75023C7.49432 9.08311 7.62656 9.40235 7.86194 9.63773L13.2369 15.0002L7.86194 20.3627C7.74477 20.4789 7.65178 20.6172 7.58832 20.7695C7.52486 20.9218 7.49219 21.0852 7.49219 21.2502C7.49219 21.4152 7.52486 21.5786 7.58832 21.731C7.65178 21.8833 7.74477 22.0215 7.86194 22.1377C7.97814 22.2549 8.11639 22.3479 8.26871 22.4113C8.42104 22.4748 8.58442 22.5075 8.74944 22.5075C8.91445 22.5075 9.07783 22.4748 9.23016 22.4113C9.38248 22.3479 9.52073 22.2549 9.63694 22.1377L14.9994 16.7627L20.3619 22.1377C20.4781 22.2549 20.6164 22.3479 20.7687 22.4113C20.921 22.4748 21.0844 22.5075 21.2494 22.5075C21.4145 22.5075 21.5778 22.4748 21.7302 22.4113C21.8825 22.3479 22.0207 22.2549 22.1369 22.1377C22.2541 22.0215 22.3471 21.8833 22.4106 21.731C22.474 21.5786 22.5067 21.4152 22.5067 21.2502C22.5067 21.0852 22.474 20.9218 22.4106 20.7695C22.3471 20.6172 22.2541 20.4789 22.1369 20.3627L16.7619 15.0002Z"
                  fill="#2A394E"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div>
            <ul className="list-none m-0 p-[8px_20px] font-normal text-xs">
              <li className="flex flex-col mb-2 relative min-h-[3rem] self-center">
                <a
                  href="https://fyers.in/about.php"
                  className="flex items-center text-[11px] uppercase text-[#050505] no-underline py-2"
                >
                  Who We Are?
                </a>
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <AccordionItem
                  title={"Products"}
                  redirectionLink={`https://fyers.in/product/`}
                  children={
                    <AccordionDropDowns
                      dropdownItems={dropDowns.productDropDowns}
                    />
                  }
                />
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <AccordionItem
                  title={"Calculators"}
                  redirectionLink={`https://fyers.in/calculators/`}
                  children={
                    <AccordionDropDowns
                      dropdownItems={dropDowns.calculatorDropDowns}
                    />
                  }
                />
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <a
                  href="https://fyers.in/pricing/"
                  className="flex items-center text-[11px] uppercase text-[#050505] no-underline py-2"
                >
                  Pricing
                </a>
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <AccordionItem
                  title={"Media"}
                  redirectionLink={`https://fyers.in/#`}
                  children={
                    <AccordionDropDowns
                      dropdownItems={dropDowns.mediaDropDown}
                    />
                  }
                />
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <a
                  href="https://fyers.in/products/community.php"
                  className="flex items-center text-[11px] uppercase text-[#050505] no-underline py-2"
                >
                  Community
                </a>
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <a
                  href="https://support.fyers.in/"
                  className="flex items-center text-[11px] uppercase text-[#050505] no-underline py-2"
                >
                  Support
                  <img
                    className="mb-1.5 ml-0.5"
                    src="https://assets.fyers.in/images/website/icon-open-blank.svg"
                    alt="open-tab-svg"
                    height={12}
                    width={12}
                  />
                </a>
              </li>

              <li className="flex flex-col relative min-h-[3rem] self-center">
                <AccordionItem
                  title={"Others"}
                  redirectionLink={`https://fyers.in/#`}
                  children={
                    <AccordionDropDowns
                      dropdownItems={dropDowns.othersDropDown}
                    />
                  }
                />
              </li>
            </ul>
          </div>

          <div className="p-2 border-t border-[#ccc]">
            {userData.userLoggedIn ? (
              <div>
                <div className="block text-[12px] text-[#436AF5] border border-[#436AF5] text-center py-2 rounded cursor-pointer"
                onClick={logoutUser}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div className="mb-2">
                <a
                  href="https://signup.fyers.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[12px] bg-[#436AF5] text-white text-center py-2 rounded cursor-pointer"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
