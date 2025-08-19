export function commandHelp(state) {
    const help = state.commands;
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    for (const cmd of Object.values(help)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}
