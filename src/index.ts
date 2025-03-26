import Deck from "./classes/deck";
import Player from "./classes/player";
import { gameConfig } from "./config/gameConfig";
import askQuestion from "./utils/askQuestion";
import playerMove from "./utils/playerMove";
import printError from "./utils/printError";
import printGame from "./utils/printGame";

async function main() {
  console.clear();

  // 1. Set up match
  const deck = new Deck();

  let players: Player[] = [];

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
    p.setHand(deck.drawCards(gameConfig.maxInHand - 1));

    // Adds player to the player list
    players.push(p);
  }

  let curPlayerIndex = 0;
  let curPlayer = players[curPlayerIndex];
  let gameOver = false;

  // 2. Game loop
  while (!gameOver) {
    console.clear();

    curPlayer = players[curPlayerIndex];

    printGame(players, curPlayer);

    const drawnCard = deck.drawCards(1)[0];
    curPlayer.addToHand(drawnCard);
    console.log(
      `${curPlayer.getName()}, you drawed the card ${drawnCard.getString()}!`
    );

    // Every move has to return a card to discard, since the player can't have more than 3 cards in hand
    const discarded = await playerMove(players[curPlayerIndex]);
    if (discarded) {
      deck.discardCard(discarded);
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
