import React, { useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { sendcommand } from '../actions/commandeactions';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";
import './panier.css';
import Switch from "react-switch";
const Panier=(props)=>{
 const {showpanier,cart,showsignin}=props;
 console.log('cart',cart);
const adress=localStorage.getItem('adress');
const token=localStorage.getItem('token');
const user_id=localStorage.getItem('user_id');
var date = new Date();
const history=useHistory();
const [s,setS]=useState(false);
const handelSwitch=()=>{
setS(!s);
}
/****Envoyer le commande****/
const handelcommande=()=>{
if(!token){
  alert("Vous n'etes pas inscrits!");
  history.push('/Signin');
}else{
sendcommand({
    cart:cart,
    user:user_id,
    adress:adress,
    time: date
  })
  localStorage.clear();
  cart.splice(0, cart.length);
  console.log("cart",cart);
}}
return(<div className="Panier">
<div className="panier-box">
<div onClick={showpanier} className="close-bnt">X</div> 
<div className="pop-heur-title panier-title">Infos de livraison </div>
<div className="box-one">
<div className="box-one-item">
<div className="box-one-item-elem"><img src="/images/icon/localisation.png" className="icon-input-nav"/><div className="adress-panier"> {adress}   </div></div>  
<div className="box-one-item-elem modifier">Modifier</div>
</div>


    <div className="box-one-item">
    <div className="box-one-item-elem"><img src="/images/icon/shop.png" className="icon-input-nav"/><div className="adress-panier">Boutique </div></div> 
    <div className="box-one-item-elem modifier">Modifier</div>
       </div>
    <div className="box-one-item">
    <div className="box-one-item-elem"><img src="/images/icon/fast.png" className="icon-input-nav"/> <div className="adress-panier"> Duré de livraison</div></div>
        
    <div className="box-one-item-elem modifier">Modifier</div>   
    </div>
  </div>


<div className="pop-heur-title panier-title">Vos produits</div>
<div className="box-one">
{cart?.map((e)=> 
<div className="box-one-item">
<div className="box-one-item-elem"><img src={e.img} className="image-produit-panier"/><div className="adress-panier"> {e.name}</div></div>
<div className="box-one-item-elem">{e.quantite} x {e.prix} DA</div>
</div>
)}
</div>
<div className="pop-heur-title panier-title">Inclue les couverts </div>
<div className="box-one">
  <div className="box-one-item">
   <div className="box-one-item-elem ">
    <div className="text-panier-elem">   
      <div> Couverts</div>
<div className="text-panier-elem-smaller" >
  Aidez-nous à réduire les déchets : ne demandez des couverts que si vous en avez besoin 🌍
  </div>
  </div>
  <div className="text-panier-elem-swtch"><Switch checked={s} onChange={handelSwitch}/></div>
  
    </div>  
 
    
    </div>


</div>
 

<div className="pop-heur-title panier-title">Code promo </div>
<div className="box-one">

    <div className="box-one-item">
      <div className="box-one-item-elem"><div className="adress-panier"> Sous total   </div></div>  
      <div className="box-one-item-elem modifier">150 DA</div>
</div>
    <div className="box-one-item">
    <div className="box-one-item-elem"><div className="adress-panier">Frais de livraison  </div></div> 
    <div className="box-one-item-elem modifier">200 DA <div className="space-margin offre">🎉offert</div></div>
       </div>
    <div className="box-one-item">
    <div className="box-one-item-elem"><div className="adress-panier"> Total</div></div>
        
    <div className="box-one-item-elem modifier">450 DA  </div>   
    </div>
  </div>
<div className="wrap-btn-commande">
  <div className="commander" onClick={handelcommande}>Commander</div>
  </div>

  </div>
 
</div>)
}
export default Panier;