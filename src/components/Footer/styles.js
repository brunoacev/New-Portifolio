import styled from "styled-components";

export const Container = styled.section`
  border-top: 2px solid #fac86b;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.textColorDefault};
    font-size: 2rem;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 600;
    font-family: "Source Serif Pro", serif;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.textColorDefault};
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 20px;
    font-family: "Source Serif Pro", serif;
  }

  // Iphone SE
  @media (max-width: 375px) {
    position: relative;
    right: -150px;
    margin-bottom: 50px;
  }

  //Iphone 12 Pro
  @media (max-width: 390px) {
    position: relative;
    right: -150px;
  }

  //IPhone XR
  @media (max-width: 414px) {
    position: relative;
    right: -150px;
    top: -120px;
  }
`;
