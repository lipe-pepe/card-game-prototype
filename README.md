# Card Game Prototype 🃏

This project is a prototype for a card game developed with Node.js, using Typescript. The goal of this project was testing the game design ideas before heading to proper development and adjusting the game rules.

## 💾 How to use

Clone this repository. To install packages, run:
> npm install

Then, to start the game, run:
> npm run dev

## 🎲 How to play

The game is a math game in which the main goal is to eliminate the opponents by making an expression whose result equals your opponent's life number.

### Configuration file

The file _config/gameConfig.ts_ contains the settings for the game. You can change these settings to adjust your game. Anyway, the settings currently there work the best for the game.

### Deck

The game works with a deck of cards. There are 4 colors (red, blue, green and yellow), and for each, there are cards numbered from 0 to 9 and cards with math operators (+, -, * and /). There are also special cards, the purple ones, but they need to be set 
in the game configuration file. This is what the deck looks like:

![image](https://github.com/user-attachments/assets/cac6ddbd-a551-4f37-8fdc-10840e565b07)

### Rules

This is the game flow:

1. Each player is randomized a life number between 0 and 99. Each has 6 slots to use to form a math expression.
2. At each player's turn:
  - They will draw up to 3 cards (maximum cards in hand).
  - They can use cards, by placing them in their slots
  - They can discard cards
  - They can pass their turn
3. Cards can be placed on top of others. In this case, the cards previously on the slot will be discarded.
4. The 6 slots will form a math expression. All slots must be used for a result to be calculated.
5. If the result of an expression equals an opponent's life number, that opponent is eliminated.
  - If the expression is invalid, there will be no result.

### Special Cards 🎴 

There are also 2 types of special cards, that can be used to mess with other players, adding more strategy to the game. These cards are:
- **Steal (S)**: Allows the player to steal one of their enemy's cards, keeping it.
- **Destroy (D)**: Allows the player to discard one of their enemy's cards.






