import { GeoForm } from "./components/GeoForm";
import { Person } from "./components/Person";
import { Card } from "./components/Card";

function Page(){
  return (
  <div>
    <h1 className="font-bold text-2xl">Olá Mundo!</h1>
    <h3>Algum texto qualquer</h3>

    <Card>
      <>
        <h3 className="text-3xl font-bold italic">"Frase de efeito"</h3>
        <p className="text-right text-sm">~Autor desconhecido</p>
      </>
    </Card>

  </div>
  );
}

export default Page;  