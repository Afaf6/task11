import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import './Layout.css'

function Layout() {
    return(
        <div id="product">
       
        <Outlet></Outlet>
         <Navbar></Navbar>
         
        </div>
    );
}

export default Layout;