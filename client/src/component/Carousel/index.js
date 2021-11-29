import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
//import axios  from 'axios';
import './carousel.css';


const Carouselm=(props)=>{
var counter = 0;
const trans = 300;
var num = trans * counter;
 
return(<div className="wrap-carousel">
     
<div className="buttonsControl">
               <button className="minusButton" onClick={() => {
                               counter = counter - 1;
                               const item = document.getElementById('r')
                               const products = document.querySelector('.owlSlideItem products')
           
                               item.style.transform = 'translateX(' + (-trans * counter) + 'px)'
                               console.log(trans * counter);
                               if (trans * counter == 0) {
                                   counter =  5;
                                }

                }} > - </button>
        
            </div>


            <div className="contentOwl">
                <div className="containerOwlSlide">

                    <div id="r" className="owlSlideItem">

                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 1 </div>
                             </div>
                            </div>
                            </Link>
                        </div>
                        
                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 2 </div>
                             </div>
                            </div>
                            </Link>
                        </div>

                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 3</div>
                             </div>
                            </div>
                            </Link>
                        </div>
                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 4</div>
                             </div>
                            </div>
                            </Link>
                        </div>
                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 5</div>
                             </div>
                            </div>
                            </Link>
                        </div>

                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 6</div>
                             </div>
                            </div>
                            </Link>
                        </div>

                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 7</div>
                             </div>
                            </div>
                            </Link>
                        </div>
                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 8</div>
                             </div>
                            </div>
                            </Link>
                        </div>
                        <div className="products">
                        <Link to="/">
                           <div className="imgProduct" style={{backgroundImage:`url("/images/plat.jpeg")`}}> 
                            <div className="productName"> 
                            <div>Plat chez mamiz 9</div>
                             </div>
                            </div>
                            </Link>
                        </div>
                     
              
                        </div>
                        </div>
                        </div>


                        <div className="buttonsControl">
         
                <button id="plus" className="plusButton" onClick={() => {

                    counter = counter + 1;
                    const enable = document.querySelector('.minusButton');
                    enable.style.pointerEvents = "visible";
                    enable.style.opacity = "1";
                    const item = document.getElementById('r');
                    const products = document.querySelector('.owlSlideItem products');

                    item.style.transform = 'translateX(' + (-trans * counter) + 'px)';
                    console.log(trans * counter);
                    if (trans * counter == 2100) {
                        counter = -1;
                    }

                }}> + </button>
            </div>




</div>)
}
export default Carouselm;