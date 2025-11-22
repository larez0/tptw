import React from "react";

function Fleur({fleur}){
    return (
        <div className="card rounded-4 text center card-bouquet">
            <img className="card-img-top couverture rounded-top-4"
            src={fleur.image}
            alt={fleur.nom}></img>
            <div className="card-body">
                <h5 className="card-title text-pink">{fleur.nom}</h5>
                <p className="card-text"> {fleur.descr}</p>
                <p className="fw-bold text-secondary prix-style align-self-center">{fleur.prix} DA</p>
                <button className="btn bg-pink text-white">Voir plus</button>
            </div>
        </div>

    );
}
export default Fleur;