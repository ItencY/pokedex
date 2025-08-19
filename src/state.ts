import { createInterface, type Interface } from "readline";
import { getCommand } from "./commands.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
}

export function initState(): State {
    const read = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    
    const commands = getCommand()
    return {
        readline: read,
        commands: commands,
    }
}