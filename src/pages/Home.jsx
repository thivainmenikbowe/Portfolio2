import { useContext } from "react";
import { LanguageContext } from "../language/LanguageContext";

export default function Home() {
  const { lang } = useContext(LanguageContext);

  return (
    <main>
      <h1>
        {lang === "fr"
          ? "Bienvenue sur mon portfolio"
          : "Welcome to my portfolio"}
      </h1>

      <p>
        {lang === "fr" ? (
          <>
            Je suis étudiant en <strong>1ère année de BTS SIO</strong>, option{" "}
            <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers).
            J’apprends à créer des sites web depuis zéro et à utiliser différentes
            technologies du web pour les rendre fonctionnels et agréables à
            utiliser.
          </>
        ) : (
          <>
            I’m a first-year student in <strong>BTS SIO</strong>, specialized in{" "}
            <strong>SLAM</strong> (Software Solutions and Applications). I'm
            learning how to create websites from scratch and how to use different
            web technologies to make them functional and user-friendly.
          </>
        )}
      </p>

      <p>
        {lang === "fr" ? (
          <>
            Pour l’instant, j’ai travaillé avec{" "}
            <strong>HTML, CSS, PHP, JS, JAVA, MySQL</strong>, et je commence à comprendre
            comment le front-end et le back-end interagissent. J’aime construire
            des petits projets et voir mon code prendre vie à l’écran.
          </>
        ) : (
          <>
            So far, I’ve worked with{" "}
            <strong>HTML, CSS, PHP, JS, JAVA, MySQL</strong>, and I’m starting to
            understand how the back-end and front-end work together. I enjoy
            building simple projects and seeing how my code turns into something
            real.
          </>
        )}
      </p>

      <p>
        {lang === "fr"
          ? "Je suis curieux, motivé, et j’essaie toujours de progresser en testant des idées et en apprenant de mes erreurs."
          : "I’m curious, motivated, and always trying to improve by testing new ideas and learning from my mistakes."}
      </p>

      <div className="cards">
        <div className="card">
          <h3>💻 {lang === "fr" ? "Développement Web" : "Web Development"}</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="card">
          <h3>🎓 BTS SLAM</h3>
          <p>
            {lang === "fr"
              ? "Solutions Logicielles et Applications Métiers"
              : "Software Solutions and Applications"}
          </p>
        </div>

        <div className="card">
          <h3>🚀 {lang === "fr" ? "Objectif" : "Goal"}</h3>
          <p>
            {lang === "fr"
              ? "Devenir développeur web fullstack"
              : "Become a fullstack web developer"}
          </p>
        </div>
      </div>
    </main>
  );
}
