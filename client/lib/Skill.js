class Skill {
    constructor
    (
        name = '',
        required = false,
        known = false,
        preq = [],
        description = '',
        note = '',
        raceBonus = 0,
        initialValue = 0,
        perLvl = 0,
        occBonus = 0,
        skillBonus = 0
    )
    {
        this.name = name;
        this.required = required;
        this.known = known;
        this.preq = preq;
        this.description = description;
        this.note = note;
        this.raceBonus = raceBonus;
        this.initialValue = initialValue;
        this.perLvl = perLvl;
        this.occBonus = occBonus;
        this.skillBonus = skillBonus
    }
}

module.exports = Skill;