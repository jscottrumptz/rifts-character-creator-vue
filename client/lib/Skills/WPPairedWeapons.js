const Skill = require('../Skill');

class WPPairedWeapons extends Skill {
    constructor() {
        super();
        this.name = `W.P. Paired Weapons`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `false`;
        this.note = `Users of Paired Weapons can:-
Strike and parry simultaneously. In other words, those skilled in W.P. Paired Weapons can often perform two actions for every one melee action/attack.
Twin, simultaneous strikes against the same target. Both weapons hit the same opponent or target at once, making it one melee attack/action (roll only once to strike for both weapons). The defender under attack can only try and parry one of the two weapons coming at him for his defensive parry. The other will strike unless they too have the W.P. Paired Weapons skill and is using two weapons, or a weapon and a shield, to try and block both simultaneous attacks; needs to roll one parry.
Strike two different targets (or strike one and parry another incoming attack), simultaneously; both must be within reach.
Parry two different attackers, one with each hand.
A character with W.P. Paired Weapons needs to make only a single roll if they are:-
Striking the same opponent twice.
Parrying the same opponent twice.
A character with W.P. Paired Weapons needs to make two separate rolls if they are:-
Striking two different opponents.
Parrying attacks from two separate opponents.
Striking once and parrying once against the same opponent.
Striking one opponent and parrying against another.`;
        this.description = `This is a tactic in which a one-handed weapon is held in each hand to be used in any combination of combat moves simultaneously. For example, two short swords, a short sword and broadsword, sword and knife, mace and shield, and so on. Two-handed weapons can not be paired weapons.

Characters with the W.P. Paired Weapons may use any weapon that can effectively be used with one hand (i.e. one suitable weapon in each hand). A character who gains this W.P. skill from a level advancement may use it with any one-handed melee weapon that they are currently proficient with (has a W.P. in). However, any weapons being used which the wielder does not have a W.P. in or which is too heavy or large effectively negates the Paired Weapons skill, making it impossible to use both hands and weapons simultaneously, and can only attack one opponent and each swipe of the weapon counts as one melee attack.

Characters with this skill can either parry multiple attackers or parry an incoming attack and then get a counter-attack, but can not do both. Of course, a character with W.P. Paired Weapons can parry an attack and strike simultaneously only if they still have attacks left. A character who has already used up their attacks can not counterstrike (hit back) until the next melee round begins, but they can parry until then.

A character with this W.P. using both attacks simultaneously is vulnerable to attack from a scond opponent. When fighting three (or more) attackers, the character would be able to parry two of them, but any other attacks would be unopposed.

Four-armed characters need to take W.P. Paired Weapons once, not once for each pair of arms. A character who already has this skill would not gain any additional bonuses or benefits by taking the skill a second time. Only weapons in which the character has a W.P. can be used with W.P. Paired Weapons. This skill is deisnged for melee weapons like knives, swords, clubs, etc. not guns. When shooting two guns at once there is a -2 penalty to strike with the regular hand and a -6 to strike with the off hand.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPPairedWeapons;