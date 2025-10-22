import {useAuth} from "../hooks/useAuth";
import { Button } from "../components/ui/Button/Button";
import Card from "../components/ui/Card/Card";
import Alert from "../components/ui/Alert/Alert";
import Checkbox from "../components/form/Checkbox/Checkbox";
import Text  from "../components/form/Text/Text";
import { formatName } from "../utils/formatName";
import { useState } from "react";

export default function HomePage() {
  const { user, login, logout } = useAuth();
  const [checked, setChecked] = useState(false);

  return (
    <div className="main-container" style={{maxWidth: 500, margin: '0 auto'}}>
      <Card>
        <Text size="large" >
          Mini App de Estrutura
        </Text>
        {user ? (
          <>
            <Alert type="success" message={`Bem-vindo, ${formatName(user.name)}!`} />
            <div style={{ margin:'16px 0'}}>
              <Checkbox
                label="Aceito os termos e condições"
                checked={checked}
                onChange={setChecked}
              />
            </div>
            <Text size="small" color="#555">
              {checked ? "Você aceitou os termos." : "Você não aceitou os termos."}
            </Text>
            <div style={{marginTop: 24}}>
              <Button onClick={logout}>Logout</Button>
            </div>
          </>
        ) : (
          <>
            <Alert type="info" message="Por favor, faça login para continuar." />
            <div style={{marginTop: 24}}>
              <Button onClick={login}>Login</Button>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
