import { createInterface, type Interface } from "readline";
import { getCommand } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    caughtPokemon: Record<string, Pokemon>;
}

export function initState(cacheInterval: number): State {
    const read = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    
    const commands = getCommand()
    return {
        readline: read,
        commands: commands,
        pokeAPI: new PokeAPI(cacheInterval),
        nextLocationsURL: "",
        prevLocationsURL: "",
        caughtPokemon: {},
    };
}