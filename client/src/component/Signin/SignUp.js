import React,{useState} from 'react';
import './signup.css';
import axios from 'axios';
import {FaArrowCircleLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Signup=(props)=>{
  const {handelshowBack,showsignin}=props;
  const history = useHistory();
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const [input,setInput]=useState({
    nom:"",
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    phone:"",
})
const handelChange=(event)=>{
const {name,value}=event.target;
    setInput(prevInput=>{
      return  { 
        ...prevInput,
        [name]:value
    }
    })
    }
   
const handelClick=(event)=>{
console.log('we are in signup page')
event.preventDefault();
if(input.firstName ==''  || input.email ==''|| input.password =='' || input.phone =='' || input.lastName =='' ){
alert("Remplissez tous les champs SVP !")
        }
else if(!emailPattern.test(input.email)&& input.email.length>0){
alert("Entrez un email valide SVP !")
       }else{
        //console.log("we are posting ")
        const newuser={
            firstName:input.firstName,
            lastName:input.lastName,
            email:input.email,
            phone:input.phone,
            password:input.password
        }
        console.log(newuser);
        axios.post(`/signup`,newuser)
        .then(response =>handelshowBack()
         //console.log("post with axios succed")
        ).catch(error => {
          console.log("the raison of failure", error) 
        });
      }
        }

    
return(<div className="Panier">
<div className="panier-box">
<div  className="close-bnt" onClick={showsignin}>X</div>
<div className="pop-heur-title panier-title"> Créer mon compte </div> 




<div className="box-one">

<div className="box-one-item b-o-i-e-signin-1">
<div className="box-one-item-elem b-o-i-e-signin">
<form className="form-signin">
<input type="text"  placeholder="Nom" onChange={handelChange} value={input.lastName} name="lastName" />
<input  type="text"  placeholder="Prénom" onChange={handelChange} value={input.firstName} name="firstName" />
<input  type="Number" maxLength="10" placeholder="Numéro de télèphone" onChange={handelChange} value={input.phone} name="phone"/>

<input  className="label-sigin" type="text"  placeholder="Email" onChange={handelChange} value={input.email} name="email"/>
<input className="label-sigin" type="password"  required placeholder="Mot de passe" onChange={handelChange} value={input.password} name="password" />
<div className="btn-signin-wrapper">
 
<div  className="commander btn-signin-wrapper" onClick={handelClick}>Créer mon compte</div>

</div>
</form>
</div>
</div>
</div>
</div>
</div>)
}

export default Signup;