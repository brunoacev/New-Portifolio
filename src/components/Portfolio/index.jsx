import React from "react";
import { Container } from "./styles";
import { FaNode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Portfolio = () => {
  return (
    <Container className="portfolio">
      <h1>Portfólio</h1>
      <ul>
        <li>
          <p>CRUD de usuários</p>
          <FaNode />
          <a
            href="https://github.com/brunoacev/CRUD-NodeJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar
          </a>
        </li>
        <li>
          <p>Portfólio Responsivo</p>
          <SiNextdotjs />
          <a
            href="https://github.com/brunoacev/New-Portifolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar
          </a>
        </li>
        <li>
          <p>
            MF Digital
            <br />
          </p>
          <SiNextdotjs />
          <a
            href="https://github.com/brunoacev/Projeto-MF-Digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Portfolio;
