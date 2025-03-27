import Player from "../classes/player";
import { gameConfig } from "../config/gameConfig";
import askQuestion from "./askQuestion";
import playerSelectCard from "./playerSelectCard";
import playerUseCard from "./playerUseCard";
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
    cardToDiscard = await playerUseCard(player);
  } else {
    console.log("\nMake a move.\n\t1 - Use a card\n\t2 - Discard a card");

    do {
      playerInput = await askQuestion("\nEnter your move » ");
      if (options.includes(Number(playerInput))) {
        // Selected discard
        if (playerInput == 2) {
          console.log("\nSelect the card you'll discard:\n");
          cardToDiscard = await playerSelectCard(player);
          player.setDiscardCount(player.getDiscardCount() + 1);
        }
        // Selected use card
        else {
          cardToDiscard = await playerUseCard(player);
        }
      } else {
        printError("Invalid option!");
      }
    } while (!options.includes(Number(playerInput)));
  }

  return cardToDiscard;
};

export default playerMove;
