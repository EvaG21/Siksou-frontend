import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#111", color: "#FFA500", padding: "2rem", borderBottom: "1px solid #333", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", margin: "1rem 0 0.5rem" }}>SIKSOU</h1>
      <div style={{backgroundColor:"gold", textAlign:"center", borderRadius:"50%", padding:"1rem", width:"150px", height:"150px", margin:"auto"}}>

      <img src="/SingeCouleur.png" alt="Logo SIKSOU" style={{ width: "180%", borderRadius:"50%", height:'150px', margin:"auto"}} />
      </div>
      <p style={{ fontStyle: "italic", letterSpacing: "1px" }}>DÉCOUVREZ DE NOUVELLES SAVEURS.</p>

      <nav style={{ marginTop: "1.5rem" }}>
        <Link to="/" style={{ margin: "0 1rem", color: "#FFA500", textDecoration: "none" }}>Accueil</Link>
        <Link to="/plats" style={{ margin: "0 1rem", color: "#FFA500", textDecoration: "none" }}>Nos plats</Link>
        <Link to="/contact" style={{ margin: "0 1rem", color: "#FFA500", textDecoration: "none" }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
