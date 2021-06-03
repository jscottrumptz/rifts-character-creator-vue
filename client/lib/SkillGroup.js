class SkillGroup {
    constructor
    (
        name = '',
        min = 0,
        available = ['any'],
        unavailable = [],
        free = [],
        only = [],
        cyberneticBonus = 0,
        raceBonus = 0,
        occBonus = 0,
        skillBonus = 0
    )
    {
        this.name = name;
        this.min = min;
        this.available = available;
        this.unavailable = unavailable;
        this.only = only;
        this.free = free;
        this.cyberneticBonus = cyberneticBonus;
        this.raceBonus = raceBonus;
        this.occBonus = occBonus;
        this.skillBonus = skillBonus
    }
}

module.exports = SkillGroup;