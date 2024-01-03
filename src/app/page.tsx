"use client"

/*

  Etapas do Effect:

  1. Definição da função que vai rodar.
  2. Definição de QUANDO vai rodar.
  3. Definição do que fazer quando o componente sumir/unload.

  Effect é utilizado quando existe integração com serviço externo.

  Exemplo de baixa performance:

  function Page(){
    const [firstName, setFirstName] = useState("Lucão");
    const [lastName, setLastName] = useState("Reiis");
    const [fullName, setFullName] = useState('');

    useEffect(() => {
      setFullName(firstName + ' ' + lastName);
    }, [firstName, lastName]);

    return (
      <div className="">
      <p>Meu nome é {fullName}</p>

      <button className="border border-blue-400 m-3 p-3" onClick={() => setFirstName('Joe')}>Mudar primeiro nome</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setLastName('Mac')}>Mudar último nome</button>
      </div>
      );
  }
*/

import { useEffect, useState } from "react";

function Page(){
  const [firstName, setFirstName] = useState("Lucão");
  const [lastName, setLastName] = useState("Reiis");
  
  const fullName = firstName + ' ' + lastName;

  return (
    <div className="">
     <p>Meu nome é {fullName}</p>
     <hr />
     <button className="border border-blue-400 m-3 p-3" onClick={() => setFirstName('Joe')}>Mudar primeiro nome</button>
     <button className="border border-blue-400 m-3 p-3" onClick={() => setLastName('Mac')}>Mudar último nome</button>
    </div>
    );
}

export default Page;