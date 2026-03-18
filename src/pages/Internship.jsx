import { Link } from "react-router-dom";

export default function Internship() {
  return (
    <main>
      <h1>Stage</h1>
      <p>Voici mes stages réalisés pendant le BTS SLAM :</p>

      <div className="cards">
        {/* Stage 1 */}
        <div className="card">
          <h3>Stage 1: Développement Web</h3>
          <p>Stage en entreprise X, développement de fonctionnalités web.</p>
          <Link to="/internship/details/1" style={{ color: "#38bdf8" }}>
            👉 Voir le détail
          </Link>
        </div>

        {/* Stage 2 */}
        <div className="card">
          <h3>Stage 2: Maintenance et Support</h3>
          <p>Stage en entreprise Y, maintenance et support d'applications.</p>
          <Link to="/internship/details/2" style={{ color: "#38bdf8" }}>
            👉 Voir le détail
          </Link>
        </div>
      </div>
    </main>
  );
}
