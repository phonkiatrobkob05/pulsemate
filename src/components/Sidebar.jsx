import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-[#F4FEFF]">
            <div className="flex pt-4">
                <div className="flex flex-col content-start px-[48px] justify-start  text-[20px] font-[poppins] font-semibold gap-y-[23px]" id="sidebar">
                    <NavLink to="/Profile" className="flex flex-row gap-x-[20px] items-center hover:bg-gray-200 cursor-pointer rounded-lg" id="profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#4FBBD1" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                        <h1 to="/Dashboard">Profile</h1>
                    </NavLink>

                    <NavLink to="/PulsemateBP" className="flex flex-row gap-x-[20px]  items-center hover:bg-gray-200 cursor-pointer rounded-lg" id="Pulsematebp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#4FBBD1" d="M2 8V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v4.5q0 .425-.288.713T21 11.5t-.712-.288T20 10.5V6H4v2q0 .425-.288.713T3 9t-.712-.288T2 8m5 9q-.275 0-.525-.137T6.1 16.45L4.4 13H3.025q-.425 0-.712-.288T2.025 12t.288-.712t.712-.288h2q.275 0 .513.15t.362.4l1.1 2.2l3.1-6.2q.125-.25.375-.375T11 7.05t.525.125t.375.375l1.675 3.35q-.45.275-.862.575t-.763.675l-.95-1.9l-3.1 6.2q-.125.275-.375.413T7 17m-3 3q-.825 0-1.412-.587T2 18v-2q0-.425.288-.712T3 15t.713.288T4 16v2h5.375q.425 0 .713.288t.287.712t-.288.713t-.712.287zm13 2q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m2.125-6.425q.15-.15.15-.35t-.15-.35t-.35-.15t-.35.15l-1.575 1.55q-.15.15-.15.363t.15.362t.362.15t.363-.15z" /></svg>
                        <h1 to="/PulsemateBP">PulseMate BP</h1>
                    </NavLink>
                    <NavLink to="/Dashboard" className="flex flex-row gap-x-[20px]  items-center hover:bg-gray-200 cursor-pointer rounded-lg" id="Dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#4FBBD1" d="M17 20q-.425 0-.712-.288T16 19v-5q0-.425.288-.712T17 13h2q.425 0 .713.288T20 14v5q0 .425-.288.713T19 20zm-6 0q-.425 0-.712-.288T10 19V5q0-.425.288-.712T11 4h2q.425 0 .713.288T14 5v14q0 .425-.288.713T13 20zm-6 0q-.425 0-.712-.288T4 19v-9q0-.425.288-.712T5 9h2q.425 0 .713.288T8 10v9q0 .425-.288.713T7 20z" /></svg>
                        <h1>Dashboard</h1>
                    </NavLink>
                    <NavLink to="/History" className="flex flex-row gap-x-[20px]  items-center hover:bg-gray-200 cursor-pointer rounded-lg" id="History">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#4FBBD1" d="M12 21q-3.15 0-5.575-1.912T3.275 14.2q-.1-.375.15-.687t.675-.363q.4-.05.725.15t.45.6q.6 2.25 2.475 3.675T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.288T9 9t-.288.713T8 10H4q-.425 0-.712-.288T3 9V5q0-.425.288-.712T4 4t.713.288T5 5v1.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m1-9.4l2.5 2.5q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.712T12 7t.713.288T13 8z" /></svg>
                        <h1>History</h1>
                    </NavLink>
                </div>
                <div className="border h-[500px] py-[5px] opacity-10  "></div>
                {/* <h1></h1> */}
            </div>
            
            

        </div>
    );
}
export default Sidebar;