//ici on utilise la fonction myFetch pour recuperer les bouquets depuis le backend en utilisant soit fetch soit axios selon la config
import { myFetch } from "../comm/myFetch.js";

export async function getBouquets() {
  const response = await myFetch("/api/bouquets");
  const data = await response.json();
  return data;
}
                 