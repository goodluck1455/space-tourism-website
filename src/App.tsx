import Home from "./Home";
import Homecss from "./Main.module.css"
import  { useState } from "react";
// import "./App.css";




const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("home");


  return (
    <>
    <body className={`${activeComponent === 'Crew' ? Homecss.crewPageImage : ''}` } >
      <Home 
      activeComponent={activeComponent}
      setActiveComponent={setActiveComponent}
      
      />
      </body>
    </>
  );
}

export default App;
