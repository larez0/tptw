import  { useEffect } from "react";

function FetchBouquets({ setBouquets }) {
  useEffect(() => {
    fetch("/api/bouquets")
      .then((res) => {
        if (!res.ok) throw new Error("erreur chargement bouquets");
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("mesBouquets", JSON.stringify(data));
        setBouquets(data);
      })
      .catch((err) => {
        console.error("FetchBouquets erreur:", err);
        const stored = localStorage.getItem("mesBouquets");
        if (stored) {
          setBouquets(JSON.parse(stored));
        }
      });
  }, [setBouquets]);

  return null;
}

export default FetchBouquets;
