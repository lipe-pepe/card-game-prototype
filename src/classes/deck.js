import Card from "./card";

class Deck {
  constructor() {
    this.deck = this.#createDeck();
  }

  #createDeck() {
    const colors = ["red", "green", "blue", "yellow"];
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];

    let cards = [];

    for (i = 0; i < colors.length; i++) {
      for (j = 0; j < values.length; j++) {
        cards.push(new Card(value[j], colors[i]));
      }
    }

    return cards;
  }
}
