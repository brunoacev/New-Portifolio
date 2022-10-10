import styled from "styled-components";

export const SkillsSection = styled.section`
  color: ${({ theme }) => theme.textColorDefault};
  margin: 0 auto;
  max-width: 780px;
  margin-bottom: 130px;

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    font-family: "Source Serif Pro", serif;
    margin-bottom: 20px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 20px;

    li {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      max-width: 200px;
      height: 150px;
      list-style-type: none;
      border-radius: 10px;
      background-color: #3d3e42;

      img {
        display: block;
        background-color: #3d3e42;
      }
    }
  }
`;
