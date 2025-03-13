import Navbar from "../components/Navbar";
import Card from "../components/card";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Card1({ title, description, text }) {
  return (
    <div className="bg-(--white) w-[304px] h-[318px] py-[50px] rounded-[19px] drop-shadow-md flex items-start justify-center">
      <div className="size-fit flex flex-col gap-[36px] items-center justify-center">
        <div className="bg-(--bg-our-values) w-[360px] h-[90px] rounded-[12px] flex items-center justify-center">
          <p
            className={`text-(--white) w-[192px] text-[${text}px] font-[Alatsi] font-normal text-center`}
          >
            {title}
          </p>
        </div>
        <p className="text-(--black) w-[200px] text-[16px] font-[Arapey] font-normal text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure rendering
      }
    }
  }, [location]);

  return (
    <div className="flex-col">
      <Navbar islogin={false} />
      <section
        id="home"
        className="flex w-full h-[657px] py-[212px] bg-(--bg-light-blue) items-center justify-center"
      >
        <div className="h-fit">
          <img src="src/assets/sinocarebpm.png" width={370} height={549} />
        </div>
        <div className="flex flex-col h-fit gap-[40px]">
          <h1 className="text-[52px] w-[597px] font-bold font-[poppins]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4BD2D7] to-[#0F85A5]">
              PulseMate
            </span>
            &#x2800;Next-Gen Smart Health Strong Heart.
          </h1>
          <p className="w-[567px] font-[poppins]">
            PulseMate
            คือเครื่องวัดความดันอัจฉริยะที่เปรียบเสมือนเพื่อนรู้ใจของผู้ใช้งาน
            เพราะมีการจัดเก็บข้อมูลค่าวัดความดันบนระบบ
            อีกทั้งยังสามารถดูค่าวัดความดันได้บนเว็ปไซต์แบบเรียลไทม์เพื่อแก้ปัญหาการหลงลืมค่าวัดความดันและของผู้สูงอายุและช่วยให้แพทย์สามารถ
            วินิจฉัยโรคได้แม่นยำมากยิ่งขึ้น
          </p>
          <div className="flex justify-center drop-shadow-sm rounded-full w-[239px] bg-[linear-gradient(-80deg,#007299,#56E0E0)] px-[18px] py-[13px]">
            <NavLink to="/Dashboard" className="text-[20px] text-[#F4FEFF] font-semibold">
              Get Started
            </NavLink>
          </div>
        </div>
      </section>{" "}
      {/* Home */}
      <section
        id="our-values"
        className="flex flex-col w-full h-[857px] justify-items-center gap-[100px] items-center justify-center"
      >
        <div className="font-normal text-[64px] font-[Amaranth] text-(--our-values)">
          Our Values
        </div>

        <div className="flex gap-[100px] items-center justify-center">
          <Card1
            title="Accessibility & Convenience"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="24"
          />
          <Card1
            title="Innovation & Intelligence"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="32"
          />
          <Card1
            title="Reliability & Accuracy"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="32"
          />
        </div>
      </section>{" "}
      {/* Our Values */}
      <section
        id="services"
        className="bg-[linear-gradient(90deg,#D5E9F5,#D5E9F5,#D4F5F5)] w-full h-fit pt-[100px] pb-[200px] flex items-center justify-center"
      >
        <div className="w-[1220px] flex flex-col justify-center items-center gap-[100px]">
          <div className="bg-(--white) w-[1256px] h-[338px] py-[86px] flex justify-center rounded-[20px] drop-shadow-md">
            <h1 className="text-(--services-font) text-[64px] font-[Amaranth]">
              Services
            </h1>
          </div>
          <div className="w-[1220px] absolute translate-y-[220px] flex justify-between">
            <div className="bg-(--bg-light-blue) size-fit rounded-[20px] drop-shadow-md">
              <a href="#">
                <img
                  src="src/assets/pulsemate_bp (2).png"
                  width={600}
                  height={220}
                  className="bg-center object-cover"
                />
              </a>
            </div>
            <div className="bg-(--bg-light-blue) size-fit rounded-[20px] drop-shadow-md">
              <a href="#">
                <img
                  src="src/assets/pulsemate_stetho (2).png"
                  width={600}
                  height={220}
                  className="bg-center object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Services */}
      <div id="aboutus"></div>
      <section id="about-us" className="h-[868px] pt-20">
        <div className="font-[Amaranth] flex flex-col text-center text-(--our-values)">
          <h1 className="text-[64px] pt-4" id="abouthead">About us</h1>
          <h4 className="text-[26px] py-[30px]">
            Welcome to Pulsemate, Your Personalized Health Mate.
          </h4>
        </div>
        <div className="flex gap-30 justify-center">
          <img src="src/assets/Arnon1.png" className="rounded-xl" />
          <h1 className="font-[poppins] text-[22px] w-[628px] h-[429px]">
            Hello, we are first-year students of the Faculty of Engineering,
            Department of IoT and Information Systems, King Mongkut's Institute
            of Technology Ladkrabang. Currently, there are more elderly people
            with chronic diseases, and measuring blood pressure is one of the
            important steps in diagnosing these diseases. However, the problem
            that may occur is forgetting to record blood pressure data.
            Therefore, PulseMate is responsible for recording and sending blood
            pressure data, which also helps reduce the problem of forgetting and
            allows caregivers to check the blood pressure data of the elderly
            conveniently, making diagnosis more efficient and accurate
          </h1>
        </div>
      </section>
      {/* <section id="our-members">
        <div className="font-[Amaranth] flex flex-col text-center text-(--our-values)">
          <h1 className="text-[64px] py-[30px]">Our member</h1>
        </div>
        <div className="grid place-items-center">
          <div className="grid grid-cols-3 gap-4">
            <Card name="Arnon1" description="as" img="src/assets/Arnon1.png" />
            <Card
              name="Arnon2"
              description="PAAA"
              img="src/assets/Arnon1.png"
            />
            <Card
              name="Arnon3"
              description="Project Manager"
              img="src/assets/Arnon1.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <Card
              name="Arnon4"
              description="Project Manager"
              img="src/assets/Arnon1.png"
            />
            <Card
              name="Arnon5"
              description="Project Manager"
              img="src/assets/Arnon1.png"
            />
          </div>
        </div>
      </section> */}
      <section className="pt-[30px]">
        <div className="h-auto bg-linear-to-r from-blue-100 to-blue-200 py-[30px] font-[poppins]">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" text-[60px]">Ready to get started?</h1>
              <NavLink to="/Login" className="flex justify-center py-4">
                <span className="text-[14px] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Register / Login</span>
              </NavLink>
              <img src="src/assets/Pulsematelogo.png" alt="pulsematelogo" className="object-center" />
              <h1 className="">© 2025 PulseMate Prototype. </h1>
            </div>
            <img
              src="src/assets/rayong.png"
              className="rounded-full h-[300px] w-auto flex items-center justify-center border-[20px] border-[rgba(0,129,254,0.05)]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
