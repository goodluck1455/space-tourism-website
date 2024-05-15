// import  {  useEffect } from 'react';
// import "./main.css";
// "use client";
import {motion as m} from "framer-motion";




import Homecss from "./Main.module.css"
// import HomeBackgroundImage from "./assets/assets/home/background-home-desktop.jpg";
// import HomeBackgdImageMobile from "./assets/assets/home/background-home-mobile.jpg";
// import HomeBackgdImageMobileA from "./assets/assets/home/background-home-tablet.jpg";
import "./index.css";

function MainInfo({ setActiveComponent }: { setActiveComponent: (component: string) => void }) {
  //   document.body.style.backgroundImage = `url(${HomeBackgroundImage})`;

  return (
    <>
    <m.div className={Homecss.mainPageImag} 
    initial={{opacity: 0, translateY: 100}} 
    animate={{opacity: 1, translateY: 0}} 
    transition={{duration: 0.9, ease:"easeInOut"}}
    exit={{opacity: 0}} >
      <div className="mainContent">
        <div className="travelHeading">
          <h3 className="">SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
     
        <div className="exploreBody">
      
          <div className="explore border-neutral-200 dark:border-slate-800" onClick={() => {setActiveComponent('Destination') }} >
            <p>EXPLORE</p>
          </div>
       
        </div>
      </div>
      </m.div>
    </>
  );
}

export default MainInfo;
