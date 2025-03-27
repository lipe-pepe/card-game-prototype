import NormalCard from "../classes/normalCard";
import Player from "../classes/player";
import SpecialCard from "../classes/specialCard";
import playerPlaceCard from "./playerPlaceCard";
import playerSelectCard from "./playerSelectCard";

const playerUseCard = async (player: Player) => {
  let selectedCard;
  let cardToDiscard;

  // 1. Select the card in hand
  console.log("\nSelect the card you'll use:\n");
  selectedCard = await playerSelectCard(player);

  // 2. Check card type
  if (selectedCard instanceof NormalCard) {
    cardToDiscard = await playerPlaceCard(player, selectedCard);
  } else if (selectedCard instanceof SpecialCard) {
  }

  return cardToDiscard;
};

export default playerUseCard;
