import { useContext, useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import { TabContent, UsersContainer } from "../../../styles/styles";
import api from "../../../services/api";
import { useCookies } from "react-cookie";

export function Users() {
  const [data, setData] = useState([]);
  const [cookies] = useCookies();

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: { Authorization: `Bearer ${cookies.token}` },
      };
      const response = await api.get("/users", config);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <TabContent>
      <h1>Usuários</h1>
      <UsersContainer>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              email={item.email}
              permission={item.admin ? "Administrador" : "Usuário"}
            />
          );
        })}
      </UsersContainer>
    </TabContent>
  );
}
