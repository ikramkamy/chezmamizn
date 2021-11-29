import React from "react";
import "./heurpop.css";
const Heurpop=(props)=>{
const {close}=props;





    return(<div className="wrap-pop-heure" >
        <div className="whrap-heur">

        <div  className="prop-heur-close" onClick={close} >X</div>
       <div className="pop-heur-title">À quelle heure on vous livre ?</div> 
       <div className="heur-livraison-wrap">
       <div className="heur-livraison">
       <div className="heur-livraison-item remove-pading">
        <div className="en-tete">Pour fêter votre 1ère commande, profitez de la livraison express offerte !</div>
        <div className="box-livraison-offre">
            <div className="box-livraison-offre-item">
        <img src="/images/icon/shipping.png" className="icon-input-nav"/>
         <div className="space-margin">30-60mins Tarif livraison</div>
         </div>

         
        <div className="box-livraison-offre-item"> 
        <div className="space-margin offre">🎉offert</div>
        <input type="radio"/>  
         </div>  
        
        
         
         
        </div>
        
        </div>
        </div>
        </div>
       <div className="heur-livraison-wrap">
            <div className="heur-livraison">
            <div className="heur-livraison-item">

                <div className="make-row-top">
            <span className="make-row">
            <img src="/images/icon/clock.png" className="icon-input-nav"/>
            <div className="info-heure-pop">15:00h-16:00h</div> 
            </span>
            <span className="make-row">
            <div className="info-heure-pop"> 150DA</div>
           <input type="radio" style={{fontSize:"25px"}} defaultChecked/>
           
            </span>
            </div>



            <div className="make-row-top">
            <span className="make-row">
            <img src="/images/icon/clock.png" className="icon-input-nav"/>
            <div className="info-heure-pop">15:00h-16:00h</div> 
            </span>
            <span className="make-row">
            <div className="info-heure-pop"> 150DA</div>
           <input type="radio" style={{fontSize:"25px"}} defaultChecked/>
           
            </span>
            </div>
        
        
        
        
        
        
        </div>
     
        </div>

        

          
       
        </div>
       
       




        </div>
    </div>)
}
export default Heurpop;