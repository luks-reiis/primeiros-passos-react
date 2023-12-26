import { peopleList } from "./data/peopleList";

function Page(){

  const quimicos = peopleList.filter(person => person.profession === "químico");

  return (
  <div>
    <h1 className="font-bold text-2xl">Olá Mundo!</h1>
    <h3>Algum texto qualquer</h3>

    {quimicos.length > 0 &&
      <>
        <h3>Lista de químicos:</h3>
        <ul>
          {quimicos.map(person => 
            <li key={person.id}>{person.name}</li>  
          )}
        </ul>
      </>
    }

  </div>
  );
}

export default Page;  