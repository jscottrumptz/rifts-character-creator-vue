const Attributes = require('./Attributes');
const Bonuses = require('./Bonuses');
const Chances = require('./Chances');
const Currencies = require('./Currencies');
const Cybernetics = require('./Cybernetics');
const HandToHand = require('./HandToHand');
const Info = require('./Info');
const Inventory = require('./Inventory');
const OCC = require('./OCC');
const Psionics = require('./Psionics');
const Race = require('./Race');
const Saves = require('./Saves');
const SecondaryStats = require('./SecondaryStats');
const Skills = require('./Skills');
const Spells = require('./Spells');

class Character {
    constructor(
        info = new Info,
        race = new Race,
        occ = new OCC,
        attributes = new Attributes,
        secondaryStats = new SecondaryStats,
        bonuses = new Bonuses,
        saves = new Saves,
        chances = new Chances,
        currencies = new Currencies,
        psionics = new Psionics,
        spells = new Spells,
        handToHand = new HandToHand,
        skills = new Skills,
        abilities = {},
        cybernetics = new Cybernetics,
        inventory = new Inventory
    ) {
        this.info = info;
        this.race = race;
        this.occ = occ;
        this.attributes = attributes;
        this.secondaryStats = secondaryStats;
        this.bonuses = bonuses;
        this.saves = saves;
        this.chances = chances;
        this.currencies = currencies;
        this.psionics = psionics;
        this.spells = spells;
        this.handToHand = handToHand;
        this.skills = skills;
        this.abilities = abilities;
        this.cybernetics = cybernetics;
        this.inventory = inventory;
    };


    getInfo() {
        return this.info;
    };

    getRace() {
        return this.race;
    };

    getOcc() {
        return this.occ;
    };

    getAttributes() {
        return this.attributes;
    };

    getSecondaryStats() {
        return this.secondaryStats;
    };

    getBonuses() {
        return this.bonuses;
    };

    getSaves() {
        return this.saves;
    };

    getChances() {
        return this.chances;
    };

    getCurrency() {
        return this.currency;
    };

    getPsionics() {
        return this.psionics;
    };

    getSpells() {
        return this.spells;
    };

    getHandToHand() {
        return this.handToHand;
    }

    getSkills() {
        return this.skills;
    };

    getAbilities() {
        return this.abilities;
    };

    getCybernetics() {
        return this.cybernetics;
    };

    getInventory() {
        return this.inventory;
    };
};

module.exports = Character;