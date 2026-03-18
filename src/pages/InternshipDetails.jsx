import { useParams } from "react-router-dom";

const stagesData = {
  1: {
    title: "Stage 1: Développement Web",
    company: "Entreprise X",
    description: "Développement de fonctionnalités web et intégration.",
    technologies: "HTML, CSS, JS, React",
    images: ["stage1-1.png", "stage1-2.png"]
  },
  2: {
    title: "Stage 2: Maintenance et Support",
    company: "Entreprise Y",
    description: "Maintenance et support d'applications existantes.",
    technologies: "PHP, MySQL, React",
    images: ["stage2-1.png"]
  }
};

export default function InternshipDetails() {
  const { id } = useParams();
  const stage = stagesData[id];

  if (!stage) return <p>Stage introuvable</p>;

  return (
    <main>
      <h1>{stage.title}</h1>
      <div className="cards">
        <div className="card">
          <h3>🏢 Entreprise</h3>
          <p>{stage.company}</p>
        </div>

        <div className="card">
          <h3>📋 Description</h3>
          <p>{stage.description}</p>
        </div>

        <div className="card">
          <h3>🧰 Technologies</h3>
          <p>{stage.technologies}</p>
        </div>

        <div className="card">
          <h3>📸 Captures</h3>
          {stage.images.map((img, i) => (
            <img
              key={i}
              src={`/stage/${img}`}
              alt={`Capture ${i + 1}`}
              style={{ width: "100%", borderRadius: "8px", marginTop: "0.5rem" }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
