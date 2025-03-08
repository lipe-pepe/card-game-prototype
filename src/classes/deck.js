const Card = require("./card");

class Deck {
  constructor() {
    this.deck = this.#createDeck();
  }

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

module.exports = Deck;
