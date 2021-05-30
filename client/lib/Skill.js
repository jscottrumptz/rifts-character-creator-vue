class Skill {
    constructor
    (
        name = '',
        // can this be selected as a secondary skill
        isSecondary = false,
        // toggle to check if required for another skill
        canRemove = true,
        // toggle to see if requirements met
        canSelect = true,
        // toggle to see if auto assigned by an OCC or Race
        known = false,
        // toggle to see if it can be selected again
        takeTwice = false,
        // bonus for selecting the skill twice
        takeTwiceBonus = 0,
        // text that conveys requirements during skill selection
        required = '',
        // array of required skills
        preq = [],
        description = '',
        note = '',
        group = '',
        // text the conveys skill bonuses during skill selection
        bonus = '',
        // text that conveys skill penalties during skill selection
        penalty = '',
        // text that conveys OCC Group requirements
        reqOCCGroup = '',
        base = 0,
        baseTwo = 0,
        perLvl = 0,
        raceBonus = 0,
        occBonus = 0,
        skillBonus = 0
    )
    {
        this.name = name;
        this.isSecondary = isSecondary;
        this.canRemove = canRemove;
        this.canSelect = canSelect;
        this.known = known;
        this.takeTwice = takeTwice;
        this.takeTwiceBonus = takeTwiceBonus;
        this.required = required;
        this.preq = preq;
        this.description = description;
        this.note = note;
        this.group = group;
        this.bonus = bonus;
        this.penalty = penalty;
        this.reqOCCGroup = reqOCCGroup;
        this.base = base;
        this.baseTwo = baseTwo;
        this.perLvl = perLvl;
        this.raceBonus = raceBonus;
        this.occBonus = occBonus;
        this.skillBonus = skillBonus
    }
}

module.exports = Skill;