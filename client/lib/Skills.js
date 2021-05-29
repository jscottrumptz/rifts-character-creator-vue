const SkillGroup = require('./SkillGroup');
const StatValue = require('./StatValue')

class Skills {
    constructor
        (
            bonus = new StatValue,
            known = {},
            selected = false,
            total = 5,
            communications = new SkillGroup,
            cowboy = new SkillGroup,
            domestic = new SkillGroup,
            electrical = new SkillGroup,
            espionage = new SkillGroup,
            horsemanship = new SkillGroup,
            mechanical = new SkillGroup,
            medical = new SkillGroup,
            military = new SkillGroup,
            physical = new SkillGroup,
            pilot = new SkillGroup,
            pilotRelated = new SkillGroup,
            rogue = new SkillGroup,
            science = new SkillGroup,
            technical = new SkillGroup,
            weaponProficienciesAncient = new SkillGroup,
            weaponProficienciesModern = new SkillGroup,
            wilderness = new SkillGroup
        ) {
        this.bonus = bonus;
        this.known = known;
        this.selected = selected;
        this.total = total;
        this.communications = communications;
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

module.exports = Skills;