const express = require("express");
const cors = require("cors");
const app = express();
app.use("/media", express.static("public/media"));

app.use(cors());
app.use(express.json());
let requestCount = 0;

// Middleware pour compter chaque requête
app.use((req, res, next) => {
  requestCount++;
  next();
});

// Route pour récupérer le compteur
app.get("/api/request-count", (req, res) => {
  res.json({ count: requestCount });
});

// Réinitialisation du compteur chaque minute
setInterval(() => {
  console.log("Requêtes reçues cette minute :", requestCount);
  requestCount = 0;
}, 60000);


const bouquets = [
  {
    id: 1,
    nom: "Bouquet de Tunis",
    descr: "Jasmins et tulipes, du soleil toute l’année.",
    image: "http://localhost:5000/media/download1.png",
    prix: 1500,
    liked: false,
    likes:0
  },
  {
    id: 2,
    nom: "Bouquet d’Alger",
    descr: "Jasmins et senteurs méditerranéennes.",
    image: "http://localhost:5000/media/download2.png",
    prix: 2000,
    liked: false,
    likes:5
  },
  {
    id: 3,
    nom: "Bouquet d’Oran",
    descr: "Mélange merveilleux de roses et de lys.",
    image: "http://localhost:5000/media/download3.png",
    prix: 1800,
    liked: false,
    likes:0
  },
  {
    id: 4,
    nom: "Bouquet de Tunis",
    descr: "Jasmins et tulipes, du soleil toute l’année.",
    image: "http://localhost:5000/media/download1.png",
    prix: 1500,
    liked: false,
    likes:0
  },
];

app.get("/api/bouquets", (req, res) => {
 res.json(bouquets);
});
app.get("/like", (req, res) => {
  const id = parseInt(req.query.id, 10);
  const b = bouquets.find((x) => x.id === id);
  if (!b) return res.status(404).json({ success: false, message: "Bouquet non trouvé" });

  b.liked = !b.liked;
  b.likes = b.liked ? b.likes + 1 : b.likes - 1;

  res.json({ success: true, id: b.id, likes: b.likes });

  
  
});

const PORT = 5000;
app.listen(PORT, () => console.log(`server sur http://localhost:${PORT}`));
