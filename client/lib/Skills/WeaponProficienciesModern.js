const WPHandguns = require('./WPHandguns');
const WPBoltActionRifleHuntingOrSnipingOrShotguns = require('./WPBoltActionRifleHuntingOrSnipingOrShotguns');
const WPEnergyPistol = require('./WPEnergyPistol');
const WPEnergyRifle = require('./WPEnergyRifle');
const WPHarpoonAndSpeargun = require('./WPHarpoonAndSpeargun');
const WPHeavyMilitary = require('./WPHeavyMilitary');
const WPHeavyMD = require('./WPHeavyMD');
const WPMilitaryFlamethrowers = require('./WPMilitaryFlamethrowers');
const WPRifles = require('./WPRifles');
const WPSharpshooting = require('./WPSharpshooting');
const WPShotguns = require('./WPShotguns');
const WPSubMachineguns = require('./WPSubMachineguns');

class WeaponProficienciesModern {
    constructor(
        wPHandguns = new WPHandguns,
        wPBoltActionRifleHuntingOrSnipingOrShotguns = new WPBoltActionRifleHuntingOrSnipingOrShotguns,
        wPEnergyPistol = new WPEnergyPistol,
        wPEnergyRifle = new WPEnergyRifle,
        wPHarpoonAndSpeargun = new WPHarpoonAndSpeargun,
        wPHeavyMilitary = new WPHeavyMilitary,
        wPHeavyMD = new WPHeavyMD,
        wPMilitaryFlamethrowers = new WPMilitaryFlamethrowers,
        wPRifles = new WPRifles,
        wPSharpshooting = new WPSharpshooting,
        wPShotguns = new WPShotguns,
        wPSubMachineguns = new WPSubMachineguns
    ) {
        this.wPHandguns = wPHandguns;
        this.wPBoltActionRifleHuntingOrSnipingOrShotguns = wPBoltActionRifleHuntingOrSnipingOrShotguns;
        this.wPEnergyPistol = wPEnergyPistol;
        this.wPEnergyRifle = wPEnergyRifle;
        this.wPHarpoonAndSpeargun = wPHarpoonAndSpeargun;
        this.wPHeavyMilitary = wPHeavyMilitary;
        this.wPHeavyMD = wPHeavyMD;
        this.wPMilitaryFlamethrowers = wPMilitaryFlamethrowers;
        this.wPRifles = wPRifles;
        this.wPSharpshooting = wPSharpshooting;
        this.wPShotguns = wPShotguns;
        this.wPSubMachineguns = wPSubMachineguns;
    }
}

module.exports = WeaponProficienciesModern;