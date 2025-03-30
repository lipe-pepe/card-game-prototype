import Player from "../../classes/player";
import askQuestion from "./../../utils/askQuestion";
import printError from "../../ui/printError";
import enterNumber from "../../utils/enterNumber";

// *** playerSelectOpponent ***
//
// Inputs the player to select one of it's opponents. If there's only one choice,
// just returns it
//
// params :
//   - player: The player making the move
//   - allPlayers: The list of all players in the match
//
// returns:
//   - opponent: Returns the player selected

const playerSelectOpponent = async (player: Player, allPlayers: Player[]) => {
  let options = [];
  let input;
  const opponents = allPlayers.filter((p) => p != player);

  console.log(`\nSelect your opponent:\n`);

  // If there is only one opponent, simply returns it
  if (opponents.length === 1) {
    return opponents[0];
  }

  // Prints and sets the options
  for (let i = 1; i <= opponents.length; i++) {
    console.log(`\t${i} - ${opponents[i - 1].getName()}`);
    options.push(i);
  }

  input = await enterNumber(options);

  return opponents[Number(input) - 1];
};

export default playerSelectOpponent;
