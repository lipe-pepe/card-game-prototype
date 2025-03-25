class Player {
  name: string;
  lifeNumber: number;

  constructor(name: string) {
    this.name = name;

    // Sets the player's life number to a random int between 0 and 99
    this.lifeNumber = this.#getRandomInt(100);
  }

  #getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}

export default Player;
