import { useCookies } from "react-cookie";
import { TabContent } from "../../../styles/styles";

export function Home() {
  const [cookies] = useCookies();
  return (
    <TabContent>
      <h1>Bem vindo {cookies.user}!</h1>
      <p>Utilize os botões acima para gerenciar sua conta.</p>
    </TabContent>
  );
}
