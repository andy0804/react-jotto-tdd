import axios from "axios";
export const getSecretWord  = (setSecretWord) => {

    return new Promise((resolve,reject)=>{
        resolve('party');
        setSecretWord('party')
    })

}