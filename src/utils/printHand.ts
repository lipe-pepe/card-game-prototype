import Player from "../classes/player";
import printCards from "./printCards";

const printHand = (player: Player) => {
  console.log("\nYour hand: ");
  console.log(printCards(player.hand));
};

export default printHand;
