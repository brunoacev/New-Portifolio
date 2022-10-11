import styled from "styled-components";

export const Container = styled.section`
  border-top: 2px solid #fac86b;

  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.textColorDefault};
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 600;
    font-family: "Source Serif Pro", serif;
  }

  div {
    display: flex;
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
`;
