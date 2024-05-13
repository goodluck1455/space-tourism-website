import  { useState } from 'react';
import {motion as m} from "framer-motion";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TechInfoBackgroundImage from "./assets/assets/technology/background-technology-desktop.jpg";
import LaunchVehicle from "./assets/assets/technology/image-launch-vehicle-portrait.jpg"
import SpacePort from "./assets/assets/technology/image-spaceport-portrait.jpg"
import SpaceCapsule from "./assets/assets/technology/image-space-capsule-portrait.jpg"

interface TechInfoProps {
    
}

const TechInfo: React.FC<TechInfoProps> = () => {
    // document.body.style.backgroundImage = `url(${TechInfoBackgroundImage})`;

    const techInfoBucket = [
        {
            name: "LAUNCH VEHICLE",
            data: (
                <>
                A launch vehicle or carrier rocket is a rocket-propelled <br className="break" />
                vehicle used to carry a payload from Earth's surface to  <br className="break" />
                space, usually to Earth orbit or beyond. Our WEB-X <br className="break" />
                carrier rocket is the most powerful in operation. Standing <br className="break" />
                150 metres tall, it's quite an awe-inspiring sight on <br className="break" />
                the launch pad!
                </>
            ),
            image: LaunchVehicle

        }, 
        {
            name: "SPACEPORT",
            data: (
                <>
                A spaceport or cosmodrome is a site for launching (or <br className="break" />
                receiving) spacecraft, by analogy to the seaport for ships  <br className="break" />
                or airport for aircraft. Based in the famous Cape  <br className="break" />
                Canaveral, our spaceport is ideally situated to take  <br className="break" />
                advantage of the Earth’s rotation for launch. <br className="break" />
                </>
            ),
            image: SpacePort

        }, 
        {
            name: "SPACE CAPSULE",
            data: (
                <>
                A space capsule is an often-crewed spacecraft that uses <br className="break" />
                a blunt-body reentry capsule to reenter the Earth's <br className="break" />
                atmosphere without wings. Our capsule is where you'll <br className="break" />
                spend your time during the flight. It includes a space <br className="break" />
                gym, cinema, and plenty of other activities to keep you <br className="break"/>
                entertained.
                </>
            ),
            image: SpaceCapsule

        }

    ]




    const [activeTechInfo, setTechInfo] = useState(techInfoBucket[0]);



    const displayTechBiodata = (information:string)=>{
        const selectedTechInfo = techInfoBucket.find((dest) => dest.name === information);


        if (selectedTechInfo) {
           
            setTechInfo(selectedTechInfo);
          }


    }

    return (
          <>

        <m.div
        
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 0.9, ease:"easeInOut"}}
        exit={{opacity: 0}}
        
        
        >

            <div>
            <div className='CrewHeadingHolder'>
        <h3 className="CrewHeading"><span className="Crewnumber">03</span>SPACE LAUNCH 101</h3> 
        </div> 


         <div className='TechMainContent'>

        <div className='TechInfoHolder'>
           
           <div className='Holder4techInfoCircle'>
           <div className={`techInfoCircle ${activeTechInfo.name === 'LAUNCH VEHICLE' ? 'activetechInfoCircle' : ''}`}  onClick={() => displayTechBiodata("LAUNCH VEHICLE")}><p>1</p></div>
            <div className={`techInfoCircle ${activeTechInfo.name === 'SPACEPORT' ? 'activetechInfoCircle' : ''}`} onClick={() => displayTechBiodata("SPACEPORT")}><p>2</p></div>
            <div className={`techInfoCircle ${activeTechInfo.name === 'SPACE CAPSULE' ? 'activetechInfoCircle' : ''}`} onClick={() => displayTechBiodata("SPACE CAPSULE")}>  <p>3</p></div>
           </div>

           <div className='TechInfo'>
            <p>THE TERMINOLOGY…</p>
            <h3>{activeTechInfo.name}</h3>
            <p>{activeTechInfo.data}</p>
            
           </div>

        </div> {/* Tech information ends here**/ }


          <div className='TechImage'>
            <img src={activeTechInfo.image} />
          </div>



        </div>


            </div>



            
        </m.div>
        </>
    );
};

export default TechInfo;