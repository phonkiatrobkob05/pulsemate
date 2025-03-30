import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (

    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#F4FEFF]">

      <div className="flex-1 flex justify-center items-center p-6">
        <img
          src="src/assets/loginpic.svg"
          alt="Login illustration"
          className="
            w-full       /* ให้ภาพเต็มความกว้างของ parent */
            max-w-[600px] /* จำกัดขนาดใหญ่สุด */
            h-auto
            object-cover /* ให้ภาพครอบพื้นที่แบบไม่เสียอัตราส่วน */
            object-center
          "
        />
      </div>


      <div className="flex-1 flex flex-col p-6 md:p-8 items-center gap-y-4">

        <img
          src="src/assets/Pulsematelogo.png"
          alt="Pulsemate Logo"
          className="w-[200px] sm:w-[180px] md:w-[220px]"
        />

        <h1 className="
          font-[sarabun]
          font-bold
          tracking-wider
          text-[#444B59]
          text-2xl       /* ขนาดพื้นฐาน */
          sm:text-xl     /* ขนาดจอเล็ก (mobile) */
          md:text-3xl    /* ขนาดจอใหญ่ขึ้น */
        ">
          ยินดีให้บริการ
        </h1>
        <h2 className="
          font-[sarabun]
          font-semibold
          px-2
          text-[#444B59]
          text-xl
          sm:text-lg
          md:text-2xl
          text-center
        ">
          กรุณาเข้าสู่ระบบ
        </h2>

        <div className="flex flex-col gap-y-4 w-full max-w-[400px]">

          <label htmlFor="email" className="flex flex-col">
            <span className="font-[poppins] text-base sm:text-sm md:text-base text-[#444B59]">
              อีเมลล์
            </span>
            <input
              type="text"
              name="email"
              id="email"
              className="
                border
                rounded-full
                py-2
                px-4
                mt-1
                text-base
                sm:text-sm
                md:text-base
                w-full
                focus:outline-none
                focus:ring-2
                focus:ring-[#56E0E0]
              "
              placeholder="example@gmail.com"
            />
          </label>

          <label htmlFor="password" className="flex flex-col">
            <span className="font-[poppins] text-base sm:text-sm md:text-base text-[#444B59]">
              รหัสผ่าน
            </span>
            <div className="relative mt-1">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="
                  border
                  rounded-full
                  py-2
                  px-4
                  text-base
                  sm:text-sm
                  md:text-base
                  w-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#56E0E0]
                "
                placeholder="password"
              />
              <button
                type="button"
                id="togglePassword"
                className="
                  absolute
                  top-1/2
                  right-4
                  transform
                  -translate-y-1/2
                  cursor-pointer
                "
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </label>

          <h1 className="w-full flex justify-end font-[poppins] text-sm sm:text-xs md:text-sm">
            ลืมรหัสผ่าน?
          </h1>
        </div>

        <button
          type="button"
          className="
            font-[sarabun]
            text-lg
            sm:text-base
            md:text-xl
            font-bold
            cursor-pointer
            text-[#FFFFFF]
            rounded-full
            bg-gradient-to-r from-[#007299] to-[#56E0E0]
            px-8 py-3
            hover:scale-105
            transition-all
            duration-300
            mt-2
          "
        >
          เข้าสู่ระบบ
        </button>

        <div className="flex gap-x-2 text-sm sm:text-xs md:text-base pt-2">
          <span className="text-[#444B59]">ลงทะเบียนเพื่อเข้าสู่ระบบ</span>
          <NavLink to="/Signup" className="text-[#F14336] font-[poppins]">
            ลงทะเบียน
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
