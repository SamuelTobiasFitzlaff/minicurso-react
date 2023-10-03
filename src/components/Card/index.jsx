import { Link } from "react-router-dom";
import { CardContainer, CardHeader } from "./styles";

export function Card({ avatar, name, email, permission }) {
  return (
    <CardContainer>
      <CardHeader>
        <img src={avatar} height={48} width={48} alt={name} /> <h2>{name}</h2>
      </CardHeader>
      <p>Email: {email}</p>
      <p>Permissão: {permission}</p>
    </CardContainer>
  );
}
