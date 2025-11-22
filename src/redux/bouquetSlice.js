//on cree un slice si l'etat est partage entre plusieurs composants

import { createSlice } from "@reduxjs/toolkit";

const bouquetSlice = createSlice({
  name: "bouquets",
  initialState: {
    list: [], 
  },
  reducers: {
    setBouquets: (state, action) => {
      state.list = action.payload.map(b => ({
    ...b,
    likes: b.likes || 0,  
    liked: b.liked || false
        }));    },
    toggleLike: (state, action) => {
    const { id, likes } = action.payload; 
    const b = state.list.find((x) => x.id === id);
    if (b) {
      b.liked = !b.liked; 
      b.likes = likes;     
  }
},
 updateLikes: (state, action) => {
    action.payload.forEach((update) => {
    const b = state.list.find((x) => x.id === update.id);
    if (b) b.likes = update.likes;
  });
}
    },
  },
  
);

export const { setBouquets, toggleLike ,updateLikes} = bouquetSlice.actions;
export default bouquetSlice.reducer;
