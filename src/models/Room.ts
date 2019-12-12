import { CardScheme } from "./CardScheme";

export interface Room {
    id : any,
    name: string,
    cardScheme: CardScheme,
    timeout: number   
}