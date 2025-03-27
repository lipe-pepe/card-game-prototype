import Card from "../classes/card";
import Player from "../classes/player";
import askQuestion from "./askQuestion";
import playerSelectCard from "./playerSelectCard";
import printError from "./printError";
import printHand from "./printHand";

const playerPlaceCard = async (player: Player, card: Card) => {
  let playerInput;
  let discardedCard;
  let selectedSlot = 0;
  let slotOptions = [];

  // 1. Select the slot
  console.log("\nIn which slot you want to place the card?\n");

  // Prints and sets the options
  for (let i = 1; i <= player.slots.length; i++) {
    if (player.slots[i - 1] != null) {
      console.log(`\t${i} - [${player.slots[i - 1]?.symbol}]`);
    } else {
      console.log(`\t${i} - Empty`);
    }
    slotOptions.push(i);
  }

  do {
    playerInput = await askQuestion("\nEnter number » ");
    if (slotOptions.includes(Number(playerInput))) {
      selectedSlot = Number(playerInput) - 1;
    } else {
      printError("Invalid option!");
    }
  } while (!slotOptions.includes(Number(playerInput)));

  // 2. Swap the cards or place the selected card
  if (card) {
    discardedCard = player.placeCard(selectedSlot, card);
    player.setDiscardCount(0);
    // Adds the card to the hand
    if (discardedCard != null) {
      player.addToHand(discardedCard);
    }
  }

  // 3. Discards a card if there are 4 cards in hand
  if (discardedCard != null) {
    printHand(player);

    console.log("\nSelect a card to discard:\n");
    discardedCard = await playerSelectCard(player);
  }
};

export default playerPlaceCard;
