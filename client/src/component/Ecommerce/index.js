import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';
import Produit from './Produit';
import ProductbuID from '../Cart/ProductbuID';
import axios  from 'axios';
import './ecommerce.css';
import Mynavbar from '../Mynavbar';
import Navbar from '../Navbar';
import Carouselm from '../Carousel';
import Heurpop from '../HeurepopUp';
const Ecommerce=(props)=>{
const [produit,setProduit]=useState([]);
const [showprodbyID,setShowprodbyID]=useState(false);
const [shopHpop ,setShopHpop]=useState(false);
const showsearch=()=>{
    alert("we are showing");
    
}
const showheurpop=()=>{
    setShopHpop(!shopHpop)
}
useEffect(()=>{
axios.get('/getproduit').then((response)=>setProduit(response.data))
},[produit])


/************/
const handelshowbyID=()=>{
    setShowprodbyID(!showprodbyID);   
}
return(<div className="wrap-ecommerce" >
    <Navbar/>
   
   <Mynavbar showsearch={showsearch}  showheurpop={showheurpop}/>
   <Carouselm/>
   <div className="ecommerce">
<SideBar/>


<div className="wrap-products-withTitle">
<div className="cathegorie-name">Touche salée</div>
<div  className="wrap-products"  >  
{produit?.map((e)=><Produit name={e.name} 
img={e.img} _id={e._id}  prix={e.prix} 
handelshowbyID={handelshowbyID}
 cathegorie={e.cathegorie}/>)}
</div>


<div className="cathegorie-name">Desserts</div>
<div  className="wrap-products"  >  
{produit?.map((e)=><Produit name={e.name} img={e.img} prix={e.prix}  handelshowbyID={handelshowbyID}  cathegorie={e.cathegorie}/>)}
</div>



<div className="cathegorie-name">Pain</div>
<div  className="wrap-products"  >  
{produit?.map((e)=><Produit name={e.name} img={e.img} prix={e.prix}  handelshowbyID={handelshowbyID}  cathegorie={e.cathegorie}/>)}
</div>

</div>

{showprodbyID && (<ProductbuID    handelshowbyID={handelshowbyID} />)}
{shopHpop && <Heurpop close={showheurpop}/>}
</div>
</div>)
}
export default Ecommerce;