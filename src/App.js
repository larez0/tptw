import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './UI/components/Navbar';
import Home from './UI/pages/Home';
import Bouquets from './UI/pages/Bouquets';
import Fleurs from './UI/pages/Fleurs';
import MonCompte from './UI/pages/MonCompte';
import './App.css';
import FetchBouquets from './UI/components/FetchBouquets';
import Pulling from './UI/components/Pulling.js';

function App() {
    const [mesBouquets, setMesBouquets] = useState([
    // {
    //   id: 1,
    //   nom: "Bouquet de Tunis",
    //   descr: "Un dosage parfait de jasmins et de tulipes.",
    //   image: "http://localhost:5000/media/download1.png",
    //   prix: 1500,
    //   liked: false,
    // },
    // {
    //   id: 2,
    //   nom: "Bouquet d’Alger",
    //   descr: "Un mélange merveilleux de jasmins.",
    //   image: "http://localhost:5000/media/download1.png",
    //   prix: 2000,
    //   liked: false,
    // },
    // {
    //   id: 3,
    //   nom: "Bouquet d’Oran",
    //   descr: "Un mélange de roses et de lys.",
    //   image: "http://localhost:5000/media/download3.png",
    //   prix: 1800,
    //   liked: false,
    // },
  ]);
 useEffect(() => {
    const stored = localStorage.getItem("mesBouquets");
    if (stored) {
      try {
        setMesBouquets(JSON.parse(stored));
      } catch (e) {
        console.error("parse localStorage error", e);
      }
    }
  }, []);
  //synchro quand mesBouquets change
  useEffect(() => {
  

    localStorage.setItem("mesBouquets", JSON.stringify(mesBouquets));
  }, [mesBouquets]);

  const toggleLike = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/like?id=${id}`, {
        method: "GET",
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`erreur backend: ${res.status} ${txt}`);
      }

      const result = await res.json();

      if (result.success) {
        setMesBouquets((prev) =>
          prev.map((b) => (b.id === id ? { ...b, liked: !!result.liked } : b))
        );
      } else {
        console.error("backend a repondu success:false", result);
      }
    } catch (err) {
      console.error("Erreur toggleLike:", err);
    }
  };

  

  const mesFleurs = [ 
    { id: 1,
      nom: "Rose Rouge", 
      descr: "Symbole d’amour et de passion, parfaite pour toutes les occasions romantiques.", 
      image: "/media/fleur1.png", 
      prix: 300.0 
    },
    {
      id: 2, 
      nom: "Tulipe Jaune", 
      descr: "Représente la joie et la lumière, idéale pour apporter du soleil à votre journée.", 
      image: "/media/fleur.png", 
      prix: 250.0 
    }, 
    { id: 3, 
      nom: "Lys Blanc", 
      descr: "Élégant et pur, souvent offert pour exprimer le respect et la sérénité.", 
      image: "/media/fleur3.png", 
      prix: 400.0 
    }, 
    {
      id: 4, 
      nom: "Orchidée Violette", 
      descr: "Exotique et raffinée, symbole d’admiration et de beauté rare.", 
      image: "/media/fleur4.png", 
      prix: 750.0 
    }, 
    { 
      id: 5, 
      nom: "Pivoine Rose", 
      descr: "Fleur généreuse et romantique, parfaite pour un geste tendre.", 
      image: "/media/fleur1.png", 
      prix: 600.0 
    }, 
    { 
      id: 6, 
      nom: "Gerbera Orange", 
      descr: "Fleur vive et joyeuse, symbole d’énergie et de positivité.", 
      image: "/media/fleur.png", 
      prix: 280.0 
    }, { 
      id: 7, 
      nom: "Tournesol", 
      descr: "Rayon de soleil dans un vase, incarne la chaleur et la vitalité.", 
      image: "/media/fleur3.png", 
      prix: 350.0 
    },
     { 
      id: 8, 
      nom: "Camélia Blanc", 
      descr: "Synonyme d’élégance et de perfection, fleur délicate au charme intemporel.", 
      image: "/media/fleur4.png", 
      prix: 500.0 
    }, 
  ];

  
  
  return (
    <Router>
      <Navbar />
      <Pulling />
      <FetchBouquets setBouquets={setMesBouquets} />
      <div className="container-fluid p-0 m-0">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/bouquets"
            element={<Bouquets bouquets={mesBouquets} toggleLike={toggleLike} />}
          />
          <Route path="/fleurs" element={<Fleurs fleurs={mesFleurs} />} />
          <Route path="/moncompte" element={<MonCompte />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
