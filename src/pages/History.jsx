import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function History(){

    return(
        <div className="h-full">
            {/* nav */}
            <Navbar islogin={true} />
            {/* main section */}
            <div className="flex h-fit">
                {/* sidebar */}
                <Sidebar/>
                {/* main content */}
                <div className="font-[sarabun] px-[59px] pt-4 space-y-[28px] " id="Userdata">
                    <div>
                        <h1>History</h1>
                    </div>
                </div>

            </div>

        </div>
    );

}
export default History;