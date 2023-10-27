import PropTypes from "prop-types";
import { CardContainer, CardHeader } from "./styles";
export function Card({ nome, email, avatar }) {
  return (
    <CardContainer>
      <CardHeader>
        <img src={avatar} height={48} width={48} alt={nome} /> <h2>{nome}</h2>
      </CardHeader>
      <p>E-mail: {email}</p>
    </CardContainer>
  );
}
Card.propTypes = {
  nome: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
