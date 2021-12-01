

import axios from 'axios';
import {LOGIN_USER} from './types';
import {useHistory} from 'react-router-dom';


const token=localStorage.getItem('token');

export function loginUser (newuser){
if(newuser.password===""||newuser.email===""){alert(`SVP remplissez tous les champs`)}
//event.preventDefault();
console.log("we are posting ")
    /**/
    console.log(newuser);
    const request =axios.post("http://localhost:3001/signin",newuser)
    .then(response => {
     localStorage.setItem('token', response.data.token);
     localStorage.setItem('user_id', response.data.user._id);
     const history = useHistory();
      }).catch(error => {
    console.log("err",error);
  
    });
    
    return {
        type: LOGIN_USER,
        payload: request
    }
    }
    