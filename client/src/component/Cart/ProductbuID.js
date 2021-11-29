import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FaPlus, FaMinus} from "react-icons/fa";
import {useParams} from 'react-router-dom';
import './cart.css';
import './produitbyid.css';
import axios from 'axios';

const ProductbuID=(props)=>{
  const {_id}=useParams();
  const q=localStorage.getItem(`${_id}`);
  const [quantite,setQuantite]=useState(Number(q));
  const [showminus,setShowminus]=useState(false);
  const {handelshowbyID}=props;
   const handelquantite=()=>{
    setQuantite(Number(q)+1);
  localStorage.setItem(`${_id}`, Number(q)+1 );
   }
   const handelminus=()=>{
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
  /******get product by id ******/
  const [produit,setProduit]=useState([]);
  console.log("_id",_id)
  useEffect(()=>{
  const expensesListResp = async () => {
      await axios.get(`/getproduitByID/${_id}`,)
      .then(response =>setProduit(response.data))
  
       }
    expensesListResp();
  
    },[])
 
  /*****************************/
 
return(<div className="wrap-ID">
  <div className="wrap-ID-inter">
  <div onClick={handelshowbyID} className="close-bnt">X</div>
<img className="img-by-id-style" src={produit.img}/>
<div className="footer-id-page">
<div className="info-plat-01">
  <div className="prix-tag"> {produit.prix} DA</div> 
<div className="quattite">
{produit.prix}
{showminus && (<div className="btn-qauntite btn-minus" onClick={handelminus}><FaMinus/></div>)}  
       {q}
   <div className=" btn-ajouter" onClick={handelquantite}>Ajouter</div>
</div>  
</div>
</div>





</div>
</div>)
}
export default ProductbuID;