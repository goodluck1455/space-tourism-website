import  { useState} from 'react';
import './index.css';
import "./CrewInfo.css";




// import 'swiper/swiper-bundle.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {motion as m} from "framer-motion";
// import CrewBackgroundImage from "./assets/assets/crew/background-crew-desktop.jpg";
import DouglasHurley from "./assets/assets/crew/image-douglas-hurley.png";
import MarkShuttleworth from "./assets/assets/crew/image-mark-shuttleworth.png";
import AnoushehAnsari from "./assets/assets/crew/image-anousheh-ansari.png";
import VictorGlover from "./assets/assets/crew/image-victor-glover.png";

interface CrewInfoProps {
    // designation: string;
    // images: string;
}

const CrewInfo: React.FC<CrewInfoProps> = () => {
    // document.body.style.backgroundImage = `url(${CrewBackgroundImage})`;


    

    const crewMembersInfo = [
        {
            id: "001",
            designation: "Commander  ",
            name: " Douglas Hurley",
            biodata: (
                 <>
            Douglas Gerald Hurley is an American engineer, former  <br className="Crewbreak" />
            Marine Corps pilot and former NASA astronaut. He  <br className="Crewbreak" />
            launched into space for the third time as commander of  <br className="Crewbreak" />
            Crew Dragon Demo-2. 
            </>
             )
        },
        {
            id: "002",
            designation: "Mission Specialist ",
            name: " MARK SHUTTLEWORTH",
            biodata: (
                <>
         Mark Richard Shuttleworth is the founder and CEO of <br className="Crewbreak" />
         Canonical, the company behind the Linux-based Ubuntu <br className="Crewbreak" />
         operating system. Shuttleworth became the first South <br className="Crewbreak" />
         African to travel to space as a space tourist. 
           </>
            )
            
        },
        {
            id: "003",
            designation: "PILOT",
            name: " Victor Glover",
            biodata: (
                <>
          Pilot on the first operational flight of the SpaceX Crew <br className="Crewbreak" />
          Dragon to the International Space Station. Glover is a <br className="Crewbreak" />
          commander in the U.S. Navy where he pilots an F/A-18.He <br className="Crewbreak" />
          was a crew member of Expedition 64, and served as a <br className="break_A" />
          station systems flight engineer. 
           </>
            )
            
        },
        {
            id: "004",
            designation: "Flight Engineer ",
            name: "Anousheh Ansari",
            biodata: (
                <>
          Anousheh Ansari is an Iranian American engineer and <br className="Crewbreak" />
          co-founder of Prodea Systems. Ansari was the fourth <br className="Crewbreak" />
          self-funded space tourist, the first self-funded woman to <br className="Crewbreak" />
           fly to the ISS, and the first Iranian in space. 
           </>
            )
            
        }
       
    ];



    const [activeCrewImage, setActiveCrewImage] = useState(DouglasHurley);
    const [activeCrewMembersInfo, setActiveCrewMembersInfo] = useState(crewMembersInfo[0]);

    const displayCrewPictures = ( image: string, crewInfoData: string) => {
        
        const selectedBiodata = crewMembersInfo.find((dest) => dest.id ===  crewInfoData);
        if (selectedBiodata) {
          setActiveCrewImage(image);
          setActiveCrewMembersInfo(selectedBiodata);
        }
    }



  
     

    return (
            <>

           <m.div
           
           initial={{opacity: 0, translateY: 150}} 
           animate={{opacity: 1, translateY: 0}} 
           transition={{duration: 0.9, ease:"easeInOut"}}
           exit={{opacity: 0}} >
            
        <div className='CrewHeadingHolder'>
        <h3 className="CrewHeading"><span className="Crewnumber">02</span>Meet your crew</h3> 
        </div> 

        <div className='CrewBody'>

            <div>


        <div className='CrewInfoDetails'>
            <h3>{activeCrewMembersInfo.designation}</h3>
            <h2>{activeCrewMembersInfo.name}</h2>
            <p>{activeCrewMembersInfo.biodata}</p>
        </div>
        

        <div className="CrewSelectHolder">
        <div className={`CrewSelect ${activeCrewImage === DouglasHurley ? 'ActiveCrew' : ''}`} onClick={() => displayCrewPictures( DouglasHurley, "001")}></div>
        <div className={`CrewSelect ${activeCrewImage === MarkShuttleworth ? 'ActiveCrew' : ''}`} onClick={() => displayCrewPictures( MarkShuttleworth, "002")}></div>
        <div className={`CrewSelect ${activeCrewImage === VictorGlover ? 'ActiveCrew' : ''}`} onClick={() => displayCrewPictures( VictorGlover, "003")}></div>
        <div className={`CrewSelect ${activeCrewImage === AnoushehAnsari ? 'ActiveCrew' : ''}`} onClick={() => displayCrewPictures( AnoushehAnsari, "004")}></div>
        </div>

        </div>
        <hr className="hrRule4Crew" />
         <div>
         
    
            <img src={activeCrewImage} className={`CrewPictures ${activeCrewImage === AnoushehAnsari ? 'ActiveImage' : ''}
            ${activeCrewImage === MarkShuttleworth ? 'ActiveMarkImage' : ''}
            ${activeCrewImage === DouglasHurley ? 'ActiveDougImage' : ''}
            ${activeCrewImage === VictorGlover ? 'ActiveVictorImage' : ''}
            `} />
           
         </div>
         

        </div>

        </m.div>
        </>
    );
};

export default CrewInfo;