import { useEffect } from "react";
import { myFetch } from "../../comm/myFetch";

function Pulling() {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await myFetch("/api/request-count");
        const data = await res.json();
        console.log("Nombre de requêtes:", data.count);
      } catch (err) {
        console.error("Erreur pulling:", err);
      }
    }, 60000); 

    return () => clearInterval(interval); // cleanup
  }, []);

  return null; 
}

export default Pulling;
