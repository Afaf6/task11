import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import './Layout.css'

function Layout() {
    return(
        <div id="product">
       
        <Outlet></Outlet>
         <NavBar></NavBar>
         
        </div>
    );
}

export default Layout;