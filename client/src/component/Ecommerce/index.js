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
import Panier from '../Panier';
import Carouselmini from '../Minicarousel';
import Signin from '../Signin';
import useForceUpdate from 'use-force-update';
const Ecommerce=(props)=>{
const forceUpdate = useForceUpdate();
const [produit,setProduit]=useState([{
    _id:"619f3eabadf0a734930b8348",
     img:"/images/prod2.jpeg",
    cathegorie:"Touche salée",
    name:"plat 01",
    quantite:0,
    prix:"150 "
},
{
    _id:"619f3ec8adf0a734930b834a",
     img:"/images/prod2.jpeg",
    cathegorie:"Touche salée",
    name:"plat 02",
    quantite:0, 
    prix:"150 "
},
{
    _id:"619f3ed1adf0a734930b834c",
     img:"/images/prod2.jpeg",
    cathegorie:"Touche salée",
    name:"plat 03",
    quantite:0,
    prix:"150 "
}

]);



const [showprodbyID,setShowprodbyID]=useState(false);
const [shopHpop ,setShopHpop]=useState(false);
const [cart,setCart]=useState([]);
const [sign,setSign]=useState(false);
const showsearch=()=>{
alert("we are showing");
}
const showheurpop=()=>{
setShopHpop(!shopHpop);
}
useEffect(()=>{
axios.get('/getproduit').then((response)=>setProduit(response.data))
},[produit])
/************/
const handelshowbyID=()=>{
setShowprodbyID(!showprodbyID);   
}
/***************/
const [cl,setCl]=useState(0);
const [panier,setPanier]=useState(false);
const showpanier =()=>{
    setPanier(!panier);
    cart.map((e)=>setCl(0+e.quantite))   
    console.log(cl);
}
/*********ADD to panel*******/
const add =(e)=>{
console.log("indexof e",cart.indexOf(e) )
if(cart.indexOf(e)!==-1){
e.quantite=e.quantite+1;
 forceUpdate();
 console.log("cart", cart)
localStorage.setItem(`taillCart`, cart.length+1 );
}
else{
  e.quantite=1;
  setCart([...cart,e]);
  forceUpdate();
  localStorage.setItem(`taillCart`, cart.length+1 );
}}
const minus=(e)=>{
    if(cart.indexOf(e)!==-1){
     e.quantite=e.quantite-1;
     forceUpdate();
     localStorage.setItem(`taillCart`, cart.length-1 );
}
else if(e.quantite==0){
cart.filter(e);
localStorage.setItem(`taillCart`, cart.length );

   }}
/******Require sign in******/
const showsignin=()=>{
    setSign(!sign);
}
const del =(e)=>{
    cart.filter(e);
    console.log("cart",cart);
}
return(<div className="wrap-ecommerce" >
   <Navbar/>
   <Mynavbar showsearch={showsearch}  showheurpop={showheurpop} showpanier={showpanier} showsignin={showsignin}/>
   <Carouselm/>
   <div className="ecommerce">
   <SideBar/>
<div className="wrap-products-withTitle">
<div className="cathegorie-name">hollo 👋</div>
<div className="cathegorie-name">Touche salée</div>
<div  className="wrap-products"  >  
{produit?.map((e)=><Produit name={e.name} 
img={e.img} _id={e._id} 
add={()=>add(e)}
minus={()=>minus(e)}
prix={e.prix} 
handelshowbyID={handelshowbyID}
 cathegorie={e.cathegorie}/>)}
</div>


<div className="cathegorie-name">Desserts</div>
<div  className="wrap-products"  >  
{/*produit?.map((e)=><Produit name={e.name}
 img={e.img} prix={e.prix} _id={e._id}  handelshowbyID={handelshowbyID} add={()=>add(e)} cathegorie={e.cathegorie}/>)*/}
</div>



<div className="cathegorie-name">Pain</div>
<div  className="wrap-products"  >  
{/*produit?.map((e)=><Produit name={e.name} id={e._id} delete={()=>del(e)}
add={()=>add(e)} img={e.img} prix={e.prix}  handelshowbyID={handelshowbyID}  cathegorie={e.cathegorie}/>)*/}
</div>
</div>
{showprodbyID && (<ProductbuID  handelshowbyID={handelshowbyID}/>)}
{shopHpop && <Heurpop close={showheurpop}/>}
{panier && (<Panier showpanier={showpanier} cart={cart} showsignin={showsignin}/>)}
{sign && (<Signin showsignin={showsignin}/>)}
</div>
</div>)
}
export default Ecommerce;