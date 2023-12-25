import { GeoForm } from "./components/GeoForm";
import { Person } from "./components/Person";
import { Card } from "./components/Card";

function Page(){
  return (
  <div>
    <h1 className="font-bold text-2xl">Olá Mundo!</h1>
    <h3>Algum texto qualquer</h3>

    <Card 
      phrase="Nooooooossa"
      author="Seu Madruga"
    />

  </div>
  );
}

export default Page;  