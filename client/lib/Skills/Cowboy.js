const Branding = require('./Branding');
const BreakingOrTamingWildHorse = require('./BreakingOrTamingWildHorse');
const HerdingCattle = require('./HerdingCattle');
const HorsemanshipCowboyCowboy = require('./HorsemanshipCowboyCowboy');
const HorsemanshipExoticAnimalsCowboy = require('./HorsemanshipExoticAnimalsCowboy');
const LoreAmericanIndiansCowboy = require('./LoreAmericanIndiansCowboy');
const LoreCattleOrAnimals = require('./LoreCattleOrAnimals');
const Roping = require('./Roping');
const TrickRiding = require('./TrickRiding');
const WPRopeCowboy = require('./WPRopeCowboy');

class Cowboy {
    constructor(
        branding = new Branding,
        breakingOrTamingWildHorse = new BreakingOrTamingWildHorse,
        herdingCattle = new HerdingCattle,
        horsemanshipCowboyCowboy = new HorsemanshipCowboyCowboy,
        horsemanshipExoticAnimalsCowboy = new HorsemanshipExoticAnimalsCowboy,
        loreAmericanIndiansCowboy = new LoreAmericanIndiansCowboy,
        loreCattleOrAnimals = new LoreCattleOrAnimals,
        roping = new Roping,
        trickRiding = new TrickRiding,
        wPRopeCowboy = new WPRopeCowboy
    ) {
        this.branding = branding;
        this.breakingOrTamingWildHorse = breakingOrTamingWildHorse;
        this.herdingCattle = herdingCattle;
        this.horsemanshipCowboyCowboy = horsemanshipCowboyCowboy;
        this.horsemanshipExoticAnimalsCowboy = horsemanshipExoticAnimalsCowboy;
        this.loreAmericanIndiansCowboy = loreAmericanIndiansCowboy;
        this.loreCattleOrAnimals = loreCattleOrAnimals;
        this.roping = roping;
        this.trickRiding = trickRiding;
        this.wPRopeCowboy = wPRopeCowboy;
    }
}

module.exports = Cowboy;