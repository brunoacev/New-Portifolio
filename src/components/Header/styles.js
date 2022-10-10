import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 780px;
  height: ${({ theme }) => theme.HeightSize.sm};

  svg {
    color: ${({ theme }) => theme.textColorDefault};
    font-size: 25px;
    margin: 0 10px;
    cursor: pointer;
  }

  nav {
    a {
      color: rgba(255, 255, 255, 0.6);
      font-size: 15px;
      margin: 0 10px;
      cursor: pointer;
      

      &:hover {
        color: ${({ theme }) => theme.textColorDefault};
      }
    }
  }
`;
