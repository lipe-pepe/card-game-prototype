import Card from "../classes/card";
import Player from "../classes/player";
import CardSymbol from "../types/cardSymbol";

const drawCards = (cards: Card[]) => {
  // To draw a card, its necessary 3 rows.
  const rows: string[][] = [[], [], []];
  cards.forEach((card) => {
    rows[0].push("┌───┐");
    rows[1].push(`│ ${card.symbol} │`);
    rows[2].push("└───┘");
  });
  return rows.map((row) => row.join(" ")).join("\n");
};

const drawGame = (player1: Player, player2: Player) => {
  console.log(drawCards(player1.hand));
  console.log(drawCards(player2.hand));
};

export default drawGame;
