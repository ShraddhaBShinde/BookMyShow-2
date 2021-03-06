
import React from "react"; 

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.components";

const DefaultLayout = (props) => {  
    return (
        <div>
            <Navbar/>
            <HeroCarousel />
            {props.children}
        </div>
    );
};


export default DefaultLayout; 