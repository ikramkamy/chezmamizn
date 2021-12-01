import React,{useState,useEffect} from 'react';
import './signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {loginUser} from '../actions/useractions';
/* test pull2*/ 
import Signup from './SignUp';

const Signin=(props)=>{
  const {showsignin}=props;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const AUTH = 'AUTH';
const history = useHistory();
const [issignin,setIssignin]=useState(false);
const {showinscription}=props;
const [sign,setSign]=useState("Connectez-vous")
const [show,setShow]=useState(false)
const handelshow=()=>{
  setShow(!show);
  setSign("Inscrivez-vous");
}
const handelshowBack=()=>{
  setShow(!show);
  setSign("Connectez-vous")

}
const [input,setInput]=useState({
    email:"",
    password:""
})
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handelChange=(event)=>{
   setEmail(event.target.value);
    }
const handelChange2=(event)=>{
    setPassword(event.target.value);
       }
       
const token=localStorage.getItem('token');
const handelClick=()=>{
 // alert('we are adding user')
input.email=email;
input.password=password;
loginUser(input);
setInput(
  { email:"",
   password:""}
 )
if(token!==null){
  history.push("/shop")
  setInput(
   { email:"",
    password:""}
  )
}else if (!token){
  alert("votre email ou mot de passe est invalide, Vérifiez votre inscription !")
}
}
const [loginout,setLoginout]=useState("login");
const handelSubmit=(e)=>{
e.preventDefault();
console.log("submit succed")
}
return(
<div className="Panier">
<div className="panier-box">
<div onClick={showsignin} className="close-bnt">X</div>
<div className="pop-heur-title panier-title"> Se connecter </div> 
{ !show && (
<div className="box-one">
<div className="box-one-item b-o-i-e-signin-1">
<div className="box-one-item-elem b-o-i-e-signin">
<form className="form-signin" onSubmit={handelSubmit}>
<input  className="label-sigin" type="text"  placeholder="Email" onChange={handelChange} value={email} name="email"/>
<input className="label-sigin" type="password"  required placeholder="Mot de passe" onChange={handelChange2} value={password} name="password" />
<div className="btn-signin-wrapper">
 <div  className="commander btn-signin-wrapper" onClick={handelClick}>Connexion</div>
</div>
</form>
</div>
</div>
<div className="footer-signin">
<div style={{color:"rgb(150, 160, 180)"}}>Pas encore inscrit?</div>
<div onClick={handelshow} className="inscrire"> Créer mon compte</div>
{/*<span onClick={handelshow} className="inscrire">Créer mon compte</span>*/}
</div>
</div>
)}
</div>
{show && (
 <Signup handelshowBack={handelshowBack} showsignin={showsignin}/>
)}
</div>)
}

export default Signin;