import React, { useState } from "react";

import "./index.css";
import Homecss from "./Main.module.css"
import "./CrewInfo.css"
import "./DestInfo.css"

// import HomeBackgroundImage from "./assets/assets/home/background-home-desktop.jpg";
// import HomeBackgdImageMobile from "./assets/assets/home/background-home-mobile.jpg";
import ImageLogo from "./assets/assets/shared/logo.svg";
import MainInfo from "./MainInfo";
import DestInfo from "./DestInfo";
import MenuBar from "./MenuBar";
import CrewInfo from "./CrewInfo";
import TechInfo from "./TechInfo";

interface HomeProps {
  // Add any props that Home component may receive
  // setActiveComponent: (component: string) => void;
  // activeComponent: string; 

  setActiveComponent?: () => void;
  activeComponent?: any; 
}

const Home: React.FC<HomeProps> = () => {
  //  document.body.style.backgroundImage = `url(${HomeBackgroundImage})`;
// let backGroundImage4Body = document.body.style.backgroundImage;
  const [activeComponent, setActiveComponent] = useState("home");


  const displayComponent = (component: string) => {
    if (activeComponent!== component) {
      setActiveComponent(component); 

    }

  };

  return (
    <>
      <div className= {`${activeComponent === 'home' ? Homecss.homePage : ''} 
      ${activeComponent === 'Destination' ? Homecss.mainPageImage : ''} 
      ${activeComponent === 'Crew' ? Homecss.crewPageImage : ''}
      ${activeComponent === 'technology' ? Homecss.technologyPageImage : ''}`} >

        <div className="header">
          <div className="logo">
            <img src={ImageLogo} />
          </div>
          <hr className="lineRule" />
          <div>
            <MenuBar
              setActiveComponent={displayComponent}
              activeComponent={activeComponent}
            />
          </div>
        </div>

        {activeComponent === "home" && <MainInfo  setActiveComponent={displayComponent} />}
        {activeComponent === "Destination" && <DestInfo />}
        {activeComponent === "Crew" && <CrewInfo />}
        {activeComponent === "technology" && <TechInfo />}
      </div>
    </>
  );
};

export default Home;
