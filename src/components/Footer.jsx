function Footer() {
    return (
      <footer style={{
        backgroundColor: "#000",
        color: "#FFD700",
        padding: "2rem 1rem",
        textAlign: "center",
        borderTop: "1px solid #444",
        marginTop: "3rem"
      }}>
        <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
          Livraison disponible sur :
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1rem" }}>
          <img src="/logoDeliveroo.png" alt="Deliveroo" style={{ height: "40px" }} />
          <img src="/logoUber.png" alt="Uber Eats" style={{ height: "40px" }} />
          <img src="/just-eat.png" alt="Just Eat" style={{ height: "40px" }} />
        </div>
  
        <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
          &copy; {new Date().getFullYear()} SIKSOU. Tous droits réservés.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  