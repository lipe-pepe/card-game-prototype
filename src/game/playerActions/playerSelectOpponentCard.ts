import Card from "../../classes/card";
import Player from "../../classes/player";
import askQuestion from "./../../utils/askQuestion";
import printError from "../../ui/printError";

// *** playerSelectOpponentCard ***
//
// Inputs the player to select one the opponents's card.
//
// params :
//   - opponent: The player losing the card
//
// returns:
//   - selectedCard: The card the player selected

const playerSelectOpponentCard = async (opponent: Player): Promise<Card> => {
  let input;
  let selectedCard: Card;
  let slotOptions = [];

  console.log(`\nWhich of ${opponent.getName()}'s card do you select?\n`);

  const availableCards = opponent.slots.filter((slot) => slot != null);

  // Prints and sets the options
  for (let i = 1; i <= availableCards.length; i++) {
    console.log(`\t${i} - ${availableCards[i - 1]?.getString()}`);
    slotOptions.push(i);
  }

  do {
    input = await askQuestion("\nEnter number » ");
    if (!slotOptions.includes(Number(input))) {
      printError("Invalid option!");
    }
  } while (!slotOptions.includes(Number(input)));

  selectedCard = availableCards[Number(input) - 1];
  return selectedCard;
};

export default playerSelectOpponentCard;
