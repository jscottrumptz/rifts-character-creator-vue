const Skill = require('../Skill');

class WPTargeting extends Skill {
    constructor() {
        super();
        this.name = `W.P. Targeting`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.note = `The character loses all bonuses and the rate of fire is halved when:-
Running and shooting.
Running and throwing.
Flying.
Riding on horseback
From a moving vehicle
Anytime when unbalanced.`;
        this.description = `This  is expertise with thrown and projectile weapons (but not bows and arrows, crossbows,or guns), such as the sling, slingshot, boomerangs, shurikens, throwing knives, throwing sticks, axes (small), spears, and even siege weapons.

Characters who select both W.P. Targeting and another W.P. for a missile weapon (but not swords, large axes, staves etc.) get the usual bonuses for that W.P. plus the bonuses from W.P. Targeting. The character can also throw two small items, like knives, shurikens, or throwing sticks, simultaneously at the same target.

Awkward items, such as swords, large axes, hammers,clubs, maces, pole arms, and most other hand-held weapons as well as articles like frying pans, shovels, toasters, large bricks, furniture, etc. are not designed to be thrown. Consequently, the average throwing range is a mere 20ft. (6m) and the character is -1 to strike. An attacker can try to throw such weapons further, but is -3 to strike for every additional 10 feet (3m) beyond 20ft. (6m). Characters with augmented/bionic, robotic, or supernatural P.S. can throw their weight limit the distance their P.S. allows, but are -1 to strike tossing the ungainly object at one-third maximum possible distance, -3 to strike at half that distance, and -6 to strike if further than half.

Heavy items, such as those that are half the character's maximum carrying weight could be thrown one foot (0.3m) per every point of human P.S.. [Example: a character with P.S. 9 could throw 45 lbs. (20kg) 9 feet (2.7m), a P.S. of 15 could throw 75lbs. (34kg) 15 feet (4.6m), or a P.S. 32 could throw 320lbs. (144kg) a distance of 32 feet (9.7m). Penalties are the same as if an awkward item. Augmented P.S. have double the range (2ft./0.6m per P.S. point). Robotic P.S. have triple the range (3ft./0.9m per P.S. point) and have the same penalties as awkward items.

Supernatural P.S. of 17 or higher can throw half their maximum carrying weight (P.S. number x25) 5 feet (1.5m) per P.S. point [so a Supernatural P.S. of 24 can carry 1200lbs. (540kg) and throw half as much 120ft. (36.6m) with a minimum penalty of -1 to strike. Supernatural P.S. of 16 or less is the same as for Robotic P.S.. The penalties are as for awkward items.

The damage bonus for strength does not apply to arrows fired from a bow, or from a thrown weapon unless the O.C.C. description indicates otherwise. There are a few very special O.C.C.s that get the damage bonus for arrows and thrown weapons, but normally the damage bonus is only for melee combat.

A thrown weapon is considered a ranged attack, however, the P.P. attribute bonus to strike does apply, and you can do an Aimed or Called Shot with thrown weapons. A thrown weapon can also be used to Disarm via an Aimed or Called shot (toss);bonuses to Disarm via Hand to Hand combat apply.

A natural 19 or 20 does double damage. If the attack was an Aimed/Called Shot to Disarm, the attack is an automatic success. The only way for this attack to be parried or dodged by an opponent is for the defender to match or better the roll with their own natural, unmodified roll.

Unless stated otherwise, each thrown items counts as one melee attack/action. Thus, if a character normally has 4 hand to hand attacks per melee, they can throw four knives or darts per round. Some exotic weapons may require a spinning action or time to throw that takes up two or more melee attacks/actions.`;
        this.bonus = `+1 to strike at levels 1, 3, 7, and 10.
+30% Effective throwing range with augmented P.S..
+50% Effective throwing range with Robotic P.S..
x3 Effective throwing range with Supernatural P.S..
x4 Effective throwing range if Supernatural P.S. is 31+.`;
        this.required = `Any one W.P. for a missile weapon such as a spear.`;
    }
}

module.exports = WPTargeting;