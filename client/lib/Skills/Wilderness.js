const BoatBuilding = require('./BoatBuilding');
const Carpentry = require('./Carpentry');
const Dowsing = require('./Dowsing');
const Fasting = require('./Fasting');
const Hunting = require('./Hunting');
const IdentifyPlantsAndFruits = require('./IdentifyPlantsAndFruits');
const LandNavigation = require('./LandNavigation');
const PreserveFood = require('./PreserveFood');
const SkinAndPrepareAnimalHides = require('./SkinAndPrepareAnimalHides');
const Spelunking = require('./Spelunking');
const TrackAndTrapAnimals = require('./TrackAndTrapAnimals');
const WildernessSurvivalWilderness = require('./WildernessSurvivalWilderness');

class Wilderness {
    constructor(
        boatBuilding = new BoatBuilding,
        carpentry = new Carpentry,
        dowsing = new Dowsing,
        fasting = new Fasting,
        hunting = new Hunting,
        identifyPlantsAndFruits = new IdentifyPlantsAndFruits,
        landNavigation = new LandNavigation,
        preserveFood = new PreserveFood,
        skinAndPrepareAnimalHides = new SkinAndPrepareAnimalHides,
        spelunking = new Spelunking,
        trackAndTrapAnimals = new TrackAndTrapAnimals,
        wildernessSurvivalWilderness = new WildernessSurvivalWilderness
    ) {
        this.boatBuilding = boatBuilding;
        this.carpentry = carpentry;
        this.dowsing = dowsing;
        this.fasting = fasting;
        this.hunting = hunting;
        this.identifyPlantsAndFruits = identifyPlantsAndFruits;
        this.landNavigation = landNavigation;
        this.preserveFood = preserveFood;
        this.skinAndPrepareAnimalHides = skinAndPrepareAnimalHides;
        this.spelunking = spelunking;
        this.trackAndTrapAnimals = trackAndTrapAnimals;
        this.wildernessSurvivalWilderness = wildernessSurvivalWilderness;
    }
}

module.exports = Wilderness;