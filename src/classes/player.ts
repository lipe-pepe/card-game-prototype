import calculateExpression from "../utils/calculateExpression";
import Card from "./card";

class Player {
  name: string;
  lifeNumber: number;
  hand: Card[];
  slots: (Card | null)[];
  private result: number | null;
  private discardCount: number;

  constructor(name: string) {
    this.name = name;

    // Sets the player's life number to a random int between 0 and 99
    this.lifeNumber = this.#getRandomInt(100);

    this.hand = [];
    this.slots = [null, null, null, null, null];
    this.result = null;
    this.discardCount = 0;
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

  placeCard(position: number, card: Card) {
    if (position >= 0 && position < this.slots.length) {
      // Removes a card from the slot and places another one in it
      const removed = this.slots.splice(position, 1, card)[0];
      if (removed) {
        console.log(
          `\n${this.name} swapped \x1b[${removed?.color}m[${removed?.symbol}]\x1b[0m with \x1b[${card.color}m[${card.symbol}]\x1b[0m`
        );
      }

      return removed;
    } else {
      console.error(
        `Couldn't remove card at position ${position} from ${this.name}'s hand`
      );
    }
  }

  // ------------------------------------------------------------------------------------

  getResult() {
    // We can only have a result if all slots are filled with cards
    if (this.slots.includes(null)) {
      this.result = null;
    } else {
      this.result = this.calculateResult();
    }
    return this.result;
  }

  calculateResult() {
    let expression = "";
    this.slots.forEach((card) => {
      expression += card?.symbol;
    });
    return calculateExpression(expression);
  }

  // ------------------------------------------------------------------------------------

  getDiscardCount() {
    return this.discardCount;
  }

  addDiscardCount() {
    this.discardCount++;
  }
}

export default Player;
