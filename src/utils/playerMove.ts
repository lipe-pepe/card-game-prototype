import Player from "../classes/player";
import askQuestion from "./askQuestion";
import drawCards from "./drawCards";

const playerMove = async (player: Player) => {
  let playerInput;

  console.log("\nYour hand: ");
  console.log(drawCards(player.hand));

  console.log("\nMake a move.\n\t1 - Discard a card\n\t2 - Use a card");

  do {
    playerInput = await askQuestion("\nEnter your move » ");
    if (playerInput != 1 && playerInput != 2) {
      console.log("■ Invalid option!");
    }
  } while (playerInput != 1 && playerInput != 2);
};

export default playerMove;
