"use client"

import { CountContext, CountInitialData } from "@/contexts/CountContext";
import { Header } from "./components/Header";

function Page(){
  return (
    <div className="container mx-auto">
      <CountContext.Provider value={CountInitialData}>
        <Header/>
      </CountContext.Provider>
    </div>
    );
}

export default Page;