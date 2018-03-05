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

    this.banList = new BanList({
      borders: ['silver'],
      sets: [],
      alaCard: [],
    });

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

/*
class G_Commander {
  constructor(...summoners) {
    super({
      startingLife: 40,
      maxPoison: 20,
      maxCommander: 21,
      minLife: 0,
    });

    this.banList = []
  }
  setCommander() {

  }
}
*/

/* class G_TinyLeaders extends G_Commander */
/* class 