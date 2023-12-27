"use client"

import { FormEvent } from "react";
import { CustomButton } from "./components/CustomButton";

function Page(){

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Opa, enviando...");
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-3">Form de Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input className="text-black" type="text" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
    );
}

export default Page;