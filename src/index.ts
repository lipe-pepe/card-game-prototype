import Deck from "./classes/deck";
import Player from "./classes/player";
import drawGame from "./utils/printGame";

const deck = new Deck();

const p1 = new Player("P1");
const p2 = new Player("P2");

p1.setHand(deck.drawCards(3));
p2.setHand(deck.drawCards(3));

drawGame(p1, p2);
