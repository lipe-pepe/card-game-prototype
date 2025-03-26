import Player from "../classes/player";
import askQuestion from "./askQuestion";
import drawHand from "./drawHand";
import playerSelectCard from "./playerSelectCard";

const playerPlaceCard = async (player: Player) => {
  let playerInput;
  let discardedCard;
  let selectedCard;
  let selectedSlot = 0;
  let slotOptions = [];

  // 1. Select the card in hand
  console.log("\nSelect the card you'll use:\n");
  selectedCard = await playerSelectCard(player);

  // 2. Select the slot
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
      console.log("■ Invalid option!");
    }
  } while (!slotOptions.includes(Number(playerInput)));

  // 3. Swap the cards or place the selected card
  if (selectedCard) {
    discardedCard = player.placeCard(selectedSlot, selectedCard);
    // Adds the card to the hand
    if (discardedCard != null) {
      player.addToHand(discardedCard);
    }
  }

  // 4. Discards a card if there are 4 cards in hand
  if (discardedCard != null) {
    drawHand(player);

    console.log("\nSelect a card to discard:\n");
    discardedCard = await playerSelectCard(player);
  }
};

export default playerPlaceCard;
