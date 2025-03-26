import Player from "../classes/player";
import askQuestion from "./askQuestion";
import playerPlaceCard from "./playerPlaceCard";
import playerSelectCard from "./playerSelectCard";
import printHand from "./printHand";

const playerMove = async (player: Player) => {
  let playerInput;
  let cardToDiscard;

  printHand(player);

  console.log("\nMake a move.\n\t1 - Discard a card\n\t2 - Use a card");

  do {
    playerInput = await askQuestion("\nEnter your move » ");
    switch (playerInput) {
      case "1":
        console.log("\nSelect the card you'll discard:\n");
        cardToDiscard = await playerSelectCard(player);
        return cardToDiscard;
      case "2":
        cardToDiscard = await playerPlaceCard(player);
        return cardToDiscard;

      default:
        console.log("■ Invalid option!");
    }
  } while (playerInput != 1 && playerInput != 2);
};

export default playerMove;
