const Skill = require('../Skill');

class WPEnergyRifle extends Skill {
    constructor() {
        super();
        this.name = `W.P. Energy Rifle`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = true;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.
Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This modern weapon proficiency includes all long range energy firing rifles. Mega-Damage varies.`;
        this.bonus = `+1 to Strike: for every 3 levels of experience beyond level 1.

Aimed: +3 to strike, +4 to strike with revolver. This means the person takes the time to carefully aim and squeeze off one, well placed shot. Each individual shot takes one full attack. Thus, if a character has four attacks per melee they can shoot FOUR aimed shots. This applies to all weapons. Roll to strike for each strike.

Short Burst: +1 to strike. A burst is the shooting of several rounds, immediately one after another. Aim is more hasty and the recoil moves the weapon with each shot, reducing the accuracy. Semiautomatic/automatic weapons, machineguns, and sub-machineguns, are designed for burst firing. The concept if that, while accuracy is reduced, the odds of hitting one's target with multiple rounds is increased because more shots are fired. Roll to strike once to see if the entire burst hits. Do not roll for individual bullets. If the burst misses its target, then all rounds in the burst miss. Short bursts fire 20% of the entire magazine (i.e. 30 round magazine uses 6 rounds in a short burst). Roll normal damage for one round, then double. Uses one attack/action. Can be fired at one target only.

Long Burst: +1 to strike. This burst fires 50% of the entire magazine (i.e. 30 round magazine uses 15 rounds in a long burst). Roll normal damage for one round then multiply by 3. Uses one attack/action. Can be fired at one target only.

Entire Magazine Burst: Shooting off the entire magazine/clip within a melee round is possible. 100% of the rounds are fired. Roll normal damage for one round then multiply by 7. Uses up two attacks/actions that melee. Can be fired at only one target; machineguns (W.P. Heavy) are the only exception to this.

Wild/Spray: No bonus or penalty. Shooting a spray at several targets at once is possible, but is the same as shooting wild. You must fire a long burst or an entire magazine burst in order to spray. Shooting wild occurs when a trained character shoots without taking time to aim. This usuaully applies when the person is blinded, angry, running, rolling, leaping, shooting from a moving vehicle, etc. With the correct W.P.this mode of fire gains no bonus or penalty. Without the correct W.P. this mode of firing strikes at -6 penalty. Counts as two attacks/actions. Can be fired at one target or as a spray:-
One Target: roll normal damage for one round then double it. When using this mode of fire there is a 20% chance that an innocent bystander is possibly hit. Damage is for one round only (a wild shot).
Spray (to hit several targets simultaneously): roll once to determine if the target area is hit: 1D20; 5 or higher strikes as usual. Roll 1D4 to determine number of individual targets struck within that target area. However, each target gets a dodge to avoid getting shot. Damage is normal damage from one round. when using this mode of fire there is a 50% chance of hitting innocent bystanders doing one round damage (a wild shot).`;
    }
}

module.exports = WPEnergyRifle;