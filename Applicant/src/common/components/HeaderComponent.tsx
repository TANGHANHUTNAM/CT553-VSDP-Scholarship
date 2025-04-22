import React, { useState } from "react";
import BackToTop from "./BackToTop";
import logo from "../../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ROUTER_INDEX } from "../../constant/routerConstant";
import { FaHandPointRight } from "react-icons/fa";

const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border border-b-2 border-t-8 border-b-gray-300 border-t-primary bg-white text-[14px] shadow-md">
      <BackToTop />
      <div className="flex items-center justify-between space-x-2 px-4 py-2">
        {/* Logo */}
        <NavLink to={"/"} className="flex items-center space-x-1">
          <img src={logo} alt="VSDP LOGO" className="h-16" />
          <span className="text-2xl font-semibold text-primary">VSDP</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-4 font-medium uppercase lg:flex lg:space-x-6">
          <NavLink
            to={ROUTER_INDEX.HomePage.router}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-800 hover:text-primary"
            }
          >
            Trang Chủ
          </NavLink>
          <NavLink
            to={ROUTER_INDEX.InformationPage.router}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-800 hover:text-primary"
            }
          >
            Thông Tin Học Bổng
          </NavLink>
          <NavLink
            to={ROUTER_INDEX.CriteriaPage.router}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-800 hover:text-primary"
            }
          >
            Đối Tượng Và Tiêu Chí
          </NavLink>
          <NavLink
            to={ROUTER_INDEX.ContactPage.router}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-800 hover:text-primary"
            }
          >
            Liên hệ
          </NavLink>
          <NavLink
            to={ROUTER_INDEX.ScholarshipSearchPage.router}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-gray-800 hover:text-primary"
            }
          >
            Tra Cứu Học Bổng
          </NavLink>
          <NavLink
            to={ROUTER_INDEX.ApplyPage.router}
            className={({ isActive }) =>
              `flex min-w-fit items-center justify-center gap-1.5 rounded-md border-b-2 border-r-2 border-solid border-gray-400 px-2.5 py-2 text-white shadow-lg hover:bg-primary ${
                isActive ? "bg-primary" : "bg-[#333333]"
              }`
            }
          >
            <FaHandPointRight className="text-lg" />
            Nộp Hồ Sơ
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-800 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute -left-2 top-20 w-full bg-white uppercase shadow-md lg:hidden">
            <ul className="flex w-full flex-col space-y-4 px-6 py-4 font-medium">
              <li>
                <NavLink
                  to={ROUTER_INDEX.HomePage.router}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }
                >
                  Trang Chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.InformationPage.router}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }
                >
                  Thông Tin Học Bổng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.CriteriaPage.router}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }
                >
                  Đối Tượng Và Tiêu Chí
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.ContactPage.router}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }
                >
                  Liên hệ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.ScholarshipSearchPage.router}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }
                >
                  Tra Cứu Học Bổng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTER_INDEX.ApplyPage.router}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }
                >
                  Nộp Hồ Sơ Học Bổng
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
