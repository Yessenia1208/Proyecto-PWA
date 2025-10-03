import React from "react";
import logo from "/icons/LOGO.png";
import "./homeScreen.css";

export default function HomeScreen() {

  const cards = [
    {
      title: "Explora",
      description:
        "Descubre nuevas publicaciones, artículos y contenidos interesantes para mantenerte al día.",
    },
    {
      title: "Comparte",
      description:
        "Publica tus ideas, recursos o experiencias y haz crecer la comunidad.",
    },
    {
      title: "Conecta",
      description:
        "Interactúa con otros usuarios y forma parte de una comunidad activa.",
    },
  ];

  const Card = ({ image, title, description, buttonText }) => (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="Logo" className="home-logo" />
        <p className="subtitle"> Tu comunidad digital para descubrir, compartir y conectar</p>
      </header>

      <main className="home-body">
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>

      <footer className="home-footer">
        <p>© 2025 Cristal. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
