import Player from "../classes/player";
import { gameConfig } from "../config/gameConfig";
import askQuestion from "./askQuestion";
import playerPlaceCard from "./playerPlaceCard";
import playerSelectCard from "./playerSelectCard";
import printError from "./printError";
import printHand from "./printHand";
import printWarning from "./printWarning";

const playerMove = async (player: Player) => {
  let playerInput;
  let cardToDiscard;
  const options = [1, 2];

  printHand(player);

  if (player.getDiscardCount() >= gameConfig.maxDiscards) {
    printWarning(
      `Max discards (${gameConfig.maxDiscards}) reached. You can't discard straight away at this round.`
    );
    cardToDiscard = await playerPlaceCard(player);
  } else {
    console.log("\nMake a move.\n\t1 - Use a card\n\t2 - Discard a card");

    do {
      playerInput = await askQuestion("\nEnter your move » ");
      if (options.includes(Number(playerInput))) {
        // Selected discard
        if (playerInput == 2) {
          console.log("\nSelect the card you'll discard:\n");
          cardToDiscard = await playerSelectCard(player);
          player.addDiscardCount();
        }
        // Selected use card
        else {
          cardToDiscard = await playerPlaceCard(player);
        }
      } else {
        printError("Invalid option!");
      }
    } while (!options.includes(Number(playerInput)));
  }

  return cardToDiscard;
};

export default playerMove;
