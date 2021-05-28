const Skill = require('../Skill');

class WPHeavyMilitary extends Skill {
    constructor() {
        super();
        this.name = `W.P. Heavy Military`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `false`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.

Machinegun:
Bursts from a machinegun differ from other modern W.P. types only in the number of rounds fired, targets struck, and chances of hitting a bystander. Machineguns have much greater ammunition capacities, so it does not use the same percentage of magazine/clip:

Short Burst/One Target: +1 to strike. 10% of entire magazine; inflicts normal round damage x2. Counts as one attack/action.

Short Burst/Spray: +1 to strike.10% of entire magazine; inflicts normal damage from one round to 1D4 targets.

Long Burst/One Target: 30% of entire magazine; inflicts normal damage x5. Counts as one attack/action.

Long Burst/Spray: 30% of entire magazine; inflicts normal damage from one round to 1D8 targets.

Empty Entire Magazine/One Target: All rounds fired; inflicts normal damage from one round x20. Counts as all attacks/actions/one full melee.
Empty Entire Magazine/Spray: All rounds fired; inflicts normal damage from one round x2 to 2D8 targets. Counts as all attacks/actions/one full melee. 70% chance of hitting innocent bystander.

Grenade Launcher Rifle:
Damage - per grenade effects everything in a 10 foot (3m) radius.

Can only fire one shot at a time, each shot counts as 2 melee attacks/actions.

Range - typically, 1200 feet (366m) range, although an over and under assault rifle greande launcher is only 800 feet (244m).

Payload - typically, 2 (hand loaded), 24 (grenade drum), or 6 (pump-action on rifle).

Portable Mortar/Rocket Launcher:
Damage - per round effects everything in a 15 foot (4.6m) radius.

Can only fire one hand-loaded round, each shot counts as 2 attacks/actions.

Range - typically, 4000 feet (1219m).

Payload - one round.`;
        this.description = `This modern weapon proficiency includes machineguns, bazookas, LAWS, grenade launchers, mini-guns, mortars, and S.D.C. and equivalent light M.D. weapon turrets.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels1, 3, 6, 10, and 14.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPHeavyMilitary;