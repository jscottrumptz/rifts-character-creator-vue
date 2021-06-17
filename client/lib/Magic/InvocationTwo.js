const AuraOfPower = require('./AuraOfPower');
const Befuddle = require('./Befuddle');
const Chameleon = require('./Chameleon');
const Cleanse = require('./Cleanse');
const Climb = require('./Climb');
const CloakOfDarkness = require('./CloakOfDarkness');
const Concealment = require('./Concealment');
const DetectConcealment = require('./DetectConcealment');
const ExtinguishFire = require('./ExtinguishFire');
const Fear = require('./Fear');
const HeavyBreathing = require('./HeavyBreathing');
const Levitation = require('./Levitation');
const ManipulateObjects = require('./ManipulateObjects');
const MysticAlarm = require('./MysticAlarm');
const Shatter = require('./Shatter');
const ThrowingStones = require('./ThrowingStones');
const TumDead = require('./TumDead');

class InvocationTwo {
    constructor(
        auraOfPower = new AuraOfPower,
        befuddle = new Befuddle,
        chameleon = new Chameleon,
        cleanse = new Cleanse,
        climb = new Climb,
        cloakOfDarkness = new CloakOfDarkness,
        concealment = new Concealment,
        detectConcealment = new DetectConcealment,
        extinguishFire = new ExtinguishFire,
        fear = new Fear,
        heavyBreathing = new HeavyBreathing,
        levitation = new Levitation,
        manipulateObjects = new ManipulateObjects,
        mysticAlarm = new MysticAlarm,
        shatter = new Shatter,
        throwingStones = new ThrowingStones,
        tumDead = new TumDead
    ) {
        this.auraOfPower = auraOfPower;
        this.befuddle = befuddle;
        this.chameleon = chameleon;
        this.cleanse = cleanse;
        this.climb = climb;
        this.cloakOfDarkness = cloakOfDarkness;
        this.concealment = concealment;
        this.detectConcealment = detectConcealment;
        this.extinguishFire = extinguishFire;
        this.fear = fear;
        this.heavyBreathing = heavyBreathing;
        this.levitation = levitation;
        this.manipulateObjects = manipulateObjects;
        this.mysticAlarm = mysticAlarm;
        this.shatter = shatter;
        this.throwingStones = throwingStones;
        this.tumDead = tumDead;
    }
}

module.exports = InvocationTwo;