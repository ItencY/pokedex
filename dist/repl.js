export function cleanInput(input) {
    const lowerInput = input.toLowerCase();
    const word = lowerInput.split(/\s+/).filter(word => word !== "");
    return word;
}
export async function startREPL(state) {
    const read = state.readline;
    read.prompt();
    read.on("line", async (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            read.prompt();
            return;
        }
        const commandName = words[0];
        const args = words.slice(1);
        const command = state.commands[commandName];
        if (command) {
            try {
                command.callback(state, ...args);
            }
            catch (err) {
                console.error("Error running command: ", err);
            }
        }
        else {
            console.log("Unknown command");
        }
        read.prompt();
    });
}
