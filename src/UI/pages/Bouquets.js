//useSelector est une fonction de selection, un hook react-redu xqui permet d'acceder a une partie du store
//useDispatch est un hook react-redux qui permet d'envoyer des actions au store

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBouquets, toggleLike } from "../../redux/bouquetSlice";
import { myFetch } from "../../comm/myFetch";
import Bouquet from "../components/Bouquet";


function Bouquets() {
  const bouquets = useSelector((state) => state.bouquets.list);
  const dispatch = useDispatch();

useEffect(() => {
  const loadBouquets = async () => {
    const res = await myFetch("/api/bouquets");
    const data = await res.json();
    dispatch(setBouquets(data));
  };
  loadBouquets();

  
  const interval = setInterval(async () => {
    try {
      const res = await myFetch("/api/bouquets");
      const data = await res.json();
      dispatch(setBouquets(data)); // ou updateLikes si tu veux juste les likes
    } catch (err) {
      console.error("Erreur fetch interval:", err);
    }
  }, 1000);

  // cleanup
  return () => clearInterval(interval);
}, [dispatch]);
  return (
    <div>
      <h3 className="text-pink m-4 mb-1">Nos Bouquets</h3>
      <div className="row g-4 p-4">
        {bouquets.map((bq) => (
          <div key={bq.id} className="col-md-4 col-lg-3 col-sm-6">
            <Bouquet bouquet={bq} onLike={() => dispatch(toggleLike(bq.id))} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bouquets;
