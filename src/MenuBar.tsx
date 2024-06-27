import * as FaIcons from "react-icons/fa"
import  { useState } from "react";

// import HomeBackgroundImage from "./assets/assets/home/background-home-desktop.jpg";
// import BackgroundImage1 from "./assets/assets/destination/background-destination-desktop.jpg";
// import CrewBackgroundImage from "./assets/assets/crew/background-crew-desktop.jpg";
// import TechInfoBackgroundImage from "./assets/assets/technology/background-technology-desktop.jpg";

//mobile device background
// import HomeBackgdImageMobile from "./assets/assets/home/background-home-mobile.jpg";
// import DestBackgdImageMobile from "./assets/assets/destination/background-destination-mobile.jpg";
// import CrewBackgdImageMobile from "./assets/assets/crew/background-crew-mobile.jpg";
// import TechBackgdImageMobile from "./assets/assets/technology/background-technology-mobile.jpg";



interface MenuBarProps {
    setActiveComponent: (component: string) => void;
    activeComponent: string;  
    // activeHeader: boolean; 
}

const MenuBar: React.FC<MenuBarProps> = ({ setActiveComponent, activeComponent }) => {

    const [activeOpen, setOpen] = useState(false);
   

 

    const showSideBar = ()=>{

        setOpen(!activeOpen)
        // setIsOpen(!isOpen);
    }

    const closeSideBar = () => {
        setOpen(false);
      };
    

    return (
        <div>
           <div onClick={showSideBar} >
           {/* <FaIcons.FaBars className="hamburger"/> */}
            {activeOpen ? <FaIcons.FaTimes className="hamburger-A" />  : <FaIcons.FaBars className= "hamburger" />}
            </div>
    
            <div className={`MenuBar ${activeOpen ? "open" : "close"}`}>
                   <ul>
                   <li className={activeComponent === 'home' ? 'active' : ''} onClick={() => {setActiveComponent('home'); closeSideBar(); }} ><span className='listNumber'>00</span> HOME</li>
                    <li className={activeComponent === 'Destination' ? 'active' : ''} onClick={() => {setActiveComponent('Destination'); closeSideBar();}}><span className='listNumber'>01</span>DESTINATION</li>
                    <li className={activeComponent === 'Crew' ? 'active' : ''} onClick={() => {setActiveComponent('Crew'); closeSideBar();}}><span className='listNumber'>02 </span> CREW</li>
                    <li className={activeComponent === 'technology' ? 'active' : ''} onClick={() => {setActiveComponent('technology'); closeSideBar();}}><span className='listNumber'>03</span> TECHNOLOGY</li>
                   </ul>
                </div>
        </div>
    );
};

export default MenuBar;