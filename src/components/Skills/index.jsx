import React from "react";
import Image from "next/image";
import { SkillsSection } from "./styles";
import javascript from "../../../public/images/javascript.svg";
import css3 from "../../../public/images/css3.svg";
import git from "../../../public/images/git.svg";
import html5 from "../../../public/images/html5.svg";
import github from "../../../public/images/github.svg";
import mongodb from "../../../public/images/mongodb.svg";
import mui4 from "../../../public/images/mui4.svg";
import next from "../../../public/images/next.svg";
import mysql from "../../../public/images/mysql.svg";
import node from "../../../public/images/node.svg";
import react from "../../../public/images/react.svg";
import sass from "../../../public/images/sass.svg";
import postgres from "../../../public/images/postgres.png";
import sql from "../../../public/images/sql.png";

const Skills = () => {
  return (
    <SkillsSection className="skills">
      <h1>Skills</h1>
      <ul>
        <li>
          <Image src={javascript} alt="Logo Javascript" />
          Javascript
        </li>
        <li>
          <Image src={css3} alt="Logo CSS3" />
          CSS3
        </li>
        <li>
          <Image src={git} alt="Logo Git" />
          Git
        </li>
        <li>
          <Image src={html5} alt="Logo HTML5" />
          HTML5
        </li>
        <li>
          <Image src={github} alt="Logo Github" />
          GitHub
        </li>
        <li>
          <Image src={mongodb} alt="Logo MongoDB" />
          MongoDB
        </li>
        <li>
          <Image src={mui4} alt="Logo Material UI" />
          Material UI 4
        </li>
        <li>
          <Image src={next} alt="Logo Next" />
          Next.Js
        </li>
        <li>
          <Image src={mysql} alt="Logo MySql" />
          MySQL
        </li>
        <li>
          <Image src={node} alt="Logo Node" />
          Node.Js
        </li>
        <li>
          <Image src={react} alt="Logo React" />
          React.Js
        </li>
        <li>
          <Image src={sass} alt="Logo Sass" />
          SasS
        </li>
        <li>
          <Image src={postgres} alt="Logo Postgres" />
          PostgreSQL
        </li>
        <li>
          <Image src={sql} alt="Logo SQL" />
          SQL
        </li>
      </ul>
    </SkillsSection>
  );
};

export default Skills;
