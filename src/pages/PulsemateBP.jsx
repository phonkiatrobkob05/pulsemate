import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function PulsemateBP() {
    return (
        <div className="h-full   bg-[#F4FEFF]">
            {/* nav */}
            <Navbar islogin={true} />
            {/* main section */}
            <div className="flex">
                {/* sidebar */}
                <Sidebar />
                {/* content */}
                <div className="flex flex-col justify-center items-center mx-auto">
                    <img src="src/assets/Pulsematelogo.png" alt="" />
                    <h1 className="text-[32px] font-[Sarabun] py-4">ข้อมูลเตรียมตัวก่อนทำการวัดความดัน</h1>
                    <div className="flex gap-4">
                        <h1 className="text-center border p-4 rounded-xl text-[20px]">วัดช่วงเช้า <br />
                            วัดความดันภายใน 1 ชั่วโมง หลังตื่นนอน และปัสสาวะแล้ว <br />
                            จำนวน 2 ครั้ง ติดกัน ห่างกันครั้งละ 1 นาที</h1>
                        <h1 className="text-center border py-4 px-12 rounded-xl text-[20px]">วัดช่วงเวลาก่อนเข้านอน<br />
                            วัดความดัน 2 ครั้งติดกัน ห่างกันครั้งละ 1 นาที</h1>

                    </div>
                    <div className="flex justify-center items-center py-4">
                        <img className="h-[250px] w-auto" src="src/assets/pngtestpulse.svg" alt="" />
                        
                            <ul className="list-disc">
                                <li>นั่งเก้าอี้ให้หลังพิงพนักและหลังตรง</li>
                                <li>เท้าวางราบกับพื้น ไม่ไขว่ห้าง</li>
                                <li>วางแขนในระดับเดียวกับหัวใจ</li>
                                <li>ขณะวัดความดันโลหิตไม่กำมือ ไม่พุดคุย และ ขยับตัว</li>
                                <li>ก่อนทำการวัด นั่งพักอย่างผ่อนคลาย</li>
                            </ul>
            
                    </div>
                    <h1 className="p-4 rounded-xl font-[Sarabun] text-[20px] border border-(--light-blue)">ท่านสามารถวัดความดันได้เลยแล้วจะมีการแสดงผลออกมาบนหน้าจอ</h1>
                </div>


            </div>

        </div>
    );
}

export default PulsemateBP;