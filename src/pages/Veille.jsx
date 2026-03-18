import { useContext } from "react";
import { LanguageContext } from "../language/LanguageContext";

export default function Veille() {
  const { lang } = useContext(LanguageContext);

  return (
    <main>
      <h1>{lang === "fr" ? "Veille technologique" : "Technology Watch"}</h1>
      
      <h2>
        {lang === "fr" 
          ? "Pourquoi React reste-t-il un choix pertinent pour le développement web moderne en 2026 ?" 
          : "Why is React still a relevant choice for modern web development in 2026?"}
      </h2>

      <p>
        {lang === "fr"
          ? "Ma veille technologique me permet de rester informé des évolutions du développement web, notamment sur les technologies que j’utilise ou que j’apprends."
          : "My technology watch helps me stay informed about web development trends, especially the technologies I use or am learning."}
      </p>

      <div className="cards">
        {/* REACT */}
        <div className="card">
          <h3>⚛️ React</h3>
          <p>
            {lang === "fr"
              ? "Framework JavaScript pour créer des interfaces utilisateur modernes."
              : "JavaScript library for building modern user interfaces."}
          </p>
          <ul>
            <li>
              <a href="https://react.dev/blog" target="_blank">React Official Blog</a>
            </li>
            <li>
              <a href="https://react.statuscode.com/" target="_blank">React Newsletter</a>
            </li>
            <li>
              <a href="https://github.com/facebook/react/releases" target="_blank">
                GitHub Releases
              </a>
            </li>
          </ul>
        </div>

        {/* NODE */}
        <div className="card">
          <h3>🟢 Node.js</h3>
          <p>
            {lang === "fr"
              ? "Environnement d’exécution JavaScript côté serveur."
              : "JavaScript runtime for server-side development."}
          </p>
          <ul>
            <li>
              <a href="https://nodejs.org/en/blog" target="_blank">Node.js Blog</a>
            </li>
            <li>
              <a href="https://nodeweekly.com/" target="_blank">Node Weekly</a>
            </li>
            <li>
              <a href="https://github.com/nodejs/node/releases" target="_blank">
                GitHub Releases
              </a>
            </li>
          </ul>
        </div>
              {/*npm run dev*/}
        {/* Other links */}
        <div className="card">
          <h3>🧠 Other Links</h3>
          <p>
            {lang === "fr"
              ? "Il n'y a pas que les sites web officiels qui permettent de rester informé."
              : "Not only official Websites can help to stay up to date."}
          </p>
          <ul>
            <li>
              <a href="https://dev.to/t/react" target="_blank">Dev Community</a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/react/comments/1qhxc46/does_react_still_feel_future_proof_in_2026_or_is/" target="_blank">Reddit</a>
            </li>
            <li>
              <a href="https://thehackernews.com/search/label/node.js?m=1" target="_blank">
                The Hacker News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
