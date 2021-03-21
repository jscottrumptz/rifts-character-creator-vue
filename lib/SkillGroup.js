class SkillGroup {
    constructor
    (
        name = '',
        min = 0,
        max = 0,
        current = 0,
        bonus = 0,
        required = false,
        known = [],
        raceBonus = 0,
        occBonus = 0,
        skillBonus = 0
    )
    {
        this.name = name;
        this.min = min;
        this.max = max;
        this.current = current;
        this.bonus = bonus;
        this.required = required;
        this.known = known;
        this.raceBonus = raceBonus;
        this.occBonus = occBonus;
        this.skillBonus = skillBonus
    }
}

module.exports = SkillGroup;