import { useState } from "react";

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        fullname: "",
        height: "",
        weight: "",
        age: "",
        phone: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!email) {
            errors.email = "กรุณากรอกอีเมล";
        }
        if (!password) {
            errors.password = "กรุณากรอกรหัสผ่าน";
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
        }
        if (!fullname) {
            errors.fullname = "กรุณากรอกชื่อ-นามสกุล";
        }
        if (!height) {
            errors.height = "กรุณากรอกส่วนสูง";
        }
        if (!weight) {
            errors.weight = "กรุณากรอกน้ำหนัก";
        }
        if (!age) {
            errors.age = "กรุณากรอกอายุ";
        }
        if (!phone) {
            errors.phone = "กรุณากรอกเบอร์โทรศัพท์";
        }

        setError(errors);

        if (Object.keys(errors).length === 0) {
            alert("ลงทะเบียนสำเร็จ! 🎉");
        }
    };

    return (
        <div className="flex flex-row h-screen bg-[#F4FEFF]">
            <div className="flex justify-center items-center bg-[#F4FEFF]">
                <img src="src/assets/registerpic.svg" alt="" className="w-[450px] h-[400px]" />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-3 py-[23px] px-[50px] w-[800px] mx-auto">
                <h1 className="font-[poppins] text-[48px]">ลงทะเบียนเข้าสู่ระบบ</h1>

                {/* Email */}
                <label htmlFor="email">
                    <h1 className="font-[poppins] text-[20px] py-1">อีเมล</h1>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="border w-[690px] rounded-full text-[26px] px-4"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                </label>

                {/* Password */}
                <label htmlFor="password">
                    <h1 className="font-[poppins] text-[20px] py-1">รหัสผ่าน</h1>
                    <div className="relative">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            id="password"
                            className="border w-[690px] rounded-full text-[26px] px-4"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                    </div>
                </label>

                {/* Confirm Password */}
                <label htmlFor="confirmPassword">
                    <h1 className="font-[poppins] text-[20px] py-1">ยืนยันรหัสผ่าน</h1>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        className="border w-[690px] rounded-full text-[26px] px-4"
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error.confirmPassword && <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>}
                </label>

                {/* Full Name */}
                <label htmlFor="fullname">
                    <h1 className="font-[poppins] text-[20px] py-1">ชื่อ-นามสกุล</h1>
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        className="border w-[690px] rounded-full text-[26px] px-4"
                        placeholder="pulsemate project"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    {error.fullname && <p className="text-red-500 text-sm mt-1">{error.fullname}</p>}
                </label>

                {/* Height and Weight */}
                <div className="flex gap-x-[58px]">
                    <label htmlFor="height">
                        <h1 className="font-[poppins] text-[20px] py-1">ส่วนสูง</h1>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            className="border w-[316px] rounded-full text-[26px] px-4"
                            placeholder="ex.100"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        {error.height && <p className="text-red-500 text-sm mt-1">{error.height}</p>}
                    </label>

                    <label htmlFor="weight">
                        <h1 className="font-[poppins] text-[20px] py-1">น้ำหนัก</h1>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            className="border w-[316px] rounded-full text-[26px] px-4"
                            placeholder="ex.60"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        {error.weight && <p className="text-red-500 text-sm mt-1">{error.weight}</p>}
                    </label>
                </div>
                <div className="flex gap-x-[58px]">
                    <label htmlFor="age">
                        <h1 className="font-[poppins] text-[20px] py-1">อายุ</h1>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            className="border w-[316px] rounded-full text-[26px] px-4"
                            placeholder="ex.100"
                            value={height}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {error.height && <p className="text-red-500 text-sm mt-1">{error.height}</p>}
                    </label>

                    <label htmlFor="phone">
                        <h1 className="font-[poppins] text-[20px] py-1">เบอร์โทรศัพท์</h1>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            className="border w-[316px] rounded-full text-[26px] px-4"
                            placeholder="ex.60"
                            value={weight}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {error.weight && <p className="text-red-500 text-sm mt-1">{error.weight}</p>}
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit"
                    className="cursor-pointer text-[#FFFFFF] drop-shadow-lg rounded-full bg-[linear-gradient(-80deg,#007299,#56E0E0)] px-[30px] py-[20px] hover:scale-105 transition-all duration-300 mt-6"
                >ลงทะเบียน</button>
            </form>
        </div>
    );
}

export default Signup;
