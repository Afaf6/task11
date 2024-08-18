import { Outlet } from "react-router-dom";
import MainNavBar from "../Component/MainNavBar/MainNavBar";

function Layout() {
    return(
        <div>
       <MainNavBar></MainNavBar>
        <Outlet></Outlet>
         
        </div>
    );
}

export default Layout;