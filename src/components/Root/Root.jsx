import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";

const Root = () => {
    return (
        <div className="w-[95%] md:w-[90%] mx-auto">
            <Header />
            <div className="mt-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;