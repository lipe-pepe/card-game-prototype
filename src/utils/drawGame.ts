import Player from "../classes/player";
import drawCards from "./drawCards";

const drawGame = (player1: Player, player2: Player, curPlayer: Player) => {
  console.log("\n");
  console.log(
    `${curPlayer === player1 ? "\x1b[92m" : ""}${player1.name} (${
      player1.lifeNumber
    })\x1b[0m`
  );
  console.log("\n");
  console.log(drawCards(player1.slots));
  console.log("\n");
  console.log(drawCards(player2.slots));
  console.log("\n");
  console.log(
    `${curPlayer === player2 ? "\x1b[92m" : ""}${player2.name} (${
      player2.lifeNumber
    })\x1b[0m`
  );
  console.log("\n");
  console.log("——————————————————————————————————————————————————");
  console.log("\n");
};

export default drawGame;
