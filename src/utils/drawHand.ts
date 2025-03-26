import Player from "../classes/player";
import drawCards from "./drawCards";

const drawHand = (player: Player) => {
  console.log("\nYour hand: ");
  console.log(drawCards(player.hand));
};

export default drawHand;
