import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const userModalContainer = useRef();
  const handleOutsideClick = (e) => {
    if (userModalContainer.current && !userModalContainer.current.contains(e.target)) {
        setIsOpenUserModal(false);
    }
  }

  useEffect(() => {
    if (isOpenUserModal) {
        document.addEventListener("click", handleOutsideClick)
    }

    return () => {
        document.removeEventListener("click", handleOutsideClick)
    }
  },[isOpenUserModal])



  return (
    <div className="absolute z-10 left-0 top-0 right-0 bg-[#E9F2FF] h-16 shadow-md flex justify-between items-center px-8">
      <div>
        <img
          src="/img/logo-notext.png"
          alt="logo Stuto"
          className="w-16 object-cover"
        />
      </div>
      <div className="flex gap-1">
        <Link
          className="px-4 leading-[4rem] font-semibold transition-all hover:text-primaryColor"
          to="/"
        >
          Dashboard
        </Link>
        <Link
          className="px-4 leading-[4rem] font-semibold transition-all hover:text-primaryColor"
          to="/users"
        >
          Users
        </Link>
        <Link
          className="px-4 leading-[4rem] font-semibold transition-all hover:text-primaryColor"
          to="/majors"
        >
          Majors
        </Link>
        <Link
          className="px-4 leading-[4rem] font-semibold transition-all hover:text-primaryColor"
          to="/subjects"
        >
          Subjects
        </Link>
        <Link
          className="px-4 leading-[4rem] font-semibold transition-all hover:text-primaryColor"
          to="/reports"
        >
          Reports
        </Link>
      </div>
      <div className="flex justify-between items-center gap-3">
        <FaRegBell className="text-lg mr-2 cursor-pointer transition-all hover:text-primaryColor" />
        <div className="h-8 border-2 border-l-gray-300"></div>
        <div
          onClick={(e) => setIsOpenUserModal(!isOpenUserModal)}
          className="relative w-36 font-medium cursor-pointer group"
          ref={userModalContainer}
        >
          <p className="flex gap-1 justify-center items-center leading-[4rem]">
            Username <IoMdArrowDropdown />
          </p>
          <ul
            className={`absolute top-[80%] right-18 w-36 bg-white text-center rounded-lg shadow-sm overflow-hidden py-2 ${
              isOpenUserModal ? "block" : "hidden"
            }`}
          >
            <li className="py-3 hover:text-white hover:bg-[#918ee7]">
              Tùy chỉnh
            </li>
            <li className="py-3 hover:text-white hover:bg-[#918ee7]">
              Đăng xuất
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
