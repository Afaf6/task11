import { useState } from 'react';
import IconPlus from '../../../public/Images/icon-plus.svg';
import IconMinus from '../../../public/Images/icon-minus.svg';
import './Count.css'

function Count (){
    const [count, setCount] = useState(0);
     
    function Add() {
        let newValue = count + 1;
        setCount(newValue);
    }
    function Minus (){
        let newValue = count - 1;
        setCount(newValue);
    }

    return (
        <div id="counter">
               <button onClick={Minus}>  <img src={IconMinus} />  </button>
               <span>{count}</span>
               <button onClick={Add}>  <img src={IconPlus} />  </button>
          </div>
    );
}
export default Count;