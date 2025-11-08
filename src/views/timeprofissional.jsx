import "./css/timeprofissional.css";
import React, { useState } from "react";


const TeamSection = () => {
  const [active, setActive] = useState("Goleiros");

  const categorias = [
    "Goleiros",
    "Zagueiros",
    "Laterais Esquerdos",
    "Laterais Direitos",
    "Meio Campistas",
    "Volantes",
    "Atacantes",
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">
        NOSSO TIME <span className="team-line"></span>
      </h2>
      <div className="button-group">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`team-button ${active === categoria ? "active" : ""}`}
            onClick={() => setActive(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </section>
  );
};

import "./css/timeprofissional.css";

const TeamSection2 = () => {
  const [active, setActive] = useState("Goleiros");

  // Dados de exemplo dos jogadores
  const jogadores = {
    Goleiros: [
      { nome: "Gabriel Brazão", posicao: "Goleiro", foto: "brazao santos.jpg" },
      { nome: "Pedro Lima", posicao: "Goleiro", foto: "" },
    ],
    Zagueiros: [
      { nome: "Carlos Souza", posicao: "Zagueiro", foto: "" },
      { nome: "Rafael Santos", posicao: "Zagueiro", foto: "" },
    ],
    "Laterais Esquerdos": [
      { nome: "Lucas Mendes", posicao: "Lateral Esquerdo", foto: "" },
    ],
    "Laterais Direitos": [
      { nome: "Thiago Oliveira", posicao: "Lateral Direito", foto: "" },
    ],
    "Meio Campistas": [
      { nome: "André Costa", posicao: "Meio Campista", foto: "" },
      { nome: "Bruno Rocha", posicao: "Meio Campista", foto: "" },
    ],
    Volantes: [
      { nome: "Gabriel Alves", posicao: "Volante", foto: "" },
    ],
    Atacantes: [
      { nome: "Felipe Moraes", posicao: "Atacante", foto: "" },
      { nome: "Rony Silva", posicao: "Atacante", foto: "" },
    ],
  };

  const categorias = Object.keys(jogadores);

  return (
    <section className="team-section">
      <h2 className="team-title">
        NOSSO TIME <span className="team-line"></span>
      </h2>

      {/* Botões de categoria */}
      <div className="button-group">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`team-button ${active === categoria ? "active" : ""}`}
            onClick={() => setActive(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Cards de jogadores */}
      <div className="cards-container">
        {jogadores[active].map((jogador, index) => (
          <div key={index} className="player-card">
            <img src={jogador.foto} alt={jogador.nome} className="player-image" />
            <h3 className="player-name">{jogador.nome}</h3>
            <p className="player-position">{jogador.posicao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;