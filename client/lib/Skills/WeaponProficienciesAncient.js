const WPArchery = require('./WPArchery');
const WPAxe = require('./WPAxe');
const WPBlunt = require('./WPBlunt');
const WPChain = require('./WPChain');
const WPForked = require('./WPForked');
const WPGrapplingHook = require('./WPGrapplingHook');
const WPKnife = require('./WPKnife');
const WPPairedWeapons = require('./WPPairedWeapons');
const WPPolearm = require('./WPPolearm');
const WPQuickDraw = require('./WPQuickDraw');
const WPRopeWP = require('./WPRopeWP');
const WPShield = require('./WPShield');
const WPSpear = require('./WPSpear');
const WPStaff = require('./WPStaff');
const WPSword = require('./WPSword');
const WPTargeting = require('./WPTargeting');
const WPTomahawkThrowingAxe = require('./WPTomahawkThrowingAxe');
const WPWhip = require('./WPWhip');

class WeaponProficienciesAncient {
    constructor(
        wPArchery = new WPArchery,
        wPAxe = new WPAxe,
        wPBlunt = new WPBlunt,
        wPChain = new WPChain,
        wPForked = new WPForked,
        wPGrapplingHook = new WPGrapplingHook,
        wPKnife = new WPKnife,
        wPPairedWeapons = new WPPairedWeapons,
        wPPolearm = new WPPolearm,
        wPQuickDraw = new WPQuickDraw,
        wPRopeWP = new WPRopeWP,
        wPShield = new WPShield,
        wPSpear = new WPSpear,
        wPStaff = new WPStaff,
        wPSword = new WPSword,
        wPTargeting = new WPTargeting,
        wPTomahawkThrowingAxe = new WPTomahawkThrowingAxe,
        wPWhip = new WPWhip
    ) {
        this.wPArchery = wPArchery;
        this.wPAxe = wPAxe;
        this.wPBlunt = wPBlunt;
        this.wPChain = wPChain;
        this.wPForked = wPForked;
        this.wPGrapplingHook = wPGrapplingHook;
        this.wPKnife = wPKnife;
        this.wPPairedWeapons = wPPairedWeapons;
        this.wPPolearm = wPPolearm;
        this.wPQuickDraw = wPQuickDraw;
        this.wPRopeWP = wPRopeWP;
        this.wPShield = wPShield;
        this.wPSpear = wPSpear;
        this.wPStaff = wPStaff;
        this.wPSword = wPSword;
        this.wPTargeting = wPTargeting;
        this.wPTomahawkThrowingAxe = wPTomahawkThrowingAxe;
        this.wPWhip = wPWhip;
    }
}

module.exports = WeaponProficienciesAncient;