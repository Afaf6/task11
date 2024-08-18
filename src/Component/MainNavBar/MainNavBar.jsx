import {Link} from "react-router-dom"
import PIC from '../../../public/Images/image-avatar.png';
import CartIcon from "../../../public/Images/icon-cart.svg";
import './MainNavBar.css'
import { useState } from "react";
function MainNavBar () {
  const [ShowNavBar, setShowNavBar] = useState(true);

  


    return (
        <>
        <nav id="navbar">
                
               <div id="section">
                 <h1 id="maintitle"> sneaker </h1>
                 
                  <button className = "navbtn"
                  onClick={() => {setShowNavBar(!ShowNavBar)}} >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  {ShowNavBar && (
                 
                  <ul className="open">
                           <li>
                             <Link to = "/Collection"> Collection </Link>
                           </li>
                           <li>
                              <Link to = "/Men"> Men </Link>
                           </li>
                           <li>
                             <Link to = "/Women"> Women </Link>
                           </li>
                           <li>
                             <Link to = "/About"> About </Link>
                           </li>
                           <li>
                             <Link to = "/Contact"> Contact </Link>
                           </li>
                       </ul>
                 
                        )}
               </div>
               <div id="profil">
                        <button >
                           <img src={CartIcon} />
                        </button>

                        <button id="cart">
                          <img src={PIC} />
                        </button>
                        
                       </div>
       </nav>
        </>
    );
}
export default MainNavBar;