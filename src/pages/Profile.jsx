import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
    return (
        <div className="h-full">
            {/* nav */}
            <Navbar islogin={true} />
            {/* main section */}
            <div className="flex h-fit">
                {/* sidebar */}
                <Sidebar/>
                {/* main content */}
                <div className="font-[sarabun] px-[59px] pt-4 space-y-[28px] " id="Userdata">
                    <div className="flex text-[32px] gap-x-4">
                        <p>สวัสดีครับ</p>
                        <p>อานนท์</p>
                    </div>


                    <div className="w-[1017px] border-1 rounded-lg border-(--light-blue)">
                        <div className="flex flex-col px-[40px] py-[30px] space-y-[10px]">
                            <h1 className="text-[24px] py-1">ข้อมูลส่วนตัว</h1>

                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">อีเมลล์ :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold" >ชื่อ-นามสกุล :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">ส่วนสูง :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">น้ำหนัก :</h1>
                                <p className="text-[20px] font-light" >phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">อายุ :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">เบอร์โทรศัพท์ :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">เพศ :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                            <div className="flex gap-4">
                                <h1 className="text-[20px] font-semibold">โรคประจำตัว :</h1>
                                <p className="text-[20px] font-light">phonkiat</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Profile;