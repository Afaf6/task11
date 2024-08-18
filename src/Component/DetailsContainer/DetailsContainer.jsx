import "./DetailsContainer.css";
import CartIcon from "../../../public/Images/icon-cart.svg";
import Counter from "../../Component/Counter/Count";
function DetailsContainer(){
    

return (
    <div id="DetailsDiv" >
        <label id="NameProduct">SNEAKER COMPANY</label>
        <h1 id="Header" >Fall Limited Edition Sneakers</h1>
        <p id="Description">
            These low-porfile sneaker are your perferct casual wear companion. Featuring a durable rubber aouter sole, they'll withstand everything the weather can offer.
            </p>
        <div id="Pricediv">
            <label id="PriceLab">$125.00</label> <spap id="boxprice">50%</spap>
            
        </div>
        <div>
             <label id="DiscPrice">
                <s>$250.00</s>
            </label></div>
        <div id="btncart">
            <Counter></Counter>

            <button id="AddBtn">
        <img src={CartIcon}></img>
            <span></span>
            Add to Cart</button>
        </div>
        
    </div>
)
}
export default DetailsContainer;