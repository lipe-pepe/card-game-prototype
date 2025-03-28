import Card from "../../classes/card";
import Player from "../../classes/player";
import { gameConfig } from "../../config/gameConfig";
import printError from "../../ui/printError";
import printGame from "../../ui/printGame";
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
  let input;
  let cardsToDiscard: Card[] = [];
  const options = [1, 2, 3];

  // The player can make a move with all of their cards
  while (player.getHand().length > 0) {
    console.log(`\n-> ${player.getName()}'s turn <-`);

    // 1. Shows current hand
    printHand(player);

    // 2. Handles max discards (only if it is enabled)
    if (
      player.getDiscardCount() >= gameConfig.maxDiscards &&
      gameConfig.maxDiscards != 0
    ) {
      printWarning(
        `\nMax discards (${gameConfig.maxDiscards}) reached. You can't discard straight away at this round.`
      );
      const cards = await playerUseCard(player, allPlayers);
      cardsToDiscard = cardsToDiscard.concat(cards);
    } else {
      console.log(
        "\nMake a move.\n\t1 - Use a card\n\t2 - Discard a card\n\t3 - Pass"
      );

      do {
        input = await askQuestion("\nEnter your move » ");
        if (!options.includes(Number(input))) printError("Invalid option!");
      } while (!options.includes(Number(input)));

      switch (Number(input)) {
        // Player selected 'Use'
        case 1:
          const cards = await playerUseCard(player, allPlayers);
          cardsToDiscard = cardsToDiscard.concat(cards);
          console.clear();
          printGame(allPlayers, player);
          break;
        // Player selected 'Discard'
        case 2:
          console.log("\nSelect the card you'll discard:\n");
          const card = await playerSelectCard(player);
          cardsToDiscard.push(card);
          player.setDiscardCount(player.getDiscardCount() + 1);
          break;
        // Player selected 'Pass'
        case 3:
          return cardsToDiscard;
        default:
          break;
      }
    }
  }

  return cardsToDiscard;
};

export default playerMove;
