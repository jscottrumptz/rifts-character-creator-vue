const Spell = require('../Spell');

class LifeSource extends Spell {
    constructor() {
        super();
        this.name = 'Life Source';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self.`;
        this.duration = `Instant.`;
        this.cost = `Special: 2 P.P.E. plus Hit Points or S.D.C.`;
        this.savingThrow = `Not applicable.`;
        this.description = `    By using the Life Source spell, the mage is able to convert his own life energy (S.D.C. and/or Hit Points) into P.P.E. points for casting spells. Casting Life Source costs two P.P.E. points and inflicts physical pain and weakness upon the spell caster. The sacrifice of portions of his own life force in order to gain P.P.E. racks the body with sharp pain and invisible physical damage. Obviously, this is a spell of desperation. 
    In game terms, the willing sacrifice of two S.D.C. points (counts as S.D.C. damage) makes available one P.P.E. point. The willing sacrifice of one Hit Point makes available one P.P.E. point. Unlike the Indian Shaman power (see Rifts® Spirit West), the mage can accidentally kill himself by burning up all his Hit Points (down to zero). If Hit Points reach zero (even if S.D.C. points are still available), the character falls into a coma and is -20% to save vs coma and death! Furthermore, for every ten points of S.D.C. or five Hit Points of damage to the spell caster (from this spell), he becomes weak and is -2 on all rolls for bonuses, saving throws and combat (initiative, strike, etc.), while skill rolls are -10%. At some point, the character can do little more than sit or lay in a heap to mumble spells and speak - too weak and injured to move!`;
        this.note = `   This damage resists both bio-regeneration and magical healing, but is not permanent, and will heal at the normal rate.`;
    }
}

module.exports = LifeSource;