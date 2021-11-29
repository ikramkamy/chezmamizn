import React,{ useState, useEffect } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import {FaBars, FaBuilding, FaClock, FaLocationArrow, FaShoppingCart, FaUser} from "react-icons/fa";
 export default function Mynavbar(props) {
   const [toggleMenu,setToggleMenu]=useState(false);
   const [larger,setLarger]=useState(window.innerWidth);
   const [isVisible, setIsVisible] = useState(false);
   const adress=localStorage.getItem('adress');
  const {showsearch,showheurpop}=props;
 
const togglesmallscreen=()=>{
    setToggleMenu(!toggleMenu);

}
useEffect(()=>{

const changeWidth=()=>{
    setLarger(window.innerWidth);
    if(window.innerWidth >950){
        setToggleMenu(false) ;
    }
}
window.addEventListener('resize', changeWidth);
return()=>{
window.removeEventListener('resize',changeWidth);
}
},[])

const listenToScroll = () => {
  let heightToHideFrom = 180;
  const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
     
  if (winScroll > heightToHideFrom) { 
                
       setIsVisible(true);
  } else {
       setIsVisible(false)
  }  
};

useEffect(() => {   
  window.addEventListener("scroll", listenToScroll);
  return () => 
     window.removeEventListener("scroll", listenToScroll); 
}, [])


    return (
        <div className="Nav">
     
        
            <div className="menu">

               
                 <div className="menuLarge">
               {/*isVisible &&( <img src="" className="side-logo" /> )
                
               */}
                    <Link to="/">CHEZ MAMIZ</Link>
                   <div  className="input-address  nav-input ">
                   <img src="/images/icon/building.png" className="icon-input-nav"/>
                    {adress}
                   
                    <img src="/images/icon/clock.png" className="icon-input-nav" onClick={showheurpop}/>
                    À quelle heure ?
                     </div> 
                   <div className="input-search  ">
                   <img src="/images/icon/loupe.png" 
                   className="icon-input-nav" onClick={showsearch}/>
                   Rechercher
                     </div>
                     <img src="/images/icon/user.png" className="icon-input-nav"/>
                     <img src="/images/icon/bag.png" className="icon-input-nav"/>
                    </div>
{/*<div className="compressedLogo"> <img src={CompressLogo}/>  </div>*/}
<div className="burgerMenu">
                  <FaBars onClick={togglesmallscreen} />
</div>

            </div>
{toggleMenu && (
  <div className="fadeclass">
  <div className="menuSmallScreen">
      
                    <Link to="/">CHEZ MAMIZ</Link> 
                
                 
      <button className="closeButton" ></button>


  </div>
</div>

)}

          

         
        </div>


    )
}
