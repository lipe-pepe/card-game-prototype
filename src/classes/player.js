class Player {
  constructor(name) {
    this.name = name;
    this.cardSlot1 = null;
    this.cardSlot2 = null;
    this.cardSlot3 = null;
    this.cardSlot4 = null;
    this.cardSlot5 = null;
  }

  #getSlotValue(slot) {
    return slot != null ? slot.value.toString() : "";
  }

  getCardsResult() {
    const expression =
      this.#getSlotValue(this.cardSlot1) +
      this.#getSlotValue(this.cardSlot2) +
      this.#getSlotValue(this.cardSlot3) +
      this.#getSlotValue(this.cardSlot4) +
      this.#getSlotValue(this.cardSlot5);
    return expression;
  }

  setLifeNumber(number1, number2) {
    const lifeNumber = number1.toString() + number2.toString();
    this.lifeNumber = parseInt(lifeNumber);
  }

  // Sets a card at a position and returns the card that was in that position before
  setCardSlot(position, card) {
    let previousCard;
    switch (position) {
      case 1:
        previousCard = this.cardSlot1;
        this.cardSlot1 = card;
        break;

      case 2:
        previousCard = this.cardSlot2;
        this.cardSlot2 = card;
        break;
      case 3:
        previousCard = this.cardSlot3;
        this.cardSlot3 = card;
        break;
      case 4:
        previousCard = this.cardSlot4;
        this.cardSlot4 = card;
        break;
      case 5:
        previousCard = this.cardSlot5;
        this.cardSlot5 = card;
        break;
      default:
        console.error("Invalid option for position");
    }
    return previousCard;
  }
}

export default Player;
