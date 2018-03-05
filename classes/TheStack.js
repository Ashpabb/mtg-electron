class TheStack {
  constructor(gameState) {
    if (!(gameState instanceof GameState)) throw TypeError('TheStack must be constructed with a GameState')
    this.gameState = gameState;
    this.stack = [];
    this.priority = ''; //must be a summoner
  }
  resolveNext() {
    const spell = this.stack.pop();
    spell.execute()
  }
  shiftPriority() {

  }
  add(card) {
    this.stack.push(card);

    if (card.isSplitSecond()) {
      this.resolveNext();
    }
  }
  passPriority(card) {
    if (!card.canPassPriority()) this.resolve(card)
  }

  checkState() {

  }

  checkTargets() {
    
  }
}