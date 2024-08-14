import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./../../public/logo.png";
import Container from "../Components/ui/container";
import avatar from "../assets/avatar.png";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import CookieService from "../Services/CookieService";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const token = CookieService.get("jwt");
  const logoutHandler = () => {
    CookieService.remove("jwt")
    window.location.reload()
  };

  return (
    <header className="bg-white border-b-2 border-gray-200 fixed z-50 left-0 right-0 top-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              to="/"
              className="flex items-center font-bold gap-2 text-primary"
              href="#"
            >
              <img src={Logo} className="w-36" alt="Logo" />
            </Link>
          </div>

          {location.pathname === "/" && (
            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#home"
                    >
                      الرئيسية
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#features"
                    >
                      المميزات
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#blog"
                    >
                      المدونة
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#teachers"
                    >
                      التقييمات
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {show && (
            <nav className="bg-white shadow-md border-t-2 absolute top-full left-0 right-0">
              <Container>
                <ul className="flex flex-col justify-center gap-4 py-5 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#home"
                    >
                      الرئيسية
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#features"
                    >
                      المميزات
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#blog"
                    >
                      المدونة
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-primary"
                      href="#teachers"
                    >
                      التقييمات
                    </a>
                  </li>
                </ul>
              </Container>
            </nav>
          )}

          {
            token ? 
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={avatar}
                    className="shadow-md border-2"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} to="profile">
                    الملف الشخصي
                  </MenuItem>
                  <MenuItem as={Link} to="profile/settings">
                    الإعدادات
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logoutHandler}>تسجيل الخروج</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
              :
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md hover:bg-gray-100 hover:text-primary transition-all bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                to="/register"
              >
                تسجيل
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md transition-all hover:bg-primary hover:text-white bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                  to="/login"
                >
                  تسجيل الدخول
                </Link>
              </div>
            </div>

                      
            {
              location.pathname === "/" && <div onClick={()=>{setShow((prev) => !prev)}} className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            }

            
          </div>
          }

        </div>
      </div>
    </header>
  );
};

export default Navbar;
