import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
   font-family: Roboto, Arial, sans-serif;
  }
  body {
    background-color: #2a5dcc;
    margin: 0;
    padding: 0;
  } 
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginContent = styled.div`
  background-color: #fff;
  width: fit-content;
  margin: auto;
  padding: 2rem 3rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  > button {
    margin-top: 1rem;
  }
`;

export const HomeContainer = styled.div`
  background-color: #fff;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 1000px;
  overflow: auto;
  min-height: 100vh;
  padding: 0 3rem;
`;

export const DashboardContainer = styled.div`
  background-color: #fff;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 1000px;
  overflow: auto;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem 1rem;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 4rem;
  color: #002033;
  min-height: 100vh;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
