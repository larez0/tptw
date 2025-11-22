//l'etat local est propre a un composant tnadis  que l'etat global est paratge entre plusieurs composants
//pour l'etat local on utlise useState ou useReducer
//pour l'etat global on utilise redux ou context api de react
//etat local on passe les donnees en props aux composants enfants
//etat global on utilise un store redux ou un context react pour partager les donnees entre plusieurs composants sans passer par les props
//Redux cree un store global qui contient tout l’etat important de ton app

import { configureStore } from "@reduxjs/toolkit";
import bouquetReducer from "../redux/bouquetSlice";

const store = configureStore({
  reducer: {
    bouquets: bouquetReducer,
  },
});

export default store;
