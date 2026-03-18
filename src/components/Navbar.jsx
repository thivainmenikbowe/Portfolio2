import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../language/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <nav>
      <Link to="/">{lang === "fr" ? "Accueil" : "Home"}</Link>
      <Link to="/internship">{lang === "fr" ? "Stage" : "Internship"}</Link>
      <Link to="/projects">{lang === "fr" ? "Projets" : "Projects"}</Link>
      <Link to="/veille">{lang === "fr" ? "Veille" : "Tech Watch"}</Link>
      <button onClick={toggleLang}>{lang === "fr" ? "EN" : "FR"}</button>
    </nav>
  );
}
