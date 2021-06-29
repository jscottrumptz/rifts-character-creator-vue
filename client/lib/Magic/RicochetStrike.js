const Spell = require('../Spell');

class RicochetStrike extends Spell {
    constructor() {
        super();
        this.name = 'Ricochet Strike   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Varies with the type of weapon - must be a physical weapon, such as a knife, throwing axe, spear, arrow, or stone. Not applicable to missiles, rail guns, machine-guns or any "burst" weapons, nor energy blasts.`;
        this.duration = `One melee round (15 seconds).`;
        this.damage = `Normal for the weapon used.`;
        this.cost = `12 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell places a temporary enchantment on any melee weapon that could conceivably be thrown: Ordinary or magical knife, axe, shuriken (throwing star), boomerang, throwing stick or iron, hammer, sword, spear, javelin, arrow, sling stone, rock, Vibro-weapon, Neuro-mace, magical weapon, etc. (energy blasts, bullets, and similar projectiles can NOT be enchanted by this magic. A thrown hand grenade can be made to ricochet, but will only explode and inflict damage upon one designated target). The magic can be used on S.D.C. or M.D. weapons.
    When the weapon is thrown, it can strike multiple targets by ricocheting off the first to hit the second, bounce again and hit a third. The weapon can strike up to three targets with a single attack/melee action. It can strike the initial target twice, but only if it ricochets off something (or someone) else as its second strike. The spell caster rolls to strike as normal, and if the weapon hits, it inflicts damage, then skips off the initial target and streaks towards the next. The same strike roll is used, and if it hits again, it does damage and goes to the third target. The weapon can be parried or dodged as appropriate, and yes, if a 20 is rolled, all the intended targets are hit for double damage. However, if it should, at any three, miss, or be dodged (not parried, a parry will still cause ricochet), the spell ends. In any case, it ends after the maximum number of targets (three) have been hit or parried.`;
    }
}

module.exports = RicochetStrike;