import React, { useEffect, useRef, useState } from "react";
import { useLogOut } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ currentPath }) => {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const [isOpenNotiModal, setIsOpenNotiModal] = useState(false);
  const userModalContainer = useRef();
  const notiModalContainer = useRef();
  // const username = localStorage.getItem("username");
  const { logout } = useLogOut();
  const [state, dispatch] = useAuthContext();
  const { user } = state;
  
  const handleOutsideClick = (e) => {
    if (userModalContainer.current && !userModalContainer.current.contains(e.target)) {
      setIsOpenUserModal(false);
    } 
    if (notiModalContainer.current && !notiModalContainer.current.contains(e.target)) {
      setIsOpenNotiModal(false);
    }
  }

  const handleLogoutClick = () => {
    logout();
  }

  useEffect(() => {
    if (isOpenUserModal) {
      document.addEventListener("click", handleOutsideClick);
    }
    
    if (isOpenNotiModal) {
        document.addEventListener("click", handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    }
  },[isOpenUserModal, isOpenNotiModal])
  
  
  
  return (
    <div className="absolute z-10 left-0 top-0 right-0 bg-[#E9F2FF] h-16 shadow-md text-center flex justify-between items-center px-8">
      <Link to="/">
        <img
          src="/img/logo-notext.png"
          alt="logo Stuto"
          className="w-16 object-cover"
        />
      </Link>
      <div className="flex gap-1">
        <Link
          className={` px-4 leading-[4rem] font-semibold border-b-2 border-b-transparent transition-all hover:text-primaryColor ${currentPath === '/' && "text-primaryColor border-b-current border-b-[#918ee7]"}`}
          to="/"
        >
          Tổng quát
        </Link>
        <Link
          className={` px-4 leading-[4rem] font-semibold border-b-2 border-b-transparent transition-all hover:text-primaryColor ${currentPath === '/users' && "text-primaryColor border-b-current border-b-[#918ee7]"}`}
          to="/users"
        >
          QL Người dùng
        </Link>
        <Link
          className={` px-4 leading-[4rem] font-semibold border-b-2 border-b-transparent transition-all hover:text-primaryColor ${currentPath === '/majors' && "text-primaryColor border-b-current border-b-[#918ee7]"}`}
          to="/majors"
        >
          QL Chuyên ngành
        </Link>
        <Link
          className={` px-4 leading-[4rem] font-semibold border-b-2 border-b-transparent transition-all hover:text-primaryColor ${currentPath === '/subjects' && "text-primaryColor border-b-current border-b-[#918ee7]"}`}
          to="/subjects"
        >
          QL Môn học
        </Link>
        <Link
          className={` px-4 leading-[4rem] font-semibold border-b-2 border-b-transparent transition-all hover:text-primaryColor ${currentPath === '/reports' && "text-primaryColor border-b-current border-b-[#918ee7]"}`}
          to="/reports"
        >
          Xử lý báo cáo
        </Link>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div
          onClick={(e) => setIsOpenNotiModal(!isOpenNotiModal)}
          className="relative w-8"
          ref={notiModalContainer}
        >
          <FaRegBell className="text-lg mr-2 cursor-pointer transition-all hover:text-primaryColor" />
          <ul
            className={`absolute top-[150%] -right-8 w-60 bg-white rounded-lg shadow-sm overflow-hidden py-2 cursor-pointer ${
              isOpenNotiModal ? "block" : "hidden"
            }`}
          >
            <li className="truncate pl-4 py-3 pr-2 text-sm hover:text-white hover:bg-[#918ee7]">
              Có 1 thông báo mới đến từ StuTo
            </li>
            <li className="truncate pl-4 py-3 pr-2 text-sm hover:text-white hover:bg-[#918ee7]">
              Có 1 thông báo mới đến từ StuTo
            </li>
          </ul>
        </div>
        <div className="h-8 border-2 border-l-gray-300"></div>
        {user && (
          <div
            onClick={(e) => setIsOpenUserModal(!isOpenUserModal)}
            className="relative w-36 font-medium cursor-pointer"
            ref={userModalContainer}
          >
            <p className="flex gap-1 justify-center items-center leading-[4rem]">
              {user.name} <IoMdArrowDropdown />
            </p>
            <ul
              className={`absolute top-[80%] right-0 w-36 bg-white text-center text-sm rounded-lg shadow-sm overflow-hidden py-2 font-normal ${
                isOpenUserModal ? "block" : "hidden"
              }`}
            >
              <li className="py-3 hover:text-white hover:bg-[#918ee7]">
                Thêm admin
              </li>
              <li
                onClick={handleLogoutClick} 
                className="py-3 hover:text-white hover:bg-[#918ee7]"
              >
                Đăng xuất
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
