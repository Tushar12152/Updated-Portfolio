import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Layout = () => {
    return (
        <div className="bg-[#1D1D1D] ">
            <div className="w-[90%] px-10  mx-auto ">
                <div >
                    <Nav />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;