import Player from "../classes/player";
import askQuestion from "./askQuestion";
import printError from "./printError";

const playerSelectOpponent = async (player: Player, allPlayers: Player[]) => {
  let options = [];
  let input;
  const opponents = allPlayers.filter((p) => p != player);

  console.log(`\nSelect your opponent:\n`);

  // Prints and sets the options
  for (let i = 1; i <= opponents.length; i++) {
    console.log(`\t${i} - ${opponents[i - 1].getName()}`);
    options.push(i);
  }

  do {
    input = await askQuestion("\nEnter number » ");
    if (options.includes(Number(input))) {
      return opponents[Number(input) - 1];
    } else {
      printError("Invalid option!");
    }
  } while (!options.includes(Number(input)));
};

export default playerSelectOpponent;
