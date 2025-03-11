import Deck from "./classes/deck.js";
import Player from "./classes/player.js";
import playerMove from "./utils/playerMove.js";
// const Deck = require("./classes/deck.js");

import printGame from "./utils/printGame.js";

// =====================================================================

let player1;
let player2;

const deck = new Deck();

player1 = new Player("P1");
player2 = new Player("P2");

deck.shuffle();

// Defining life numbers
const card1 = deck.drawNumberCard();
const card2 = deck.drawNumberCard();
const card3 = deck.drawNumberCard();
const card4 = deck.drawNumberCard();

player1.setLifeNumber(card1.value, card3.value);
player2.setLifeNumber(card2.value, card4.value);

deck.discardCard(card1);
deck.discardCard(card2);
deck.discardCard(card3);
deck.discardCard(card4);

deck.shuffle();

let card;

let finish = false;

while (!finish) {
  card = deck.drawCard();
  printGame(player1, player2, card);
  await playerMove(player1, card);

  card = deck.drawCard();
  printGame(player1, player2, card);
  await playerMove(player2, card);
}
