import styled from "styled-components";

export const Container = styled.section`
  color: ${({ theme }) => theme.textColorDefault};
  margin: 100px auto;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    position: relative;
    top: -25px;
    font-size: 3rem;
    font-weight: 600;
    font-family: "Source Serif Pro", serif;
  }

  // Iphone SE
  @media (max-width: 375px) {
    h1 {
      position: relative;
      right: -150px;
    }

    div {
      span {
        margin-left: 20px;
        font-size: 20px;
      }
    }
    section {
      position: relative;
      right: -50px;
    }
  }

  //Iphone 12 Pro
  @media (max-width: 390px) {
    h1 {
      position: relative;
      right: -150px;
    }

    div {
      span {
        margin-left: 20px;
        font-size: 20px;
      }
    }
    section {
      position: relative;
      right: -50px;
    }
  }

  //IPhone XR
  @media (max-width: 414px) {
    h1 {
      position: relative;
      right: -150px;
    }

    div {
      span {
        margin-left: 20px;
        font-size: 20px;
      }
    }
    section {
      position: relative;
      right: -50px;
    }
  }
`;

export const BoxItem = styled.div`
  display: flex;
  margin-bottom: 50px;

  .arrow {
    margin-right: 20px;
    span {
      background-color: #5c5d61;
      padding: 7.5px 15px;
      height: 30px;
      display: inline-block;
    }
  }
`;

export const Title = styled.h3`
  padding-left: 20px;
  font-size: 1.5rem;

  @media (max-width: 375px) {
    font-size: 22px;
  }

  @media (max-width: 390px) {
    font-size: 22px;
  }
  @media (max-width: 414px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.h4`
  padding-left: 20px;
  margin-top: 6px;
  margin-bottom: 6px;

  @media (max-width: 375px) {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 390px) {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.9);
  }
  @media (max-width: 414px) {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Paragraph = styled.p`
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 375px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export const Line = styled.div`
  min-height: 10px;
  width: 2px;
  background-color: #ffffff;
  flex-grow: 1;
  margin-left: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Separetor = styled.div`
  display: flex;
  flex-direction: column;
`;
