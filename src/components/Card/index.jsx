import PropTypes from "prop-types";

import { CardContainer, CardHeader } from "./styles";

export function Card({ name, email, avatar, permission }) {
  return (
    <CardContainer id={email}>
      <CardHeader>
        <img src={avatar} height={48} width={48} alt={name} /> <h2>{name}</h2>
      </CardHeader>
      <p>E-mail: {email}</p>
      <p>Permissão: {permission}</p>
    </CardContainer>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  permission: PropTypes.string.isRequired,
};
