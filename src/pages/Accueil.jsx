function Accueil() {
  
    return (
      <div style={{ backgroundColor: "#111", color: "#fff", minHeight: "100vh", fontFamily: "Georgia, serif", textAlign: "center", padding: "2rem" }}>
      
  
        {/* Galerie d'images */}
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem" }}>
          <img src="/images/fruits.jpg" alt="Fruits" style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "12px" }} />
          <img src="/images/couscous.png" alt="Couscous" style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "12px" }} />
          <img src="/images/jus.png" alt="Jus" style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "12px" }} />
        </div>
  
        <p style={{ color: "#F4A460", fontSize: "1.2rem", marginBottom: "3rem" }}>
          BAR À FRUITS, COUSCOUS, JUS DE FRUITS FRAIS
        </p>
  
        {/* Logos livraison */}
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem" }}>
          <img src="/logoDeliveroo.png" alt="Deliveroo" style={{ height: "50px" }} />
          <img src="/logoUber.png" alt="Uber Eats" style={{ height: "50px" }} />
          <img src="/just-eat.png" alt="Just Eat" style={{ height: "50px" }} />
        </div>
      </div>
    );
  }
  
  export default Accueil;
  