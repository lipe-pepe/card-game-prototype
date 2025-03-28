import Player from "../classes/player";
import printCards from "./printCards";

const printGame = (players: Player[], curPlayer: Player) => {
  console.log("\n");
  players.forEach((player) => {
    console.log(
      `${
        curPlayer === player ? "\x1b[92m" : ""
      }${player.getName()} (${player.getLifeNumber()})\x1b[0m`
    );
    console.log(printCards(player.slots));
    console.log(`Result: ${player.getResult() || "--"}`);
    console.log("\n");
  });

  console.log("——————————————————————————————————————————————————");
  console.log("\n");
};

export default printGame;
