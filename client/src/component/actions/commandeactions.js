import axios from 'axios';
import {SEND_COMMAND} from './types';
import {useHistory} from 'react-router-dom';

export function sendcommand (command){
if(command.password===""||command.email===""){alert(`SVP remplissez tous les champs`)}
//event.preventDefault();
console.log("we are posting ")
    /**/
    console.log(command);
    const request =axios.post("/ajouter-une-commande",command)
    .then(response => {
    }).catch(error => {
    console.log("err",error);
   });
    
    return {
        type: SEND_COMMAND,
        payload: request
    }
    }
    