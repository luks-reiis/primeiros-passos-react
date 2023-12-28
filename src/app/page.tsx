"use client"

import { useState } from "react";

function Page(){

  const [nameInput, setNameInput] = useState('');

  const handleBtnClick = () => {

    alert(nameInput)

  }


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        className="border border-black p-3 text-xl text-black rounded" 
        type="text" 
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>
      <button onClick={handleBtnClick}>Mostrar valor do campo</button>
    </div>
    );
}

export default Page;