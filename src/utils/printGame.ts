import Player from "../classes/player";
import printCards from "./printCards";

const printGame = (player1: Player, player2: Player, curPlayer: Player) => {
  console.log("\n");
  console.log(
    `${curPlayer === player1 ? "\x1b[92m" : ""}${player1.name} (${
      player1.lifeNumber
    })\x1b[0m`
  );
  console.log("\n");
  console.log(printCards(player1.slots));
  console.log(`Result: ${player1.getResult() || "--"}`);
  console.log("\n");
  console.log(printCards(player2.slots));
  console.log(`Result: ${player2.getResult() || "--"}`);

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

export default printGame;
