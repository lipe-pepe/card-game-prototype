class Card {
  symbol: string;
  color: string;

  constructor(symbol: string, color: string) {
    this.symbol = symbol;
    this.color = color;
  }

  getString() {
    return `\x1b[${this.color}m[${this.symbol}]\x1b[0m`;
  }
}

export default Card;
