import Deck from "./classes/deck";
import Player from "./classes/player";
import drawGame from "./utils/drawGame";
import playerMove from "./utils/playerMove";

async function main() {
  console.clear();

  // 1. Set up match
  const deck = new Deck();

  const p1 = new Player("P1");
  const p2 = new Player("P2");

  p1.setHand(deck.drawCards(3));
  p2.setHand(deck.drawCards(3));

  const players = [p1, p2];
  let curPlayerIndex = 0;
  let curPlayer;
  let gameOver = false;

  // 2. Game loop
  while (!gameOver) {
    curPlayer = players[curPlayerIndex];

    drawGame(p1, p2, curPlayer);

    const drawnCard = deck.drawCards(1)[0];
    curPlayer.addToHand(drawnCard);
    console.log(
      `${curPlayer.name}, you drawed the card \x1b[${drawnCard.color}m[${drawnCard.symbol}]\x1b[0m!`
    );

    // Every move has to return a card to discard, since the player can't have more than 3 cards in hand
    const discarded = await playerMove(players[curPlayerIndex]);
    if (discarded) {
      deck.discardCard(discarded);
    }

    // Next turn
    curPlayerIndex++;
    if (curPlayerIndex >= players.length) curPlayerIndex = 0;

    console.clear();
  }
}

main();
