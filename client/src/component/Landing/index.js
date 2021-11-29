import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import {FaLocationArrow} from "react-icons/fa";
import Footer from '../Footer';
import './landing.css';
const Landing=(props)=>{
    const [input,setInput]=useState({
        adressv:"",
    })
    const adress=localStorage.getItem('adress');   
const handeladress=(event)=>{
    setInput({ adressv:event.target.value})
    localStorage.setItem('adress',event.target.value);
}
return(<div className="landing">
<Navbar/>
<div className="wall-back-landing" style={{backgroundImage:`url("/images/landing-background.jpg")`}}>
<h1 className="tit-01">CHEZ MAMIZ</h1>
<h3 className="tit-02">Des courses et des plats aussifrais que vous! </h3>
<h5 className="tit-03">livrée en 15 min </h5>

<div className="landing-btn">
    <FaLocationArrow/>
<input className="inside-input"  placeholder="Saisissez l'adresse de livraison"  value={input.adressv} name='adress' onChange={handeladress}/> 
<div className="chez-mamiz-btn">Voir nos produits</div>
</div>



<div className="text-landing">
    <span><Link>Connectez-vous</Link></span> pour afficher vos addresses récentes
    </div>


    <div className="chez-mamiz-btn-02">Accédez à ma Cantine/cafée</div>


</div>

<div className="type-commande-bloc">
<div className="commande-type">
<img src="/images/cagette.gif" />
<div className="commande-name">Freeesh</div>
<div className="commande-discreption">
commandez et récuprez dans 24h

</div>
</div>
<div className="commande-type">
<img src="/images/doigts.gif" />
<div className="commande-name">Fast</div>
<div className="commande-discreption">
Livraison

</div> 
</div>
<div className="commande-type">
<img src="/images/chef.gif" />
<div className="commande-name">& Fabulous</div>
<div className="commande-discreption">
commandes professionnelles

</div>
</div>
</div>
<Footer/>
</div>)
}
export default Landing;