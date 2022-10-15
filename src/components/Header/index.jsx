import React from "react";
import { HeaderSection } from "./styles";
import { DiCssdeck } from "react-icons/di";
import { BsLinkedin, BsGithub, BsDropletFill } from "react-icons/bs";
import Link from "next/link";

const HeaderContainer = () => {
  return (
    <HeaderSection className="header">
      <section className="logo">
        <DiCssdeck />
      </section>
      {/* <nav>
        <Link href="#contact" scroll={true}>
          <a>Contato</a>
        </Link>
        <a href="#about">Sobre</a>
        <a href="#portfolio">Projetos</a>
      </nav> */}
      <section className="icons">
        <a
          href="http://github.com/brunoacev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/bruno-azevedo-02736bb2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </section>
    </HeaderSection>
  );
};

export default HeaderContainer;
