import { useEffect } from "react";
import { TabContent, UsersContainer } from "../../../styles/styles";
import { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
import { Card } from "../../../components/Card";

export function Usuarios() {
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
          console.log(item);
          return (
            <Card
              key={item.id}
              avatar={item.avatar}
              nome={item.nome}
              email={item.email}
            />
          );
        })}
      </UsersContainer>
    </TabContent>
  );
}
