import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './produit.css';
import {FaPlus, FaMinus} from "react-icons/fa";
const Produit=(props)=>{
const {_id}=props;   
const q=localStorage.getItem(`${_id}`); 
const history = useHistory();
const [quantite,setQuantite]=useState(Number(q));
const [showminus,setShowminus]=useState(false);
const {handelshowbyID}=props;
 const handelquantite=(e)=>{
setQuantite(Number(q)+1);
localStorage.setItem(`${_id}`, Number(q)+1 );
}
 const handelminus=(e)=>{
setQuantite(Number(q)-1);
localStorage.setItem(`${_id}`, Number(q)-1 );
}
useEffect(()=>{
if(Number(q)){
    setShowminus(true);   
}else{
    setShowminus(false);   
}

},[quantite])
/*********show ID page only whene click on the image itself********/
const shofromimg=()=>{
    handelshowbyID();
    history.push(`/shop/${_id}`);
}
return(<div className="wrap-produit">
<img src={props.img} onClick={shofromimg} className="imgProduit"/>
<div className="info-plat-01 origine"> 🍏 Origine du plat</div>
<div className="info-plat-01 nom-plat">
    {props.name}
</div>
<div className="info-plat-01">
  <div className="prix-tag"> {props.prix} DA</div> 
<div className="quattite">
{props.prix}
{showminus && (<div className="btn-qauntite btn-minus" onClick={handelminus}><FaMinus/></div>)}  
        {q}
   <div className="btn-qauntite btn-plus" onClick={handelquantite}><FaPlus/></div>
  
 
  
  </div>  


  
  </div>

<div className="info-plat-01">
   A rechaufé
</div>


</div>)
}
export default Produit;