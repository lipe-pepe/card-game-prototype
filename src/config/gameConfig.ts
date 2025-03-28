// *** gameConfig ***
//
// The configuration file for the game. Changing these values changes the game. This file is important for
// testing purposes and understanding which game rules work best.
//
// properties:
//  - players: The number of players playing the game.
//  - maxInHand: The maximum number of cards in a player hand.
//  - slots: The number of card slots for each player.
//  - maxDiscards: The maximum number of discards before obligating the player to use a card. If set to 0, this feature isn't used
//  - specialCardsCount: How many of each special card will be in the deck. Special cards won't be added if set to 0.

export const gameConfig = {
  players: 2,
  maxInHand: 3,
  slots: 5,
  maxDiscards: 0,
  specialCardsCount: 2,
};
