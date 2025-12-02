"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GlobalNavbar from "./GlobalNavBar";
import MobileNavBar from "./MobileNavBar";
import { globalNavBar } from "@/data/navbarLinks";
import { useUser } from "@/contexts/UserContext";
import UserTabNavBar from "./UserTabNavBar";

const NavBar = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isGlobalOpen, setGlobalOpen] = useState(false);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const userData = useUser();

  const handleMobileToggle = () => setMobileModalOpen(prev => !prev);

  return (
    <>
      <div className="border-b border-[#f4f4f5] relative">
        <div className="bg-white max-h-[80px] py-3.5 md:py-5 md:pb-7.5 px-4 md:px-[2.689rem] flex items-center justify-between">
          <Link href="/">
            <Image
              src="https://assets.fyers.in/images/logo.svg"
              alt="Fyers Logo"
              width={114}
              height={30}
              priority
            />
          </Link>

          <ul className="hidden not-italic lg:flex m-0 p-0 items-center list-none">
            <li className="px-[1.69rem] first:pl-0">
              <Link
                href="https://fyers.in/about/"
                className="text-[14px] font-medium leading-5 text-[#6a7582] uppercase"
              >
                Who We Are
              </Link>
            </li>

            <li
              className="pl-[1.69rem] pr-[1.47rem] relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="text-[14px] font-medium leading-5 text-[#6a7582] uppercase flex items-center">
                Products
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
              </button>

              {isProductsOpen && (
                <ul className="absolute left-0 top-full min-w-[13rem] bg-gradient-to-b from-white to-[#eceff7] shadow-[2px_4px_20px_rgba(0,0,0,0.16)] p-6 border border-[#e2e8fe] z-50 text-[15px] font-medium text-[#2a394e]">
                  <li className="group">
                    <Link
                      href="https://fyers.in/media.php"
                      className="flex items-center justify-between py-2 capitalize"
                    >
                      Press Coverage
                      <img
                        src="https://assets.fyers.in/images/website/icon-arrow-right-header.svg"
                        alt="arrow-right"
                        className="invisible group-hover:visible"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://fyers.in/blog/"
                      className="block py-2 capitalize"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://fyers.in/webinars/"
                      className="block py-2 capitalize"
                    >
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <hr className="my-2 border-t border-gray-200" />
                  </li>
                  <li>
                    <Link
                      href="https://fyers.in/events/"
                      className="block py-2 capitalize"
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-[1.47rem]">
              <Link
                href="https://fyers.in/pricing/"
                className="text-[14px] font-medium leading-5 text-[#6a7582] uppercase"
              >
                Pricing
              </Link>
            </li>
            <li className="px-[1.47rem]">
              <Link
                href="https://fyers.in/products/community/"
                className="text-[14px] font-medium leading-5 text-[#6a7582] uppercase"
              >
                Community
              </Link>
            </li>
            <li className="px-[1.47rem]">
              <Link
                href="https://support.fyers.in/portal/en/home"
                className="text-[14px] font-medium leading-5 text-[#6a7582] uppercase"
              >
                Support
              </Link>
            </li>
          </ul>

          <ul className="hidden sm:flex items-center justify-end m-0 p-0 list-none min-w-[24rem]">
            {userData.userLoggedIn ? (
              <li>
                <UserTabNavBar userId={userData.userId} bottomArrowOpen={true}/>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="https://login.fyers.in/?cb=https://fyers.in/web"
                    className="text-[14px] font-medium leading-5 text-[#6a7582]"
                  >
                    Sign In
                  </Link>
                </li>
                <li className="pl-[1.69rem]">
                  <Link
                    href="https://signup.fyers.in/"
                    className="rounded-[2px] bg-[#436AF5] text-white text-[14px] font-medium px-[17px] h-8 flex items-center"
                  >
                    Sign Up Now
                  </Link>
                </li>
              </>
            )}
            <li
              className="pl-[1.5rem] cursor-pointer"
              onClick={() => {
                setGlobalOpen(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
              >
                <ellipse
                  cx="5"
                  cy="6.06666"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="12"
                  cy="6.06666"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="19"
                  cy="6.06666"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="5"
                  cy="13.5333"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="12"
                  cy="13.5333"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="19"
                  cy="13.5333"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="5"
                  cy="21"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="12"
                  cy="21"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
                <ellipse
                  cx="19"
                  cy="21"
                  rx="1"
                  ry="1.06667"
                  stroke="#2A394E"
                  strokeWidth="2"
                />
              </svg>
            </li>
          </ul>

          <MobileNavBar
            isOpen={mobileModalOpen}
            setToogle={handleMobileToggle}
          />
        </div>
      </div>
      <GlobalNavbar
        isOpen={isGlobalOpen}
        onClose={() => setGlobalOpen(false)}
        globalNavBar={globalNavBar}
      />
    </>
  );
};

export default NavBar;
