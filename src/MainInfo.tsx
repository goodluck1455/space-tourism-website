// import  {  useEffect } from 'react';
// import "./main.css";
import Homecss from "./Main.module.css"
// import HomeBackgroundImage from "./assets/assets/home/background-home-desktop.jpg";
// import HomeBackgdImageMobile from "./assets/assets/home/background-home-mobile.jpg";
// import HomeBackgdImageMobileA from "./assets/assets/home/background-home-tablet.jpg";
import "./index.css";

function MainInfo({ setActiveComponent }: { setActiveComponent: (component: string) => void }) {
  //   document.body.style.backgroundImage = `url(${HomeBackgroundImage})`;

  return (
    <>
    <div className={Homecss.mainPageImag}>
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
          <div className="explore" onClick={() => {setActiveComponent('Destination') }}>
            <p>EXPLORE</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default MainInfo;
