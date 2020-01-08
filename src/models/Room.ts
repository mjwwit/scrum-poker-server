import { Scheme } from "./CardScheme";

export interface Room {
    id : string,
    name: string,
    cardScheme: Scheme,
    timeout: number   
}