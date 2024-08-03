import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import CookieService from "../../Services/CookieService";

const Sidebar = ({ show, setShow }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const logoutHandler = ()=>{
    CookieService.remove("jwt")
    window.location.reload()
    navigate("/")
  }
  return (
    <>
      <div
        className={`xl:w-80 z-50 w-80 transition-all shadow-sm fixed md:right-0 md:top-0 md:bottom-0 ${
          show ? "right-0 top-0 bottom-0" : "-right-full"
        } xl:p-4 border-l-2 p-2 bg-white flex-col justify-start items-start gap-5 inline-flex border-r`}
      >
        <div className="w-full pt-4 justify-between items-center gap-2.5 inline-flex">
          <a>
            <img src={logo} className="w-32 md:mx-auto" alt="logo" />
          </a>
          <a
            onClick={() => {
              setShow(!show);
            }}
            className="w-6 h-6 block md:hidden relative bg-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu">
                <rect width="24" height="24" fill="white" />
                <path id="icon" d="M13 6H21M3 12H21M7 18H21" stroke="#1F2937" />
              </g>
            </svg>
          </a>
        </div>
        <div className="w-full border-t-2 pt-3 mt-3">
          <ul className="flex-col gap-2 flex">
            <li>
              <Link
                className={`side-link ${
                  location.pathname === "/profile" && "active"
                }`}
                to="/profile"
              >
                <div className="flex-col text-gray-500 hover:bg-primary hover:text-white transition-all flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 font-light"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </div>
                    <h2 className="text-sm font-medium leading-snug">استكشف</h2>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <NavLink className="side-link" to="watch-later">
                <div className="flex-col text-gray-500 hover:bg-primary hover:text-white transition-all flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-sm font-medium leading-snug">
                      المشاهدة لاحقا
                    </h2>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className="side-link" to="history">
                <div className="flex-col text-gray-500 hover:bg-primary hover:text-white transition-all flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-sm font-medium leading-snug">السجل</h2>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="side-link" to="certificates">
                <div className="flex-col text-gray-500 hover:bg-primary hover:text-white transition-all flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-sm font-medium leading-snug">
                      الشهادات
                    </h2>
                  </div>
                </div>
              </NavLink>
            </li> */}
            <li>
              <NavLink className="side-link" to="settings">
                <div className="flex-col text-gray-500 hover:bg-primary hover:text-white transition-all flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-sm font-medium leading-snug">
                      الإعدادات
                    </h2>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <button onClick={logoutHandler} className="w-full">
                <div className="flex-col text-gray-500 hover:bg-primary hover:text-white transition-all flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>
                    </div>
                    <h2 className="text-sm font-medium leading-snug">
                      تسجيل الخروج
                    </h2>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav z-40 flex justify-between items-center md:hidden bg-primary py-3 px-4 fixed top-0 left-0 right-0">
        <Link to="/profile" className="font-bold text-white">المتفوقين</Link>
        <div
          onClick={() => setShow(!show)}
          className="bg-gray-200 border-2 p-1 rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
