import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";
import './footer.css';
const Footer=(props)=>{

 
return(<div className="footer">
<div className="item-footer"></div>
<div className="item-footer">
<Link to="/facebook.com"><FaFacebook className="icon-footer"/></Link>
<Link to="/facebook.com"><FaInstagram className="icon-footer"/></Link>
<Link to="/facebook.com"><FaTwitter className="icon-footer"/></Link>
<Link to="/facebook.com"><FaLinkedin className="icon-footer"/></Link>
</div>
<div className="item-footer">CHEZ-MAMIZ@2021</div>

</div>)
}
export default Footer;