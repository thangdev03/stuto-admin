import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

function Login() {
    const [emailFocus, setEmailFocus] = useState(false);        
    const [passwordFocus, setPasswordFocus] = useState(false);        
    const [email, setEmail] = useState("");        
    const [password, setPassword] = useState("");        

  return (
    <div className="bg-[url('https://colorlib.com/etc/lf/Login_v4/images/bg-01.jpg')] h-screen bg-no-repeat bg-cover pt-20">
      <div className="bg-white min-h-fit w-96 mx-auto rounded-lg flex flex-col items-center pt-2 pb-12">
        <div className="">
          <img
            src="./img/logo-notext.png"
            alt=""
            className="h-24 object-cover"
          />
        </div>
        <h1 className="font-semibold text-2xl">Đăng nhập</h1>
        <form action="" className="mt-8 w-full px-10">
          <div className="flex flex-col relative">
            <span className="text-sm font-normal">Email</span>
            <div className="flex items-center border-b-2 border-gray-300">
              <FaRegUser className="mx-2" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => setEmailFocus(true)}
                onBlur={(e) => setEmailFocus(false)}
                type="email"
                placeholder="Nhập email của bạn"
                className="mt-1 pl-4 py-3 pr-1 outline-none"
              />
            </div>
            <span
              className={`absolute block bottom-0 left-0 border-b-2 border-gray-500 transition-all duration-300 ${
                emailFocus ? "w-full" : "w-0"
              }`}
            ></span>
          </div>
          <div className="flex flex-col relative mt-4">
            <span className="text-sm font-normal">Mật khẩu</span>
            <div className="flex items-center border-b-2 border-gray-300">
              <MdLockOutline className="mx-2 text-xl" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => setPasswordFocus(true)}
                onBlur={(e) => setPasswordFocus(false)}
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                className="mt-1 pl-4 py-3 pr-1 outline-none"
              />
            </div>
            <span
              className={`absolute block bottom-0 left-0 border-b-2 border-gray-400 transition-all duration-300 ${
                passwordFocus ? "w-full" : "w-0"
              }`}
            ></span>
          </div>
          <div className="mt-10 w-full group overflow-hidden rounded-full bg-transparent shadow-lg">
            <div className="relative z-10">
                <div className="absolute -z-10 -translate-x-2/3 w-[300%] h-full py-3 rounded-full bg-primaryColor text-white bg-gradient-to-r from-[#00dbde] to-[#fc00ff]
                bg-repeat-x transition-all duration-300 group-hover:translate-x-0">
                </div>
                <button className="w-full py-3 rounded-full text-white font-semibold">
                    ĐĂNG NHẬP
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login