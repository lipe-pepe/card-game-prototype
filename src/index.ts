import Deck from "./classes/deck";
import Player from "./classes/player";
import { gameConfig } from "./config/gameConfig";
import printError from "./ui/printError";
import printGame from "./ui/printGame";
import askQuestion from "./utils/askQuestion";
import playerMove from "./game/playerActions/playerMove";

async function main() {
  // Declares variables
  let players: Player[] = [];
  let curPlayerIndex = 0;
  let curPlayer = players[curPlayerIndex];
  let gameOver = false;

  console.clear();

  // 1. Set up match
  const deck = new Deck();

  // Creates all players
  for (let i = 1; i <= gameConfig.players; i++) {
    let name;
    do {
      name = await askQuestion(`\nPlayer ${i}'s name » `);
      if (name === "") {
        printError("Invalid name!");
      }
    } while (name === "");
    // Configures player
    const p = new Player(String(name));

    // Adds player to the player list
    players.push(p);
  }

  // 2. Game loop
  while (!gameOver) {
    console.clear();

    curPlayer = players[curPlayerIndex];

    printGame(players, curPlayer);

    // Draws cards for the player to fill their hand
    const drawnCards = deck.drawCards(
      gameConfig.maxInHand - curPlayer.getHand().length
    );
    curPlayer.addToHand(drawnCards);
    console.log(
      `${curPlayer.getName()}, you drawed the cards ${drawnCards
        .map((c) => c.getString())
        .join(",")}!`
    );

    const discarded = await playerMove(curPlayer, players);
    if (discarded) {
      deck.discardCards(discarded);
    }

    // Checks lose
    const loser = players.find(
      (p) => p.getLifeNumber() === curPlayer.getResult()
    );
    if (loser && loser != curPlayer) {
      players = players.filter((p) => p !== loser);
      console.log(`\n\x1b[96m${loser?.getName()} was eliminated! \x1b[0m\n`);
      await askQuestion("Press [Enter] to continue » ");
    }

    // Next turn
    curPlayerIndex++;
    if (curPlayerIndex >= players.length) curPlayerIndex = 0;

    // Checks win
    if (players.length === 1) {
      gameOver = true;
    }
  }

  console.log(`\n\x1b[96m${players[0]?.getName()} won the game!!! \x1b[0m\n`);
}

main();
