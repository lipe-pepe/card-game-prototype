import Player from "../classes/player";
import askQuestion from "./askQuestion";
import playerPlaceCard from "./playerPlaceCard";
import playerSelectCard from "./playerSelectCard";
import printHand from "./printHand";
import printWarning from "./printWarning";

const MAX_DISCARDS = 2;

const playerMove = async (player: Player) => {
  let playerInput;
  let cardToDiscard;
  let options;

  printHand(player);

  if (player.getDiscardCount() >= MAX_DISCARDS) {
    options = [1];
    printWarning(
      "Max discards reached. You can't discard straight away at this round."
    );

    console.log("\nMake a move.\n\t1 - Use a card");
  } else {
    options = [1, 2];
    console.log("\nMake a move.\n\t1 - Use a card\n\t2 - Discard a card");
  }

  do {
    playerInput = await askQuestion("\nEnter your move » ");
    if (options.includes(Number(playerInput))) {
      // Selected discard
      if (playerInput == 2) {
        console.log("\nSelect the card you'll discard:\n");
        cardToDiscard = await playerSelectCard(player);
        player.addDiscardCount();
        return cardToDiscard;
      }
      // Selected use card
      else {
        cardToDiscard = await playerPlaceCard(player);
        return cardToDiscard;
      }
    } else {
      console.log("■ Invalid option!");
    }
  } while (!options.includes(Number(playerInput)));
};

export default playerMove;
