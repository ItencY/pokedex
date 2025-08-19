import * as readline from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
};

export function cleanInput(input: string): string[] {
    const lowerInput = input.toLowerCase();
    const word = lowerInput.split(/\s+/).filter(word => word !== "");
    return word;
}

export function startREPL() {
    const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
});

const commands = getCommand();

read.prompt();
read.on("line", (line: string) => {
    const words = cleanInput(line);
    if (words.length === 0) {
        read.prompt();
        return;
    }

    const commandName = words[0];
    const command = commands[commandName];

    if (command) {
        try {
            command.callback(commands);
        } catch (err) {
            console.error("Error running command: ", err);
        }
    } else {
        console.log("Unknown command");
    }

    read.prompt();
})
}

export function getCommand(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
    }
}