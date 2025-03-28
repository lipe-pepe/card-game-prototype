import Card from "../../classes/card";
import Player from "../../classes/player";
import { gameConfig } from "../../config/gameConfig";
import printError from "../../ui/printError";
import printHand from "../../ui/printHand";
import printWarning from "../../ui/printWarning";
import askQuestion from "../../utils/askQuestion";
import playerSelectCard from "./playerSelectCard";
import playerUseCard from "./playerUseCard";

// *** playerMove ***
//
// Handle the player move by using the player's input to select between diferent actions
//
// params :
//   - player: The player making the move
//   - allPlayers: The list of all players in the match

// returns:
//   - cardsToDiscard: An array of cards to discard

const playerMove = async (player: Player, allPlayers: Player[]) => {
  let playerInput;
  let cardsToDiscard: Card[] = [];
  const options = [1, 2];

  // 1. Shows current hand
  printHand(player);

  // 2. Handles max discards
  if (player.getDiscardCount() >= gameConfig.maxDiscards) {
    printWarning(
      `Max discards (${gameConfig.maxDiscards}) reached. You can't discard straight away at this round.`
    );
    const cards = await playerUseCard(player, allPlayers);
    cardsToDiscard = cardsToDiscard.concat(cards);
  } else {
    console.log("\nMake a move.\n\t1 - Use a card\n\t2 - Discard a card");

    do {
      playerInput = await askQuestion("\nEnter your move » ");
      if (options.includes(Number(playerInput))) {
        // Player selected discard
        if (playerInput == 2) {
          console.log("\nSelect the card you'll discard:\n");
          const card = await playerSelectCard(player);
          cardsToDiscard.push(card);
          player.setDiscardCount(player.getDiscardCount() + 1);
        }
        // Player selected use card
        else {
          const cards = await playerUseCard(player, allPlayers);
          cardsToDiscard = cardsToDiscard.concat(cards);
        }
      } else {
        printError("Invalid option!");
      }
    } while (!options.includes(Number(playerInput)));
  }

  return cardsToDiscard;
};

export default playerMove;
