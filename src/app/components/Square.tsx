import { useEffect } from "react";

export const Square = () => {

    useEffect(() => {
        console.log("Conectado");

        return () => {
            console.log("Desconectado")
        }
    })

    return(
        <div className="w-52 h-52 bg-orange-700 text-white">
        </div>
    );
}
