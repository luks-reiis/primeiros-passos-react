"use client"

import { useState } from "react";

function Page(){

  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount(oldCount => oldCount + 2);
    setCount(oldCount => oldCount + 2);
  }


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 p-3 rounded-md">+6</button>
    </div>
    );
}

export default Page;