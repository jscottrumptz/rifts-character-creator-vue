const Brewing = require('./Brewing');
const Cook = require('./Cook');
const Dance = require('./Dance');
const Fishing = require('./Fishing');
const Gardening = require('./Gardening');
const Housekeeping = require('./Housekeeping');
const PlayMusicalInstrument = require('./PlayMusicalInstrument');
const RecycleDomestic = require('./RecycleDomestic');
const SewingOrTailoring = require('./SewingOrTailoring');
const SingDomestic = require('./SingDomestic');
const WardrobeandGrooming = require('./WardrobeandGrooming');

class Domestic {
    constructor(
        brewing = new Brewing,
        cook = new Cook,
        dance = new Dance,
        fishing = new Fishing,
        gardening = new Gardening,
        housekeeping = new Housekeeping,
        playMusicalInstrument = new PlayMusicalInstrument,
        recycleDomestic = new RecycleDomestic,
        sewingOrTailoring = new SewingOrTailoring,
        singDomestic = new SingDomestic,
        wardrobeandGrooming = new WardrobeandGrooming
    ) {
        this.brewing = brewing;
        this.cook = cook;
        this.dance = dance;
        this.fishing = fishing;
        this.gardening = gardening;
        this.housekeeping = housekeeping;
        this.playMusicalInstrument = playMusicalInstrument;
        this.recycleDomestic = recycleDomestic;
        this.sewingOrTailoring = sewingOrTailoring;
        this.singDomestic = singDomestic;
        this.wardrobeandGrooming = wardrobeandGrooming;

    }
}

module.exports = Domestic;