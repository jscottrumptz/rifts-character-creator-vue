const BoatBuilding = require('./BoatBuilding');
const Carpentry = require('./Carpentry');
const Dowsing = require('./Dowsing');
const Fasting = require('./Fasting');
const Hunting = require('./Hunting');
const IdentifyPlantsandFruits = require('./IdentifyPlantsandFruits');
const LandNavigation = require('./LandNavigation');
const PreserveFood = require('./PreserveFood');
const SkinandPrepareAnimalHides = require('./SkinandPrepareAnimalHides');
const Spelunking = require('./Spelunking');
const TrackandTrapAnimals = require('./TrackandTrapAnimals');
const WildernessSurvivalWilderness = require('./WildernessSurvivalWilderness');

class Wilderness {
    constructor(
        boatBuilding = new BoatBuilding,
        carpentry = new Carpentry,
        dowsing = new Dowsing,
        fasting = new Fasting,
        hunting = new Hunting,
        identifyPlantsandFruits = new IdentifyPlantsandFruits,
        landNavigation = new LandNavigation,
        preserveFood = new PreserveFood,
        skinandPrepareAnimalHides = new SkinandPrepareAnimalHides,
        spelunking = new Spelunking,
        trackandTrapAnimals = new TrackandTrapAnimals,
        wildernessSurvivalWilderness = new WildernessSurvivalWilderness
    ) {
        this.boatBuilding = boatBuilding;
        this.carpentry = carpentry;
        this.dowsing = dowsing;
        this.fasting = fasting;
        this.hunting = hunting;
        this.identifyPlantsandFruits = identifyPlantsandFruits;
        this.landNavigation = landNavigation;
        this.preserveFood = preserveFood;
        this.skinandPrepareAnimalHides = skinandPrepareAnimalHides;
        this.spelunking = spelunking;
        this.trackandTrapAnimals = trackandTrapAnimals;
        this.wildernessSurvivalWilderness = wildernessSurvivalWilderness;
    }
}

module.exports = Wilderness;