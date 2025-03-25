import Deck from "../classes/deck";
import Player from "../classes/player";
import askQuestion from "./askQuestion";

const playerDiscard = async (player: Player) => {
  let playerInput;

  console.log(
    `\nWhich card you want to discard?\n
    \t1 - [${player.hand[0].symbol}]\n
    \t2 - [${player.hand[1].symbol}]\n
    \t3 - [${player.hand[2].symbol}]\n
    \t4 - [${player.hand[3].symbol}]`
  );

  const options = [1, 2, 3, 4];

  do {
    playerInput = await askQuestion("\nEnter number » ");
    if (options.includes(Number(playerInput))) {
      const discardedCard = player.removeFromHand(Number(playerInput) - 1);
      return discardedCard;
    } else {
      console.log("■ Invalid option!");
    }
  } while (!options.includes(Number(playerInput)));
};

export default playerDiscard;
