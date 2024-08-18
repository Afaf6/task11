import { Link } from "react-router-dom";
import Thum1 from "../../../public/Images/image-product-1-thumbnail.jpg";
import Thum2 from "../../../public/Images/image-product-2-thumbnail.jpg";
import Thum3 from "../../../public/Images/image-product-3-thumbnail.jpg";
import Thum4 from "../../../public/Images/image-product-4-thumbnail.jpg";
import "./NavBar.css"
function NavBar() {
    return(
        <>
      <nav id="stylenav">
        <ul>
          <li>
            <Link to="/Page1">
            <button>
              <img src={Thum1} />
            </button>
            </Link>
          </li>
          <li>
            <Link to="/Page2">
            <button>
              <img src={Thum2} />
            </button>
            </Link>
          </li>
          <li>
            <Link to="/Page3">
            <button>
              <img src={Thum3} />
            </button>
            </Link>
          </li>
          <li>
            <Link to="/Page4">
            <button>
              <img src={Thum4} />
            </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
    );
}
export default NavBar;