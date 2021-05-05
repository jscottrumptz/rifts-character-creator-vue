class Skill {
    constructor
    (
        name = '',
        required = false,
        known = false,
        preq = [],
        raceBonus = 0,
        initialValue = 0,
        perLevel = 0,
        occBonus = 0,
        skillBonus = 0
    )
    {
        this.name = name;
        this.required = required;
        this.known = known;
        this.preq = preq;
        this.raceBonus = raceBonus;
        this.initialValue = initialValue;
        this.perLevel = perLevel;
        this.occBonus = occBonus;
        this.skillBonus = skillBonus
    }
}

module.exports = Skill;