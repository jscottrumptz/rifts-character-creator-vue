const Communication = require('./Communication');
const Cowboy = require('./Cowboy');
const Domestic = require('./Domestic');
const Electrical = require('./Electrical');
const Espionage = require('./Espionage');
const Horsemanship = require('./Horsemanship');
const Mechanical = require('./Mechanical');
const Medical = require('./Medical');
const Military = require('./Military');
const Physical = require('./Physical');
const Pilot = require('./Pilot');
const PilotRelated = require('./PilotRelated');
const Rogue = require('./Rogue');
const Science = require('./Science');
const Technical = require('./Technical');
const WeaponProficienciesAncient = require('./WeaponProficienciesAncient');
const WeaponProficienciesModern = require('./WeaponProficienciesModern');
const Wilderness = require('./Wilderness');


class PickSkills {
    constructor(
        communication = new Communication,
        cowboy = new Cowboy,
        domestic = new Domestic,
        electrical = new Electrical,
        espionage = new Espionage,
        horsemanship = new Horsemanship,
        mechanical = new Mechanical,
        medical = new Medical,
        military = new Military,
        physical = new Physical,
        pilot = new Pilot,
        pilotRelated = new PilotRelated,
        rogue = new Rogue,
        science = new Science,
        technical = new Technical,
        weaponProficienciesAncient = new WeaponProficienciesAncient,
        weaponProficienciesModern = new WeaponProficienciesModern,
        wilderness = new Wilderness
    ) {
        this.communication = communication;
        this.cowboy = cowboy;
        this.domestic = domestic;
        this.electrical = electrical;
        this.espionage = espionage;
        this.horsemanship = horsemanship;
        this.mechanical = mechanical;
        this.medical = medical;
        this.military = military;
        this.physical = physical;
        this.pilot = pilot;
        this.pilotRelated = pilotRelated;
        this.rogue = rogue;
        this.science = science;
        this.technical = technical;
        this.weaponProficienciesAncient = weaponProficienciesAncient;
        this.weaponProficienciesModern = weaponProficienciesModern;
        this.wilderness = wilderness;
    }
}

module.exports = PickSkills;