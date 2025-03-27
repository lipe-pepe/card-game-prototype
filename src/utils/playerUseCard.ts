import NormalCard from "../classes/normalCard";
import Player from "../classes/player";
import SpecialCard from "../classes/specialCard";
import { SpecialCardSymbol } from "../types/cards/specialCard";
import playerPlaceCard from "./playerPlaceCard";
import playerSelectCard from "./playerSelectCard";
import playerSelectOpponent from "./playerSelectOpponent";
import specialCardDestroy from "./specialCardDestroy";

const playerUseCard = async (player: Player, allPlayers: Player[]) => {
  let selectedCard;
  let cardToDiscard;

  // 1. Select the card in hand
  console.log("\nSelect the card you'll use:\n");
  selectedCard = await playerSelectCard(player);

  // 2. Check card type
  if (selectedCard instanceof NormalCard) {
    cardToDiscard = await playerPlaceCard(player, selectedCard);
  } else if (selectedCard instanceof SpecialCard) {
    // Select the other player
    const selectedPlayer = await playerSelectOpponent(player, allPlayers);
    console.log(selectedPlayer);

    switch (selectedCard.symbol) {
      case SpecialCardSymbol.Destroy:
        if (selectedPlayer)
          cardToDiscard = await specialCardDestroy(selectedPlayer);
        break;
      //   case SpecialCardSymbol.Change:
      //     break;
      //   case SpecialCardSymbol.Steal:
      //     break;
      default:
        console.error("Invalid special card option!");
    }
  }

  player.setDiscardCount(0);

  return cardToDiscard;
};

export default playerUseCard;
