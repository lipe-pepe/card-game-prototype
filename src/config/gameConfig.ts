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
//  - allowSpecialCards: Allows special cards, such as 'Steal' and 'Destroy' in the game.

export const gameConfig = {
  players: 2,
  maxInHand: 3,
  slots: 5,
  maxDiscards: 0,
  allowSpecialCards: true,
};

// TESTAR: AO INVÉS DO PLAYER SEMPRE PUXAR drawAmount cartas, ele puxa até completar sua mão. Consequentemente, pode usar cada carta da sua mão na sua jogada.
// Ou seja, pode usar carta, descartar carta ou passar a vez.
