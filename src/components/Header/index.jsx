import React from "react";
import { HeaderSection } from "./styles";
import { DiCssdeck } from "react-icons/di";
import { BsLinkedin, BsGithub, BsDropletFill } from "react-icons/bs";

const HeaderContainer = () => {
  return (
    <HeaderSection>
      <section>
        <DiCssdeck />
      </section>
      <nav>
        <a href="/">Sobre</a>
        <a href="/">Projetos</a>
        <a href="/">Contato</a>
      </nav>
      <section>
        <BsLinkedin />
        <BsGithub />
      </section>
    </HeaderSection>
  );
};

export default HeaderContainer;
