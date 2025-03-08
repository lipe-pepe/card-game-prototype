const Deck = require("../src/classes/deck");

test("Deck must not contain duplicate cards", () => {
  const deck = new Deck().deck; // Obtém o array de cartas

  const seenCards = new Set(); // Set para rastrear cartas já vistas

  deck.forEach((card) => {
    const cardKey = `${card.value}-${card.color}`;

    if (seenCards.has(cardKey)) {
      fail(`Duplicate card found: ${cardKey}`);
    }

    seenCards.add(cardKey);
  });

  expect(seenCards.size).toBe(deck.length); // Confirma que todas as cartas foram únicas
});

test;
