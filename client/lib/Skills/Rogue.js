const Cardsharp = require('./Cardsharp');
const ComputerHacking = require('./ComputerHacking');
const Concealment = require('./Concealment');
const FindContrabandRogue = require('./FindContrabandRogue');
const GamblingStandard = require('./GamblingStandard');
const GamblingDirtyTricks = require('./GamblingDirtyTricks');
const IDUndercoverAgents = require('./IDUndercoverAgents');
const ImitateVoicesandSounds = require('./ImitateVoicesandSounds');
const Palming = require('./Palming');
const PickLocksRogue = require('./PickLocksRogue');
const PickPocketsRogue = require('./PickPocketsRogue');
const ProwlRogue = require('./ProwlRogue');
const Roadwise = require('./Roadwise');
const SafeCracking = require('./SafeCracking');
const Seduction = require('./Seduction');
const Streetwise = require('./Streetwise');
const Tailing = require('./Tailing');

class Rogue {
    constructor(
        cardsharp = new Cardsharp,
        computerHacking = new ComputerHacking,
        concealment = new Concealment,
        findContrabandRogue = new FindContrabandRogue,
        gamblingStandard = new GamblingStandard,
        gamblingDirtyTricks = new GamblingDirtyTricks,
        iDUndercoverAgents = new IDUndercoverAgents,
        imitateVoicesandSounds = new ImitateVoicesandSounds,
        palming = new Palming,
        pickLocksRogue = new PickLocksRogue,
        pickPocketsRogue = new PickPocketsRogue,
        prowlRogue = new ProwlRogue,
        roadwise = new Roadwise,
        safeCracking = new SafeCracking,
        seduction = new Seduction,
        streetwise = new Streetwise,
        tailing = new Tailing
    ) {
        this.cardsharp = cardsharp;
        this.computerHacking = computerHacking;
        this.concealment = concealment;
        this.findContrabandRogue = findContrabandRogue;
        this.gamblingStandard = gamblingStandard;
        this.gamblingDirtyTricks = gamblingDirtyTricks;
        this.iDUndercoverAgents = iDUndercoverAgents;
        this.imitateVoicesandSounds = imitateVoicesandSounds;
        this.palming = palming;
        this.pickLocksRogue = pickLocksRogue;
        this.pickPocketsRogue = pickPocketsRogue;
        this.prowlRogue = prowlRogue;
        this.roadwise = roadwise;
        this.safeCracking = safeCracking;
        this.seduction = seduction;
        this.streetwise = streetwise;
        this.tailing = tailing;
    }
}

module.exports = Rogue;