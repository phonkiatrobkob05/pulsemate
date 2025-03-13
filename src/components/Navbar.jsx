import { NavLink } from "react-router";

function Navbar({islogin}) {
    return (

        <nav className="sticky top-0 z-50 w-full font-[Poppins] bg-[#F4FEFF] shadow-md">
            <div className="flex flex-row gap-4 justify-between px-[80px] py-[16px]">
                {/* Logo */}
                <div className="">
                    <img className="w-[322px] h-[70px] object-contain" src="src/assets/Pulsematelogo.png" alt="Pulsemate Logo" />
                </div>

                {/* Navbar Menu */}
                <ul className="grid grid-flow-col gap-6 text-[20px] font-medium justify-center items-center	">
                    <li><NavLink to="/#home" end className="hover:text-blue-600 transition">Home</NavLink></li>
                    <li><NavLink to="/#services" className="hover:text-blue-600 transition">Services</NavLink></li>
                    <li><NavLink to="/#about-us" className="hover:text-blue-600 transition">About us</NavLink></li>
                    <li>
                        <NavLink to="/Login" className="hover:text-blue-600 transition">
                        {islogin ?  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg> : <h1>Register / Login</h1>}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar