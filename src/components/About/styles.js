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

  // Iphone SE
  @media (max-width: 375px) {
    article {
      h1 {
        position: relative;
        right: -50px;
      }
      p {
        position: relative;
        right: -150px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }

  //Iphone 12 Pro
  @media (max-width: 390px) {
    article {
      h1 {
        position: relative;
        right: -50px;
      }
      p {
        position: relative;
        right: -150px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }

  //IPhone XR
  @media (max-width: 414px) {
    article {
      h1 {
        position: relative;
        right: -50px;
      }
      p {
        position: relative;
        right: -150px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }
`;
