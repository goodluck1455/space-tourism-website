import  { useState } from 'react';
// import BackgroundImage1 from "./assets/assets/destination/background-destination-desktop.jpg";
import './index.css';
import "./DestInfo.css"
import {motion as m} from "framer-motion";
import Homecss from "./Main.module.css"
import EarthLogo1 from "./assets/assets/destination/image-moon.png"
import MarsLogo1 from "./assets/assets/destination/image-mars.png"
import europa from "./assets/assets/destination/image-europa.png"
import titan from "./assets/assets/destination/image-titan.png"




interface DestInfoProps {
 
}

const DestInfo: React.FC<DestInfoProps> = () => {
    // document.body.style.backgroundImage = `url(${BackgroundImage1})`;

    const showDistance = [
        {
            id: "MOON",
            distance: "384,400 km",
            time: "3 days",
            info: `See our planet as you’ve never seen it before. A perfect 
            relaxing trip away to help regain perspective and come 
            back refreshed. While you’re there, take in some history 
            by visiting the Luna 2 and Apollo 11 landing sites.`
        },
        {
            id: "MARS",
            distance: "225 MIL. km",
            time: "9 months",
            info: `Don’t forget to pack your hiking boots. You’ll need them to 
            tackle Olympus Mons, the tallest planetary mountain in 
            our solar system. It’s two and a half times the size of 
            Everest!`
        },
        {
            id: "EUROPA",
            distance: "628 MIL. km",
            time: "3 years",
            info: `The smallest of the four Galilean moons orbiting Jupiter, 
            Europa is a winter lover’s dream. With an icy surface, it’s 
            perfect for a bit of ice skating, curling, hockey, or simple 
            relaxation in your snug wintery cabin.`
        },
        {
            id: "TITAN",
            distance: "1.6 BIL. km",
            time: "7 years",
            info: `The only moon known to have a dense atmosphere other 
            than Earth, Titan is a home away from home (just a few 
                hundred degrees colder!). As a bonus, you get striking 
                views of the Rings of Saturn.`
        },
    ]





    const [activeDestination, setActiveDestination] = useState('MOON');
    const [activeDestinationImage, setActiveDestinationImage] = useState(EarthLogo1);
    const [activeDestanceTime, setActiveDestanceTime] = useState(showDistance[0]);


   

    const displayDistination = (destination: string, image: string) => {
            const selectedDestination = showDistance.find((dest) => dest.id === destination);
            if (selectedDestination) {
              setActiveDestination(destination);
              setActiveDestinationImage(image);
              setActiveDestanceTime(selectedDestination);
            }
          };

    return (
        <>
        <m.div className={Homecss.mainPageImage}
         initial={{opacity: 0}} 
         animate={{opacity: 1}} 
         transition={{duration: 0.9, ease:"easeInOut"}}
         exit={{opacity: 0}}
        
        >
    <div className='CoverPage4DestiniNFO'>
    <div className="destinationContent">

    <div className='DestHeadBody'>
    <h3 className="DestHeading"><span className="Destnumber">01</span>PICK YOUR DESTINATION</h3>
    
        <img src={activeDestinationImage} className="destLogo" />
   
    </div>

    <div>

    <div className='destInforMenuBar'>  
    <ul >
    <li className={activeDestination === 'MOON' ? 'active' : ''} onClick={() => displayDistination("MOON", EarthLogo1)}>MOON</li>
    <li className={activeDestination === 'MARS' ? 'active' : ''} onClick={() => displayDistination('MARS', MarsLogo1)}>MARS</li>
    <li className={activeDestination === 'EUROPA' ? 'active' : ''} onClick={() => displayDistination('EUROPA', europa)}>EUROPA</li>
    <li className={activeDestination === 'TITAN' ? 'active' : ''} onClick={() => displayDistination('TITAN', titan)}>TITAN</li>
    </ul>
    <h2 className={`Dmoon ${activeDestination === 'EUROPA' ? 'EuroMargin' : ''}`}>{activeDestination}</h2>
    <p className="monInfo">{activeDestanceTime.info}</p>

    <hr className="hrRule4Moon" />

    <div className="distance4Moon">
        <div className="distance4MoonContentA">
            <p>AVG. DISTANCE</p>
            <h3>{activeDestanceTime.distance}</h3>
        </div>

        <div className="distance4MoonContentB">
            <p>Est. travel time</p>
            <h3>{activeDestanceTime.time}</h3>
        </div>
    </div>
        
    </div>

</div>


</div>
</div>
        

</m.div>
        </>
    );
};

export default DestInfo;













// const DestInfo: React.FC<DestInfoProps> = () => {
//   document.body.style.backgroundImage = `url(${BackgroundImage1})`;

//   const showDistance = [
//     {
//       id: '001',
//       distance: '225 MIL. km',
//       time: '9 months',
//     },
//     {
//       id: '002',
//       distance: '300 MIL. km',
//       time: '9 Days',
//     },
//     {
//       id: '003',
//       distance: '500 MIL. km',
//       time: '5 months',
//     },
//     {
//       id: '005',
//       distance: '2 MIL. km',
//       time: '6 days',
//     },
//   ];

//   const [activeDestination, setActiveDestination] = useState('MOON');
//   const [activeDestinationImage, setActiveDestinationImage] = useState(EarthLogo1);
//   const [activeDestanceTime, setActiveDestanceTime] = useState(showDistance[0]);

//   const displayDistination = (destination: string, image: string) => {
//     const selectedDestination = showDistance.find((dest) => dest.id === destination);
//     if (selectedDestination) {
//       setActiveDestination(destination);
//       setActiveDestinationImage(image);
//       setActiveDestanceTime(selectedDestination);
//     }
//   };

//   return (
//     <>
//       <div className="destinationContent">
//         <div className="">
//           <h3 className="DestHeading">
//             <span className="Destnumber">01</span>PICK YOUR DESTINATION
//           </h3>
//           <img src={activeDestinationImage} className="destLogo" alt={activeDestination} />
//         </div>

//         <div>
//           <div className="destInforMenuBar">
//             <ul>
            //   <li className={activeDestination === 'MOON' ? 'active' : ''} onClick={() => displayDistination('001', EarthLogo1)}>
            //     MOON
            //   </li>
            //   <li className={activeDestination === 'MARS' ? 'active' : ''} onClick={() => displayDistination('002', MarsLogo1)}>
            //     MARS
            //   </li>
            //   <li className={activeDestination === 'EUROPA' ? 'active' : ''} onClick={() => displayDistination('003', europa)}>
            //     EUROPA
            //   </li>
            //   <li className={activeDestination === 'TITAN' ? 'active' : ''} onClick={() => displayDistination('005', titan)}>
            //     TITAN
            //   </li>
//             </ul>
//             <h2 className="Dmoon">{activeDestination}</h2>
//             <p className="monInfo">
//               See our planet as you’ve never seen it before. A perfect <br />
//               relaxing trip away to help regain perspective and come <br />
//               back refreshed. While you’re there, take in some history <br />
//               by visiting the Luna 2 and Apollo 11 landing sites.
//             </p>

//             <hr className="hrRule4Moon" />

//             <div className="distance4Moon">
//               <div className="distance4MoonContentB">
//                 <p>{activeDestanceTime.distance}</p>
//                 <h3>{activeDestanceTime.time}</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DestInfo;
