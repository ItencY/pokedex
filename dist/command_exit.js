export function commandExit(state) {
    const exit = state.readline.close();
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}
