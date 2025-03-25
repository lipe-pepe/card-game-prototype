import Card from "./card";

class Player {
  name: string;
  lifeNumber: number;
  hand: Card[];

  constructor(name: string) {
    this.name = name;

    // Sets the player's life number to a random int between 0 and 99
    this.lifeNumber = this.#getRandomInt(100);

    this.hand = [];
  }

  #getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  setHand(cards: Card[]) {
    if (cards.length == 3 && this.hand.length == 0) {
      this.hand = cards;
    } else {
      console.error(`Couldn't set new hand for ${this.name}`);
    }
  }
}

export default Player;
