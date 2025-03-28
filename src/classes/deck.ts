import { gameConfig } from "../config/gameConfig";
import { NormalCardColor, NormalCardSymbol } from "../types/cards/normalCard";
import {
  SpecialCardColor,
  SpecialCardSymbol,
} from "../types/cards/specialCard";
import shuffleArray from "../utils/shuffleArray";
import Card from "./card";
import NormalCard from "./normalCard";
import SpecialCard from "./specialCard";

class Deck {
  private deck: Card[];
  private discard: Card[];

  constructor() {
    this.deck = this.#createDeck();
    this.discard = [];
  }

  #createDeck() {
    const normalCardColors = Object.values(NormalCardColor);
    const normalCardSymbols = Object.values(NormalCardSymbol);

    const specialCardColors = Object.values(SpecialCardColor);
    const specialCardSymbols = Object.values(SpecialCardSymbol);

    let deck = [];

    // Creates the normal cards
    for (let i = 0; i < normalCardColors.length; i++) {
      for (let j = 0; j < normalCardSymbols.length; j++) {
        deck.push(new NormalCard(normalCardSymbols[j], normalCardColors[i]));
      }
    }

    // Creates the special cards
    for (let k = 0; k < gameConfig.specialCardsCount; k++) {
      for (let i = 0; i < specialCardColors.length; i++) {
        for (let j = 0; j < specialCardSymbols.length; j++) {
          deck.push(
            new SpecialCard(specialCardSymbols[j], specialCardColors[i])
          );
        }
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

  discardCards(cards: Card[]) {
    this.discard = this.discard.concat(cards);
  }
}

export default Deck;
