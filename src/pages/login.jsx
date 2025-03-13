import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Function to toggle the password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        // Whole page
        <div className=" h-screen flex flex-row w-screen bg-[#F4FEFF] ">
            {/* pics */}
            <div className="flex justify-center items-center px-6">
                <img className="w-[640px] h-auto" src="src/assets/loginpic.svg" alt="" />
            </div>




            {/* Login */}
            <div className="flex flex-col p-8 w-[890px]  mx-auto items-center gap-y-4 ">
                <img src="src/assets/Pulsematelogo.png" alt="" />
                <h1 className="font-[sarabun] font-bold tracking-wider text-[#444B59] text-[36px] w-[224px] h-[47px]">
                    ยินดีให้บริการ
                </h1>
                <h1 className="font-[sarabun] font-semibold px-2 text-[#444B59] text-[32px] w-[240px] h-[42px]">
                    กรุณาเข้าสู่ระบบ
                </h1>
                <div className="flex flex-col gap-y-4">
                    <label htmlFor="">
                        <h1 className="font-[poppins] text-[24px] text-[#444B59] ">อีเมลล์</h1>
                        <input type="text" name="email" id="email" className="border w-[640px] h-[61px] rounded-full py-1 text-[26px] px-4" placeholder="example@gmail.com">
                        </input>
                    </label>
                    <label htmlFor="password">
                        <h1 className="font-[poppins] text-[#444B59] text-[24px]">รหัสผ่าน</h1>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                className="border w-[640px] h-[61px] rounded-full py-1 text-[26px] px-4"
                                placeholder="password"
                            />
                            <button
                                type="button"
                                id="togglePassword"
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#4FBBD1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18" /></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#4FBBD1" d="M4 12.001c.003-.016.017-.104.095-.277c.086-.191.225-.431.424-.708c.398-.553.993-1.192 1.745-1.798C7.777 7.996 9.812 7 12 7s4.223.996 5.736 2.216c.752.606 1.347 1.245 1.745 1.798c.2.277.338.517.424.708c.078.173.092.261.095.277V12c-.003.016-.017.104-.095.277a4.3 4.3 0 0 1-.424.708c-.398.553-.993 1.192-1.745 1.798C16.224 16.004 14.189 17 12 17s-4.223-.996-5.736-2.216c-.752-.606-1.347-1.245-1.745-1.798a4.2 4.2 0 0 1-.424-.708A1 1 0 0 1 4 12.001M12 5C9.217 5 6.752 6.254 5.009 7.659c-.877.706-1.6 1.474-2.113 2.187a6 6 0 0 0-.625 1.055C2.123 11.23 2 11.611 2 12c0 .388.123.771.27 1.099c.155.342.37.7.626 1.055c.513.713 1.236 1.48 2.113 2.187C6.752 17.746 9.217 19 12 19s5.248-1.254 6.991-2.659c.877-.706 1.6-1.474 2.113-2.187c.257-.356.471-.713.625-1.055c.148-.328.271-.71.271-1.099c0-.388-.123-.771-.27-1.099a6.2 6.2 0 0 0-.626-1.055c-.513-.713-1.236-1.48-2.113-2.187C17.248 6.254 14.783 5 12 5m-1 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" /></g></svg>}
                            </button>
                        </div>
                    </label>
                    <h1 className="w-full flex justify-end font-[poppins]">ลืมรหัสผ่าน</h1>
                </div>
                <button type="button"
                    className="font-[sarabun] text-[28px] font-bold cursor-pointer text-[#FFFFFF] drop-shadow-lg rounded-full  bg-[linear-gradient(-80deg,#007299,#56E0E0)] px-[25px] py-[20px] hover:scale-105 hover:bg-[linear-gradient(-80deg,#56E0E0,#007299)] transition-all duration-300 mt-6"
                >เข้าสู่ระบบ</button>
                <div className="flex">
                <h1 className="w- flex justify-end text-[20px] text-[#444B59] font-[poppins] ">ลงทะเบียนเพื่อเข้าสู่ระบบ
                </h1>
                <NavLink to="/Signup" className="w- flex justify-end text-[20px] text-[#F14336] font-[poppins] ps-2 ">ลงทะเบียน
                </NavLink>
                </div>
            </div>
        </div >
    );
}

export default Login;
