import CardColor from "../types/cardColor";
import CardSymbol from "../types/cardSymbol";
import shuffleArray from "../utils/shuffleArray";
import Card from "./card";

class Deck {
  private deck: Card[];
  private discard: Card[];

  constructor() {
    this.deck = this.#createDeck();
    this.discard = [];
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
    if (this.deck.length < amount) {
      shuffleArray(this.discard);
      this.deck = this.deck.concat(this.discard);
    }
    const drawn = this.deck.splice(0, amount);
    return drawn;
  }

  discardCard(card: Card) {
    this.discard.push(card);
    console.log(this.discard);
  }
}

export default Deck;
