import React from "react";
import {
  BoxItem,
  Container,
  Dot,
  Line,
  Paragraph,
  Separetor,
  SubTitle,
  Title,
} from "./styles";

const Experience = () => {
  return (
    <Container className="experience">
      <h1>Experiências</h1>

      <BoxItem>
        <div className="arrow">
          <span>2020-2022</span>
        </div>
        <Separetor>
          <Line className="line"></Line>
        </Separetor>
        <section>
          <Title>Atendente interno Call Center</Title>
          <SubTitle>Fortaleza, Ceará</SubTitle>
          <Paragraph>
            Atendimento de Cobrança e SAC Folguista de SupervisãoS
          </Paragraph>
        </section>
      </BoxItem>
      <BoxItem>
        <div className="arrow">
          <span>2016-2019</span>
        </div>
        <Separetor>
          <Line className="line"></Line>
        </Separetor>
        <section>
          <Title>Orientador de Estacionamento</Title>
          <SubTitle>Fortaleza, Ceará</SubTitle>
          <Paragraph>
            Orientação de clientes sobre o funcionamento do estacionamento;
            Promoção para Operação em Caixa e Atendimento ao público; Folguista
            de Supervisão diurno e noturno.
          </Paragraph>
        </section>
      </BoxItem>
    </Container>
  );
};

export default Experience;
