import Card from "../classes/card";
import NormalCard from "../classes/normalCard";
import Player from "../classes/player";
import SpecialCard from "../classes/specialCard";
import { SpecialCardSymbol } from "../types/cards/specialCard";
import playerPlaceCard from "./playerPlaceCard";
import playerSelectCard from "./playerSelectCard";
import playerSelectOpponent from "./playerSelectOpponent";
import playerSelectOpponentCard from "./playerSelectOpponentCard";

// *** playerUseCard ***
//
// Handles the use of card selected by the player. If it is a normal card, places it.
// If it is a special card, uses its function
//
// params :
//   - player: The player making the move
//   - allPlayers: The list of all players in the match
//
// returns:
//   - cardsToDiscard: An array with cards to be discarded

const playerUseCard = async (
  player: Player,
  allPlayers: Player[]
): Promise<Card[]> => {
  let selectedCard;
  let selectedOpponentCard;
  let cardsToDiscard: Card[] = [];

  // 1. Select the card in hand
  console.log("\nSelect the card you'll use:\n");
  selectedCard = await playerSelectCard(player);

  // 2. Check card type
  if (selectedCard instanceof NormalCard) {
    await playerPlaceCard(player, selectedCard);
  } else if (selectedCard instanceof SpecialCard) {
    // Discards the special card
    cardsToDiscard.push(selectedCard);

    // Select the other player
    const selectedPlayer = await playerSelectOpponent(player, allPlayers);

    // Select the opponents card
    selectedOpponentCard = await playerSelectOpponentCard(selectedPlayer);

    switch (selectedCard.symbol) {
      case SpecialCardSymbol.Destroy:
        // Removes card from the opponents slot
        selectedPlayer.removeCardFromSlot(selectedOpponentCard);
        cardsToDiscard.push(selectedOpponentCard);
        cardsToDiscard.push(selectedCard);
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

  return cardsToDiscard;
};

export default playerUseCard;
