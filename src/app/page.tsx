import { peopleList } from "./data/peopleList";

function Page(){

  return (
  <div>
    <h1 className="font-bold text-2xl">Olá Mundo!</h1>
    <h3>Algum texto qualquer</h3>

    {peopleList.length > 0 && 
      <ul>
        {peopleList.map((person) => {
          return <li key={person.id}>{person.name} é {person.profession}</li>}
        )}
      </ul>
    }

  </div>
  );
}

export default Page;  