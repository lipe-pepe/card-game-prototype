import CardColor from "../types/cardColor";
import CardSymbol from "../types/cardSymbol";

class Card {
  symbol: CardSymbol;
  color: CardColor;

  constructor(symbol: CardSymbol, color: CardColor) {
    this.symbol = symbol;
    this.color = color;
  }

  getString() {
    return `\x1b[${this.color}m[${this.symbol}]\x1b[0m`;
  }
}

export default Card;
