import Card from "./card";

class Player {
  name: string;
  lifeNumber: number;
  hand: Card[];
  slots: (Card | null)[];

  constructor(name: string) {
    this.name = name;

    // Sets the player's life number to a random int between 0 and 99
    this.lifeNumber = this.#getRandomInt(100);

    this.hand = [];
    this.slots = [null, null, null, null, null];
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

  addToHand(card: Card) {
    this.hand.push(card);
  }

  removeFromHand(position: number) {
    if (position >= 0 && position < this.hand.length) {
      const removed = this.hand.splice(position, 1)[0];
      return removed;
    } else {
      console.error(
        `Couldn't remove card at position ${position} from ${this.name}'s hand`
      );
    }
  }
}

export default Player;
