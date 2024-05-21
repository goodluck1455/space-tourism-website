import Home from "./Home";
import Homecss from "./Main.module.css"
import  { useState } from "react";
// import "./App.css";




const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("home");


  return (
    <>
    <div className={`${activeComponent === 'Crew' ? Homecss.crewPageImage : ''}
    ${activeComponent === 'home' ? Homecss.homePage : ''} 
    ${activeComponent === 'Destination' ? Homecss.mainPageImage : ''} 
    ` } >
      <Home 
      activeComponent={activeComponent}
      setActiveComponent={setActiveComponent}
      
      />
      </div>
    </>
  );
}

export default App;
