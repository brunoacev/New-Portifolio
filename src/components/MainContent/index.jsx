import React, { useState, useEffect } from "react";
import { MainContainer } from "./styles";
import fotoPerfil from "../../../public/images/fotoPerfil.jpeg";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

const MainContent = () => {
  return (
    <MainContainer className="mainContent">
      <article>
        <p>
          <strong>Bruno Azevedo</strong>
          <br />
          Front-End Javascript Developer
        </p>
        <a href="https://wa.me/+5585985436862" target="_blanck">
          <BsWhatsapp />
          WhatsApp
        </a>
      </article>
      <figure>
        <Image src={fotoPerfil} alt="Foto perfil" height="1150" />
      </figure>
    </MainContainer>
  );
};

export default MainContent;
