import Card from "../classes/card";

const drawCards = (cards: (Card | null)[]) => {
  // To draw a card, its necessary 3 rows.
  const rows: string[][] = [[], [], []];

  cards.forEach((card) => {
    if (card != null) {
      rows[0].push(`\x1b[${card.color}m┌───┐\x1b[0m`);
      rows[1].push(`\x1b[${card.color}m│ ${card.symbol} │\x1b[0m`);
      rows[2].push(`\x1b[${card.color}m└───┘\x1b[0m`);
    } else {
      rows[0].push("┌ ─ ┐");
      rows[1].push(`     `);
      rows[2].push("└ ─ ┘");
    }
  });
  return rows.map((row) => row.join(" ")).join("\n");
};

export default drawCards;
