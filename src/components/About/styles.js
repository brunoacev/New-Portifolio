import styled from "styled-components";

export const AboutContainer = styled.section`
  margin: 0 auto;
  max-width: 780px;
  background-color: ${({ theme }) => theme.bgColorSecondary};
  margin-top: 80px;
  margin-bottom: 100px;

  h1,
  p {
    color: ${({ theme }) => theme.textColorDefault};
  }

  p {
    margin: 20px;
    padding-left: 60px;
    line-height: 1.6rem;
    font-size: 1.2rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    font-family: "Source Serif Pro", serif;
    margin-left: 20px;
  }

  p::before {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background-color: gold;
    margin-left: -60px;
    position: relative;
    top: 14px;
  }
`;
