class BaseCard {
  constructor(name, cost, color, type) {
    this.name = name;
    this.cost = cost;
    this.colors = [...colors];
    this.type = type;
  }
  castingSpeed() {
  }
}

class Card extends BaseCard {
  constructor(name, cost, color, type, rules = []) {
    super(name, cost, color, type);
  }
}

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

    else if ()
  }
  passPriority() {
    this.priority = 
  }

  checkState() {

  }
}

class Summoner {
  constructor({
    name,
    life,
    poison,
  })
}

class GameState {
  constuctor(
    {
      startingLife: 20,
      maxPoison: 10,
      maxCommander: 21,
      minLife: 0,
    },
    ...summoners) {

    this.startingLife = startingLife;
    this.maxPoison = maxPoison;
    this.maxCommander = maxCommander;
    this.minLife = minLife;

    this.summoners = this.summonerInit(summoners);
  }
  summonerInit(...summoners) {
    return summoners.map(e => new Summoner(Object.assign(
      {},
      {
        name: e,
        life: this.startingLife,
        
      });
    );
  }
}

class G_Commander

