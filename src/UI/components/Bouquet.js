import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleLike } from "../../redux/bouquetSlice";
import { myFetch } from "../../comm/myFetch";

function Bouquet({ bouquet }) {
  const dispatch = useDispatch();
  const handleLike = async () => {
  try {
    const res = await myFetch(`/like?id=${bouquet.id}`);
    const data = await res.json();
    if (data.success) {
      dispatch(toggleLike({ id: bouquet.id, likes: data.likes }));
    }
  } catch (err) {
    console.error("Erreur like :", err);
  }
};

  return (
    <div className="card rounded-4 text-center card-bouquet">
      <img
        src={bouquet.image}
        className="card-img-top couverture rounded-top-4"
        alt={bouquet.nom}
      />
      <div className="card-body">
        <h5 className="card-title text-pink">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="fw-bold text-secondary prix-style">{bouquet.prix} DA</p>
        <p className="fw-bold text-secondary">Likes: {bouquet.likes}</p>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button className="btn">Voir plus</button>
          <button
            className="btn border-0 bg-transparent p-0"
            onClick={handleLike}
          >
            {bouquet.liked ? (
              <FaHeart color="rgb(211, 59, 122)" size={24} />
            ) : (
              <FaRegHeart color="rgb(211, 59, 122)" size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bouquet;
