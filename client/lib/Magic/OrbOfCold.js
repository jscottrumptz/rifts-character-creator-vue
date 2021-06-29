const Spell = require('../Spell');

class OrbOfCold extends Spell {
    constructor() {
        super();
        this.name = 'Orb of Cold';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `200 feet (61 m).`;
        this.duration = `One melee round (15 seconds); 1D4 minutes for numbness.`;
        this.cost = `6 P.P.E.`;
        this.damage = `3D6 M.D. plus numbness penalties.`;
        this.savingThrow = `Dodge; standard.`;
        this.description = `    The spell caster summons a globe of magically charged ice (the size of a softball) into his hand to hurl at an enemy. The character must roll to strike, getting his usual P.P. bonus (if any) and a magical bonus of + I to strike. The orb disappears in one melee round ( 1 5 seconds) if it is not thrown. If the orb hits, it shatters, inflicting impact and cold damage to one target. If it misses, it is gone, unless the G.M. thinks it may have hit something or somebody else. Those struck take 306 M.D. and must make a save vs magic or suffer from a sudden, debilitating, numbing cold. A numbed opponent loses one melee attack, is -2 on initiative, -1 to strike, parry, and dodge, and speed is reduced by 10%. These penalties are not cumulative, and last for 1D4 minutes.`;
    }
}

module.exports = OrbOfCold;