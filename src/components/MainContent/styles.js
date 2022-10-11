import styled from "styled-components";

export const MainContainer = styled.section`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    border: 3px solid #fac86b;
    border-radius: 7px;
    padding: 10px 20px;
    color: #fac86b;
    margin-top: 20px;
    transition: all 0.5s linear;
    position: relative;
    bottom: -50px;

    svg {
      margin-right: 5px;
    }
  }

  p {
    color: ${({ theme }) => theme.textColorDefault};
    font-size: 2rem;

    strong {
      color: #fac86b;
      font-family: "Source Serif Pro", serif;
      font-size: 3rem;
      font-weight: 400;
      line-height: 2.6rem;
    }
  }

  figure {
    max-width: 300px;
    opacity: 0.8;
    transition: all 0.5s linear;

    img {
      border-radius: 7px;
    }
  }
`;
