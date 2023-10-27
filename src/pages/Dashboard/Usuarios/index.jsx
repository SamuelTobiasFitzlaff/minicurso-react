import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
import { TabContent, UsersContainer } from "../../../styles/styles";
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
  }, [cookies.token]);

  return (
    <TabContent>
      <h1>Usuarios</h1>
      <UsersContainer>
        {data.map((item) => {
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
      ;
    </TabContent>
  );
}
