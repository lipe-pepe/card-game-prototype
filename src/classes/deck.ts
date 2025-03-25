import CardColor from "../types/cardColor";
import CardSymbol from "../types/cardSymbol";
import shuffleArray from "../utils/shuffleArray";
import Card from "./card";

class Deck {
  private deck: Card[];

  constructor() {
    this.deck = this.#createDeck();
  }

  #createDeck() {
    const cardColors = Object.values(CardColor);
    const cardSymbols = Object.values(CardSymbol);

    let deck = [];

    for (let i = 0; i < cardColors.length; i++) {
      for (let j = 0; j < cardSymbols.length; j++) {
        deck.push(new Card(cardSymbols[j], cardColors[i]));
      }
    }

    shuffleArray(deck);

    return deck;
  }

  getDeck() {
    return this.deck;
  }

  drawCards(amount: number) {
    const drawn = this.deck.splice(0, amount);
    return drawn;
  }
}

export default Deck;
