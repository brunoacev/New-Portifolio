import styled from "styled-components";

export const Container = styled.section`
  border-top: 2px solid #fac86b;

  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.textColorDefault};
    font-size: 3rem;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 600;
    font-family: "Source Serif Pro", serif;
  }

  div {
    display: flex;
  }

  // Iphone SE
  @media (max-width: 375px) {
    border-top: none;

    div {
      display: flex;
      flex-direction: column;
    }
    h1 {
      position: relative;
      right: -150px;
    }
  }

  //Iphone 12 Pro
  @media (max-width: 390px) {
    border-top: none;

    div {
      display: flex;
      flex-direction: column;
    }
    h1 {
      position: relative;
      right: -150px;
    }
  }

  //IPhone XR
  @media (max-width: 414px) {
    border-top: none;
    position: relative;
    top: -100px;

    div {
      display: flex;
      flex-direction: column;
    }
    h1 {
      position: relative;
      right: -150px;
    }
  }
`;

export const Box = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 30px;
  margin: 5px;

  svg {
    height: 30px;
    fill: #fff;
  }

  a {
    color: ${({ theme }) => theme.textColorDefault};
  }

  @media (max-width: 375px) {
    position: relative;
    right: -150px;
    font-size: 20px;
  }
  @media (max-width: 390px) {
    position: relative;
    right: -150px;
    font-size: 20px;
  }
  @media (max-width: 414px) {
    position: relative;
    right: -150px;
    font-size: 20px;
  }
`;
