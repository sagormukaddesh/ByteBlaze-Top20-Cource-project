import { Outlet } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet>
                </Outlet>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default MainLayouts;