const SkillGroup = require('./SkillGroup');
const StatValue = require('./StatValue')

class Skills {
    constructor
        (
            bonus = new StatValue,
            total = 0,
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
            weaponAncient = new SkillGroup,
            weaponModern = new SkillGroup,
            wilderness = new SkillGroup
        ) {
        this.bonus = bonus;
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

        // SCIENCE
        this.science = science;
        this.science.name = 'Science Skills';
        // this.science.anthropology = new Skill;
        // this.science.anthropology.name = 'Anthropology';
        // this.science.mathmaticsBasic = new Skill;
        // this.science.mathmaticsBasic.name = 'Mathmatics: Basic';
        // this.science.mathmaticsAdvanced = new Skill;
        // this.science.mathmaticsAdvanced.name = 'Mathmatics: Advanced';
        // this.science.mathmaticsAdvanced.preq = ['mathmaticsBasic'];
        this.technical = technical;
        this.weaponAncient = weaponAncient;
        this.weaponModern = weaponModern;
        this.wilderness = wilderness;
    }
}

module.exports = Skills;