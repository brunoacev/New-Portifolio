import React, { useState, useEffect } from "react";
import { MainContainer } from "./styles";
import fotoPerfil from "../../../public/images/fotoPerfil.jpeg";
import Image from "next/image";

const MainContent = () => {
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setClasses("visible");
  }, []);

  return (
    <MainContainer>
      <article>
        <p className={classes}>
          <strong>Bruno Azevedo</strong>
          <br />
          Full-Stack Javascript Developer e Entusiasta da programação!
        </p>
        <a href="/" className={classes}>
          Contato
        </a>
      </article>
      <figure className={classes}>
        <Image src={fotoPerfil} alt="Foto perfil" height="1150" />
      </figure>
    </MainContainer>
  );
};

export default MainContent;
