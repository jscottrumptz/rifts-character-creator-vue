class Psionic {
    constructor(
        name = '',
        group = '',
        description = '',
        note = '',
        gmNote = '',
        preq = '',
        preqOther = '',
        preqType = '',
        range = '',
        duration = '',
        cost = '',
        damage = '',
        savingThrow = '',
        lengthOfTrance = '',
        baseSkill = '',
        limitations = '',
        attacksPerMelee = '',
        recovers = '',
        penalties = '',
        bonuses = ''
    ) {
        this.name = name;
        this.group = group;
        this.description = description;
        this.note = note;
        this.gmNote = gmNote;
        this.preq = preq;
        this.preqOther = preqOther;
        this.preqType = preqType;
        this.range = range;
        this.duration = duration;
        this.cost = cost;
        this.damage = damage;
        this.savingThrow = savingThrow;
        this.lengthOfTrance = lengthOfTrance;
        this.baseSkill = baseSkill;
        this.limitations = limitations;
        this.attacksPerMelee = attacksPerMelee;
        this.recovers = recovers;
        this.penalties = penalties;
        this.bonuses = bonuses;
    }
}

module.exports = Psionic;