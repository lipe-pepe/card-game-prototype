import CardColor from "../types/cardColor";
import CardSymbol from "../types/cardSymbol";
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

    return deck;
  }

  getDeck() {
    return this.deck;
  }
}

export default Deck;
