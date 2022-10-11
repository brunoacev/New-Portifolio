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
          <span>2022</span>
        </div>
        <Separetor>
          <Line className="line"></Line>
        </Separetor>
        <section>
          <Title>Junior Javascrip Developer</Title>
          <SubTitle>Fortaleza, Ceará</SubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            corporis dicta asperiores distinctio placeat minima, assumenda
            recusandae nam aut dolore non vero totam unde consectetur
            exercitationem quam laborum perspiciatis iste!
          </Paragraph>
        </section>
      </BoxItem>
      <BoxItem>
        <div className="arrow">
          <span>2022</span>
        </div>
        <Separetor>
          <Line className="line"></Line>
        </Separetor>
        <section>
          <Title>Junior Javascrip Developer</Title>
          <SubTitle>Fortaleza, Ceará</SubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
            corporis dicta asperiores distinctio placeat minima, assumenda
            recusandae nam aut dolore non vero totam unde consectetur
            exercitationem quam laborum perspiciatis iste!
          </Paragraph>
        </section>
      </BoxItem>
    </Container>
  );
};

export default Experience;
