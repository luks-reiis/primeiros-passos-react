"use client"

import { use, useEffect, useReducer, useState } from "react";
import { Item } from "./types/Item";
import { listReducer } from "@/reducers/listReducer";

function Page(){

  const [list, dispatch] = useReducer(listReducer, [])

  const handleAddClick = () => {
    dispatch({
      type: 'add',
      payload: {
        text: 'Novo item'
      }
    });
  }

  return (
    <div className="">
      <button onClick={handleAddClick}></button>
    </div>
    );
}

export default Page;