import Player from "../classes/player";
import drawCards from "./drawCards";

const drawGame = (player: Player, opponent: Player) => {
  console.log("\n");
  console.log(opponent.name);
  console.log(drawCards(opponent.slots));
  console.log("\n");
  console.log(drawCards(player.slots));
  console.log(player.name);
  console.log("\n");
};

export default drawGame;
