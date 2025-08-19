import { State } from "./state.js";


export function cleanInput(input: string): string[] {
    const lowerInput = input.toLowerCase();
    const word = lowerInput.split(/\s+/).filter(word => word !== "");
    return word;
}

export function startREPL(state: State) {
    const read = state.readline;
    const commands = state.commands;

    read.prompt();

    read.on("line", (line: string) => {
    const words = cleanInput(line);
    if (words.length === 0) {
        read.prompt();
        return;
    }

    const commandName = words[0];
    const command = state.commands[commandName];

    if (command) {
        try {
            command.callback(state);
        } catch (err) {
            console.error("Error running command: ", err);
        }
    } else {
        console.log("Unknown command");
    }

    read.prompt();
})
}