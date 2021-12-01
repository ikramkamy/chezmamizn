import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar=(props)=>{

 
return(<div className="sideBar">
    <div className="position-side-bar">
<div className="side-header">
<img src="/images/icon/settings.png" className="icon-input-nav settings-icon"/> Mes préfèrences</div>    
<div className="side-item">Desserts</div>
<div className="side-item">Yaourts et fromages</div>
<div className="side-item">Fruits frais</div>
<div className="side-item">Pain</div>
<div className="side-item">Boisson</div>
<div className="side-item">Touche sucrée </div>
<div className="side-item">Touche salé</div>

</div>
</div>)
}
export default SideBar;