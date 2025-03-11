import Card from "./card.js";

class Deck {
  constructor() {
    this.deck = this.#createDeck();
    this.discard = [];
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const randomCardPos = Math.floor(Math.random() * (i + 1));
      const temp = this.deck[i];
      this.deck[i] = this.deck[randomCardPos];
      this.deck[randomCardPos] = temp;
    }
  }

  drawCard() {
    return this.deck.shift(); // Removes the first card in the deck and returns it
  }

  drawNumberCard() {
    for (let i = 0; i < this.deck.length; i++) {
      const card = this.deck[i];
      if (typeof card.value === "number") {
        this.deck.splice(i, 1); // Removes card in the deck
        return card;
      }
    }
  }

  discardCard(card) {
    this.discard.push(card);
  }

  // print() {
  //   for (let i = 0; i < this.deck.length; i++) {
  //     console.log(`${this.deck[i].value}${this.deck[i].color[0]}`);
  //   }
  // }

  #createDeck() {
    const colors = ["red", "green", "blue", "yellow"];
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];

    let cards = [];

    for (let i = 0; i < colors.length; i++) {
      for (let j = 0; j < values.length; j++) {
        cards.push(new Card(values[j], colors[i]));
      }
    }

    return cards;
  }
}

export default Deck;
