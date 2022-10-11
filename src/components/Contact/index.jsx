import React from "react";
import { Box, Container } from "./styles";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <Container className="contact">
      <h1>Contato</h1>
      <div>
        <Box>
          <BsEnvelopeFill />
          <a href="mailto:brunoacev.gmail.com">brunoacev@gmail.com</a>
        </Box>
        <Box>
          <BsFillTelephoneFill />
          <a href="tel:+5585985436862">+55 (85) 98543-6862</a>
        </Box>
        <Box>
          <MdLocationOn />
          <a
            href="https://www.google.com.br/maps/place/Fortaleza+-+CE/@-3.792584,-38.7998052,10z/data=!4m5!3m4!1s0x7c74c3f464c783f:0x4661c60a0c6b37ca!8m2!3d-3.7327203!4d-38.5270134"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fortaleza, Ceará
          </a>
        </Box>
      </div>
    </Container>
  );
};

export default Contact;
