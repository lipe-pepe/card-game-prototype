import { gameConfig } from "../config/gameConfig";
import calculateExpression from "../utils/calculateExpression";
import Card from "./card";

class Player {
  name: string;
  lifeNumber: number;
  private hand: Card[];
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

  // -----------------------------------------------------------------------------------

  // Getter methods

  getHand() {
    return this.hand;
  }

  getResult() {
    // We can only have a result if all slots are filled with cards
    if (this.slots.includes(null)) {
      this.result = null;
    }
    // Otherwise, we calculate the result
    else {
      let expression = "";
      this.slots.forEach((card) => {
        expression += card?.symbol;
      });
      this.result = calculateExpression(expression);
    }
    return this.result;
  }

  getDiscardCount() {
    return this.discardCount;
  }

  // -----------------------------------------------------------------------------------

  // Setter methods

  setHand(cards: Card[]) {
    if (cards.length > gameConfig.maxInHand) {
      console.error(`Couldn't set new hand for ${this.name}`);
    } else {
      this.hand = cards;
    }
  }

  setDiscardCount(value: number) {
    this.discardCount = value;
  }

  // -----------------------------------------------------------------------------------

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
          `\n${
            this.name
          } swapped ${removed.getString()} with ${card.getString()}`
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

  #getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}

export default Player;
