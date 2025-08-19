import * as readline from "readline";

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
read.prompt();
read.on("line", (line: string) => {
    const words = cleanInput(line);
    if (words.length === 0) {
        read.prompt();
        return;
    }
    console.log(`Your command was: ${words[0]}`);
    read.prompt();
})
}