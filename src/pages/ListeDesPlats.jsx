import { useEffect, useState } from "react";

function ListeDesPlats() {
  const [plats, setPlats] = useState([]);
  const [filtre, setFiltre] = useState("Tous");

  useEffect(() => {
    fetch("http://localhost:3000/api/plats")
      .then((res) => res.json())
      .then((data) => {
        console.log("Plats récupérés :", data);
        setPlats(data);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, []);
  

  const categories = ["Tous", ...new Set(plats.map((plat) => plat.categorie))];
  const platsFiltres =
    filtre === "Tous"
      ? plats
      : plats.filter((plat) => plat.categorie === filtre);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Titre & introduction */}
      <h1 style={{ color: "gold", textAlign: "center", marginBottom: "0.5rem", fontSize: "2.5rem" }}>
        Nos Spécialités
      </h1>
      <p style={{ color: "#ccc", textAlign: "center", fontStyle: "italic", maxWidth: "700px", margin: "0 auto 2rem" }}>
        Découvrez nos plats savoureux, inspirés de la mythologie grecque et des saveurs méditerranéennes. 
        Chaque spécialité est préparée avec soin pour une expérience gustative inoubliable.
      </p>

      {/* Filtres */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            style={{
              margin: "0.5rem",
              padding: "0.6rem 1.6rem",
              backgroundColor: filtre === cat ? "gold" : "#222",
              color: filtre === cat ? "#000" : "#fff",
              border: "1px solid gold",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Liste des plats */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
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
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.1)",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={`/images/${plat.image}`}
              alt={plat.nom}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "gold", marginTop: "1rem", fontSize: "1.3rem" }}>{plat.nom}</h3>
            <p style={{ fontStyle: "italic", color: "#ccc", marginBottom: "0.5rem" }}>
              {plat.description}
            </p>
            <p style={{ fontWeight: "bold", color: "goldenrod", fontSize: "1.1rem" }}>
              {plat.prix} €
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListeDesPlats;
