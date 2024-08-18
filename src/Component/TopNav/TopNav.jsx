import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../TopPages/Layout';
import Collection from '../../TopPages/Collection';
import Men from '../../TopPages/Men';
import Women from '../../TopPages/Women';
import About from '../../TopPages/About';
import Contact from '../../TopPages/Contact';
import Home from '../../TopPages/Home';

function TopNav (){
    return (
        <>
        <BrowserRouter>
        <Routes>
         <Route path="/" element = {<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="/Collection" element={<Collection/>} />
         <Route path="/Men" element={<Men/>} />
         <Route path="/Women" element={<Women/>} />
         <Route path="/About" element={<About/>} />
         <Route path="/Contact" element={<Contact/>} />
         </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
} 
export default TopNav;