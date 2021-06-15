class Psionic {
    constructor(
        name = '',
        group = '',
        description = '',
        note = '',
        // special notes added by race or occ
        specialNote = '',
        gmNote = '',
        // array of prerequisite psionics
        preq = [],
        // prerequisite psionic type, ex. Master
        preqType = '',
        // text identifying prerequisites
        required = '',
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
        bonuses = '',
        // amount of picks needed to select psionic
        selectionCost = 1,
        // used to determine if needed by preq
        known = false,
        // used to lock previously selected psionics
        canRemove = true
    ) {
        this.name = name;
        this.group = group;
        this.description = description;
        this.note = note;
        this.gmNote = gmNote;
        this.specialNote = specialNote;
        this.preq = preq;
        this.preqType = preqType;
        this.required = required;
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
        this.selectionCost = selectionCost;
        this.known = known;
        this.canRemove = canRemove;
    }
}

module.exports = Psionic;