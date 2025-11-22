import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleBouquetsClick = () => {
    navigate("/bouquets");
  }
  return (
    <div>
    
    <section className="hero-section">
        <video autoPlay loop muted playsInline>
          <source src="/media/flowervdo.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="display-2 font-marck text-success mb-3">Arezki's flowers</h1>
          <p className="lead bg-opacity-75 text-white d-inline-block rounded-3 p-3">
            Chez <span className="fw-bold text-success">Arezki's flowers</span>, chaque bouquet est une promesse de tendresse.<br />
            Livraison partout en Algérie — même le jour même.<br />
            Mariages, événements, surprises : chaque fleur raconte une histoire.
          </p><br />
          <button className="btn btn-pink btn-lg bg-pink text-white mt-3" onClick={handleBouquetsClick}>
            Découvrir nos bouquets
          </button>
        </div>
      </section>

     
      <h2 className="text-pink m-4">Nos Bouquets de Fleurs</h2>
      <div className="container my-3">
        <div className="row g-4">
          {[
            { img: "/media/download3.png", title: "Tulipes", desc: "Un bouquet frais et lumineux" },
            { img: "/media/download1.png", title: "Roses", desc: "La douceur classique de l’amour" },
            { img: "/media/download2.png", title: "Roses", desc: "La douceur classique de l’amour" },
            { img: "/media/download1.png", title: "Orchidées", desc: "Élégantes et rares, pour une touche exotique" },
          ].map((bouquet, index) => (
            <div key={index} className="col-md-3">
              <div className="card shadow-sm rounded-4">
                <img
                  src={bouquet.img}
                  className="card-img-top couverture rounded-top-4"
                  alt={bouquet.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{bouquet.title}</h5>
                  <p className="card-text">{bouquet.desc}</p>
                  <button className="btn bg-pink text-white">Voir plus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="container my-5">
        <div className="p-5 bg-light rounded-3 shadow text-center">
          <h2 className="font-marck text-pink mb-3">À propos de Fleuria</h2>
          <p className="lead text-muted">
            Notre atelier livre vos créations florales partout en Algérie, avec la possibilité d’une livraison le jour même.  
            Nous réalisons aussi des décorations sur mesure pour vos mariages, événements ou célébrations spéciales.
          </p>
        </div>
      </div>

     
      <footer className="bg-pink text-white text-center py-4">
        <p className="mb-1">&copy; 2025 arezki' flowres — Tous droits réservés.</p>
        <p className="mb-0">
          {/* <a href="#" className="text-white text-decoration-underline">Conditions d’utilisation</a> |
          <a href="#" className="text-white text-decoration-underline">Confidentialité</a> */}
        </p>
      </footer>
    </div>
  );
}

export default Home;
