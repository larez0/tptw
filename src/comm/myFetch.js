//axios est une bibliotheque qui facilite les requetes http par rapport a fetch
//axios n'est pas une api native du navigateur contrairement a fetch
//ici on a creer une fonction myFetch qui utilise soit fetch sois axios qui construit la requete http en fonction d'une config
import axios from "axios";
import config from "../config/config";
console.log("BACKEND_URL:", config.BACKEND_URL)

export async function myFetch(url, options = {}) { 
  const  fullUrl = `${config.BACKEND_URL.replace(/\/$/, "")}${url}`;
    if (config.USE_AXIOS) {
        const axiosOptions = {
            method: options.method || 'GET',
            url: fullUrl,
            headers: options.headers || {},
            data: options.body || null,
        };
        const response = await axios(axiosOptions);
        return {
            ok: response.status >= 200 && response.status < 300,
            status: response.status,            
            json: async () => response.data,
        };
    } else {
        return fetch(fullUrl, options);
    }
    

}