import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "../../Pages/Layout";
import Home from "../../Pages/Home";
import Page1 from "../../Pages/Page1";
import Page2 from "../../Pages/Page2";
import Page3 from "../../Pages/Page3";
import Page4 from "../../Pages/Page4";
import './ImageContainer.css';

function ImageContainer(){
    return(
        <div id="style">
         <BrowserRouter>
        <Routes>
         <Route path="/" element = {<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="Page1" element={<Page1/>} />
         <Route path="Page2" element={<Page2/>} />
         <Route path="Page3" element={<Page3/>} />
         <Route path="Page4" element={<Page4/>} />
       </Route>
       </Routes>
       </BrowserRouter>
        </div>
       
    );
}
export default ImageContainer;