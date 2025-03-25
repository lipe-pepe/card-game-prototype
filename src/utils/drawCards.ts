import Card from "../classes/card";

const drawCards = (cards: (Card | null)[]) => {
  // To draw a card, its necessary 3 rows.
  const rows: string[][] = [[], [], []];

  cards.forEach((card) => {
    if (card != null) {
      rows[0].push("┌───┐");
      rows[1].push(`│ ${card.symbol} │`);
      rows[2].push("└───┘");
    } else {
      rows[0].push("┌ ─ ┐");
      rows[1].push(`     `);
      rows[2].push("└ ─ ┘");
    }
  });
  return rows.map((row) => row.join(" ")).join("\n");
};

export default drawCards;
