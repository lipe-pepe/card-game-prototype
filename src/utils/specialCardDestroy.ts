import Card from "../classes/card";
import Player from "../classes/player";
import askQuestion from "./askQuestion";
import printError from "./printError";

// This card allows the player to destroy (discard) an opponent's card.
//
// Return: The card that was destroyed by the player

const specialCardDestroy = async (opponent: Player): Promise<Card> => {
  let input;
  let selectedCard: Card;
  let selectedSlot = 0;
  let slotOptions = [];

  // 1. Select the opponents slot
  console.log(`\nWhich of ${opponent.getName()}'s card will you destroy?\n`);

  const availableCards = opponent.slots.filter((slot) => slot != null);

  // Prints and sets the options
  for (let i = 1; i <= availableCards.length; i++) {
    console.log(`\t${i} - ${availableCards[i - 1]?.getString()}`);
    slotOptions.push(i);
  }

  do {
    input = await askQuestion("\nEnter number » ");
    if (slotOptions.includes(Number(input))) {
      // Finds the slot in the original slots array
      selectedCard = availableCards[Number(input) - 1];
      selectedSlot = opponent.slots.findIndex((card) => card === selectedCard);
    } else {
      printError("Invalid option!");
    }
  } while (!slotOptions.includes(Number(input)));

  // 2. Remove the selected card
  opponent.removeFromSlot(selectedSlot);

  // 3. Return the selected card to be discarded
  selectedCard = availableCards[Number(input) - 1];
  return selectedCard;
};

export default specialCardDestroy;
