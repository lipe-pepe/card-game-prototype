import Player from "../classes/player";
import askQuestion from "./askQuestion";
import printError from "./printError";

// This card allows the player to destroy (discard) an opponents card.

const specialCardDestroy = async (opponent: Player) => {
  let input;
  let discardedCard;
  let selectedSlot = 0;
  let slotOptions = [];

  // 1. Select the opponents slot
  console.log(`\nWhich of ${opponent.getName()}'s card will you destroy?\n`);

  // Prints and sets the options
  for (let i = 1; i <= opponent.slots.length; i++) {
    if (opponent.slots[i - 1] != null) {
      console.log(`\t${i} - ${opponent.slots[i - 1]?.getString()}`);
    } else {
      console.log(`\t${i} - Empty`);
    }
    slotOptions.push(i);
  }

  do {
    input = await askQuestion("\nEnter number » ");
    if (slotOptions.includes(Number(input))) {
      selectedSlot = Number(input) - 1;
    } else {
      printError("Invalid option!");
    }
  } while (!slotOptions.includes(Number(input)));

  // 2. Remove the selected card
  discardedCard = opponent.removeFromSlot(selectedSlot);
  return discardedCard;
};

export default specialCardDestroy;
