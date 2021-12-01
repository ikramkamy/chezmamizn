import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
//import axios  from 'axios';
import './minicarousel.css';


const Carouselmini=(props)=>{
var counterm = 0;
const transm = 300;
var numm = transm * counterm;
 
return(<div className="wrap-carousel-mini">
     
<div className="buttonsControl">
               <button className="minusButton" onClick={() => {
                               counterm = counterm - 1;
                               const itemm = document.getElementById('rm')
                               const productsm = document.querySelector('.owlSlideItem mini-carousel-box')
           
                               itemm.style.transform = 'translateX(' + (-transm * counterm) + 'px)'
                               console.log(transm * counterm);
                               if (transm * counterm == 0) {
                                   counterm =  5;
                                }

                }} ><img src="/images/icon/left.png" className="icon-input-nav"/>
                </button>
        
            </div>


            <div className="contentOwl">
                <div className="containerOwlSlide">

                    <div id="rm" className="owlSlideItem">

                 <div className="mini-carousel-box">
                        <Link to="/">
                         
                            <div className="productName"> 
                            🔥
                            <div>Plat chez mamiz 12</div>
                             </div>
                            
                            </Link>
                        </div>
                        <div className="mini-carousel-box">
                        <Link to="/">
                            
                            <div className="productName"> 
                            <div>Plat chez mamiz 12</div>
                            
                            </div>
                            </Link>
                        </div> 
                        <div className="mini-carousel-box">
                        <Link to="/">
                            
                            <div className="productName"> 
                            <div>Plat chez mamiz 12</div>
                            
                            </div>
                            </Link>
                        </div> 

                        <div className="mini-carousel-box">
                        <Link to="/">
                            
                            <div className="productName"> 
                            <div>Plat chez mamiz 12</div>
                            
                            </div>
                            </Link>
                        </div> 
                        <div className="mini-carousel-box">
                        <Link to="/">
                            
                            <div className="productName"> 
                            <div>Plat chez mamiz 12</div>
                            
                            </div>
                            </Link>
                        </div> 
                        <div className="mini-carousel-box">
                        <Link to="/">
                            
                            <div className="productName"> 
                            <div>Plat chez mamiz 12</div>
                            
                            </div>
                            </Link>
                        </div> 

                        </div>
                        </div>
                        </div>


                        <div className="buttonsControl">
         
                <button id="plus" className="plusButton" onClick={() => {

                    counterm = counterm + 1;
                    const enable = document.querySelector('.minusButton');
                    enable.style.pointerEvents = "visible";
                    enable.style.opacity = "1";
                    const itemm = document.getElementById('rm');
                    const products = document.querySelector('.owlSlideItem mini-carousel-box');

                    itemm.style.transform = 'translateX(' + (-transm * counterm) + 'px)';
                    console.log(transm * counterm);
                    if (transm * counterm == 2100) {
                        counterm = -1;
                    }

                }}><img src="/images/icon/right.png" className="icon-input-nav"/></button>
            </div>




</div>)
}
export default Carouselmini;