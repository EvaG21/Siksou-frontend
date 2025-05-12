import { useEffect, useState } from "react";

function App() {
  const [plats, setPlats] = useState([]);
  const [filtre, setFiltre] = useState("Tous");

  useEffect(() => {
    fetch("http://localhost:3000/api/plats")
      .then((res) => res.json())
      .then((data) => setPlats(data))
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  const categories = ["Tous", ...new Set(plats.map((plat) => plat.categorie))];

  const platsFiltres =
    filtre === "Tous" ? plats : plats.filter((plat) => plat.categorie === filtre);

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      {/* HEADER */}
      <header style={{ padding: "2rem", textAlign: "center", borderBottom: "1px solid #444" }}>
        <h1 style={{ color: "gold", fontSize: "3rem", marginBottom: "1rem" }}>SIKSOU</h1>
        <p style={{ color: "goldenrod", fontStyle: "italic" }}>
        plats à emporter
        </p>
        {/* Image décorative d'animaux mythologiques */}
        <img
          src="/images/griffon-dore.png"
          alt="Animal mythologique"
          style={{ marginTop: "1rem", height: "80px" }}
        />
      </header>

      {/* FILTRES */}
      <div style={{ textAlign: "center", margin: "2rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            style={{
              margin: "0.5rem",
              padding: "0.5rem 1.5rem",
              backgroundColor: filtre === cat ? "gold" : "#333",
              color: filtre === cat ? "#000" : "#fff",
              border: "1px solid gold",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LISTE DES PLATS EN CARTES */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", padding: "2rem" }}>
        {platsFiltres.map((plat) => (
          <div
            key={plat.id}
            style={{
              backgroundColor: "#111",
              border: "1px solid #444",
              borderRadius: "12px",
              width: "250px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(255, 215, 0, 0.2)",
            }}
          >
            <img
              src={plat.image}
              alt={plat.nom}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ color: "gold", marginTop: "1rem" }}>{plat.nom}</h3>
            <p style={{ fontStyle: "italic", color: "#ccc" }}>{plat.description}</p>
            <p style={{ fontWeight: "bold", color: "goldenrod" }}>{plat.prix} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
