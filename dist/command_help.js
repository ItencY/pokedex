export async function commandHelp(state) {
    const help = state.commands;
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log();
    for (const cmd of Object.values(help)) {
        console.log(`${cmd.name}: ${cmd.description}`);
    }
    console.log();
}
