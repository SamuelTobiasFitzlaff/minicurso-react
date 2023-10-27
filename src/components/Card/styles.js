import styled from "styled-components";

export const CardContainer = styled.div`
  flex-grow: 1;
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin: 4px;
  cursor: default;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
