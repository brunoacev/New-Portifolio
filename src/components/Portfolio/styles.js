import styled from "styled-components";

export const Container = styled.section`
  color: ${({ theme }) => theme.textColorDefault};
  margin: 100px auto;
  max-width: 780px;

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
      height: 200px;
      list-style-type: none;
      border-radius: 10px;
      background-color: #3d3e42;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      p {
        background-color: #3d3e42;
        text-align: center;
        color: ${({ theme }) => theme.textColorDefault};
        margin-top: 10px;
      }

      a {
        border: 3px solid #fac86b;
        border-radius: 7px;
        padding: 8px 20px;
        color: #fac86b;
        display: inline-block;

        cursor: pointer;
      }
    }
  }

  svg {
    width: 70px;
    height: 70px;
    background-color: #3d3e42;
  }
`;
