const DetectAmbush = require('./DetectAmbush');
const DetectConcealment = require('./DetectConcealment');
const Disguise = require('./Disguise');
const EscapeArtist = require('./EscapeArtist');
const Forgery = require('./Forgery');
const Impersonation = require('./Impersonation');
const Intelligence = require('./Intelligence');
const Interrogation = require('./Interrogation');
const PickLocksEspionage = require('./PickLocksEspionage');
const PickPocketsEspionage = require('./PickPocketsEspionage');
const Sniper = require('./Sniper');
const TrackingHumansAndRobots = require('./TrackingHumansAndRobots');
const UndercoverOps = require('./UndercoverOps');
const WildernessSurvivalEspionage = require('./WildernessSurvivalEspionage');

class Espionage {
    constructor(
        detectAmbush = new DetectAmbush,
        detectConcealment = new DetectConcealment,
        disguise = new Disguise,
        escapeArtist = new EscapeArtist,
        forgery = new Forgery,
        impersonation = new Impersonation,
        intelligence = new Intelligence,
        interrogation = new Interrogation,
        pickLocksEspionage = new PickLocksEspionage,
        pickPocketsEspionage = new PickPocketsEspionage,
        sniper = new Sniper,
        trackingHumansAndRobots = new TrackingHumansAndRobots,
        undercoverOps = new UndercoverOps,
        wildernessSurvivalEspionage = new WildernessSurvivalEspionage
    ) {
        this.detectAmbush = detectAmbush;
        this.detectConcealment = detectConcealment;
        this.disguise = disguise;
        this.escapeArtist = escapeArtist;
        this.forgery = forgery;
        this.impersonation = impersonation;
        this.intelligence = intelligence;
        this.interrogation = interrogation;
        this.pickLocksEspionage = pickLocksEspionage;
        this.pickPocketsEspionage = pickPocketsEspionage;
        this.sniper = sniper;
        this.trackingHumansAndRobots = trackingHumansAndRobots;
        this.undercoverOps = undercoverOps;
        this.wildernessSurvivalEspionage = wildernessSurvivalEspionage;
    }
}

module.exports = Espionage;