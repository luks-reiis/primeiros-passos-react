import { CountContext } from "@/contexts/CountContext";
import { use, useContext } from "react";

export const OnlineUsers = () => {
    const count = useContext(CountContext)
    
    return (
        <p>Online {count}</p>
    );
}