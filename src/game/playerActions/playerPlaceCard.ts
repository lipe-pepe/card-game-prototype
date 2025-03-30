import Card from "../../classes/card";
import Player from "../../classes/player";
import enterNumber from "../../utils/enterNumber";

// *** playerPlaceCard ***
//
// Handles the player placing a card in one of their slots. If the slot is empty, only places it.
// If the slot is taken, swaps the card in the slot for the new one in the hand.
//
// params :
//   - player: The player placing the card
//   - card: The card to be placed

const playerPlaceCard = async (
  player: Player,
  card: Card
): Promise<Card | null> => {
  let input;
  let selectedSlot = 0;
  let options = [];

  // 1. Select the slot
  console.log("\nIn which slot you want to place the card?\n");

  // Prints and sets the options
  for (let i = 1; i <= player.slots.length; i++) {
    if (player.slots[i - 1] != null) {
      console.log(`\t${i} - [${player.slots[i - 1]?.symbol}]`);
    } else {
      console.log(`\t${i} - Empty`);
    }
    options.push(i);
  }

  input = await enterNumber(options);
  selectedSlot = Number(input) - 1;

  // 2. Place the selected card
  const discardedCard = player.placeCard(selectedSlot, card);
  return discardedCard || null;
};

export default playerPlaceCard;
