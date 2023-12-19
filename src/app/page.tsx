import Quadrado, {Circle } from "./components/Geo";

function Page(){
  return (
  <div>
    <h1 className="font-bold text-2xl">Olá Mundo!</h1>
    <h3>Algum texto qualquer</h3>
    <Quadrado /> 
    <Circle />
  </div>
  );
}

export default Page;  