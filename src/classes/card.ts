import CardColor from "../types/cardColor";
import CardSymbol from "../types/cardSymbol";

class Card {
  symbol: CardSymbol;
  color: CardColor;

  constructor(symbol: CardSymbol, color: CardColor) {
    this.symbol = symbol;
    this.color = color;
  }
}

export default Card;
