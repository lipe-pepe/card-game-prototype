import Card from "../classes/card";
import Player from "../classes/player";
import askQuestion from "./askQuestion";
import printError from "./printError";

// *** playerSelectCard ***
//
// Inputs the player to select one card in their hand
//
// params :
//   - player: The player selecting
//
// returns:
//   - selected: The selected card

const playerSelectCard = async (player: Player): Promise<Card> => {
  let input;
  let options = [];
  let selectedIndex = 0;

  // Shows and sets menu
  for (let i = 0; i < player.getHand().length; i++) {
    const card = player.getHand()[i];
    console.log(`\t${i + 1} - ${card.getString()}`);
    options.push(i + 1);
  }

  do {
    input = await askQuestion("\nEnter option » ");
    if (options.includes(Number(input))) {
      selectedIndex = Number(input) - 1;
    } else {
      printError("Invalid option!");
    }
  } while (!options.includes(Number(input)));

  const selected = player.getHand()[selectedIndex];
  player.removeFromHand(selectedIndex);

  return selected;
};

export default playerSelectCard;
