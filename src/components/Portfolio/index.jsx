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
          <p>
            CRUD
            <br />
            Autêntificação de usuários
          </p>
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
          <p>
            Portfólio
            <br />
            Projeto responsivo
          </p>
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
            Projeto para fins didaticos
          </p>
          <SiNextdotjs />
          <a
            href="https://github.com/brunoacev/MF-Digital"
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
            Projeto para fins didaticos
          </p>
          <SiNextdotjs />
          <a
            href="https://github.com/brunoacev/MF-Digital"
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
            Projeto para fins didaticos
          </p>
          <SiNextdotjs />
          <a
            href="https://github.com/brunoacev/MF-Digital"
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
            Projeto para fins didaticos
          </p>
          <SiNextdotjs />
          <a
            href="https://github.com/brunoacev/MF-Digital"
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
