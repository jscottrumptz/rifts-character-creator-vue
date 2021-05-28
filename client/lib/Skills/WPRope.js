const Skill = require('../Skill');

class WPRope extends Skill {
    constructor() {
        super();
        this.name = `W.P. Rope`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is trained use of a lariat or lasso for combat as well as using the lasso to snare and hook onto a sturdy object or limb for climbing, scaling walls, boarding vessels, and swinging across openings. As a weapons, the rope and lasso is used to encircle the shoulders,arms, waist or feet to snare, trip and otherwise pin and incapacitate an opponent. The lasso can also ensnare the neck and strangle opponents.

Trip Attacks: A successful roll to strike knocks the victim to the ground and they lose initiative and one melee attack/action. If the attacker is on horseback, in a vehicle, or super strong, they may pull or drag the victim.

Entangle Attacks: A successful roll to strike ensnares the desired area of the body, typically the arm, upper torso, waist, leg, or foot. A subsequent successful roll to disarm or entangle may be then made.

Disarm Attacks: After a successful Entangle Attack, a further successful roll to strike means the lasso is jerked in such a way that it slips off the victim's arm, but it takes whatever they were holding in that hand with it. 60% chance of knocking it to the ground, 61-100% chance the item is lassoed and can be pulled into the attacker's hand in two melee actions (four total attacks are used up: one to entangle the arm, one to disarm the arm, and two to pull the item).

Incapacitate Attacks: After a successful Entangle Attack, a further successful roll to strike means the attacker can incapacitate that limb/part of the body (usually by pulling the rope and the lassoed limb taut), making it impossible for the victim to use it. If an arm or hand, the victim must use their other arm and hand (at half their usual bonuses and -1 melee attack unless they are ambidextrous).

If it is the foot or leg that is lassoed and incapacitated (pulled tight), the victim runs or hops at half speed, can not get away unless they can cut the rope, is -4 to dodge and roll with impact, and -1 to parry, disarm, or pull punch. Using s a second melee attack to jerk the lasso will knock the victim off their feet (losing initiative and one melee attack)and he can then be pulled/dragged by hand, horse, or vehicle, or hog-tied (costs the attacker two additional melee attacks/actions unless the victim can roll a 17 or higher to dodge the attacker succeeds without further incident. A roll of 17or higher enables the victim to squirm and move in such a way as to prevent being tied up and they can then engage the attacker in hand to hand combat).

If it is the upper body that is lassoed, it pins one arm to their body rendering it useless. The victim must use their other hand (at half their usual bonuses and -1 melee attack unless they are ambidextrous). A second lasso around the upper body (counts as another melee attack) pins both arms, leaving the victim unable to use their arms or hands. Trying to run while the arms are pinned is awkward and difficult, reduce the victim's speed by 20%, they are -2 to dodge and can not parry. No damage is inflicted, but the victim is physically incapacitated. Moreover, the lassoed individual can be pulled off their feet and knocked down (losing initiative and one melee attack/action) and can be quickly hog-tied by the attacker (counts as four melee attacks) or be dragged. Only one victim can be toped and pinned or hog-tied at a time.

Multiple lassos can also be used to snare each limb and 'spread-eagle' the victim. The victim is physically helpless in this position. Only spell magic or psionics or other special attacks can be used when spread-eagled, arms pinned or completely hog-tied.

Strangle Attack: Roping the neck can be sued to prevent the victim from speaking and makes them barely able to breathe (-1 attack per melee). Tightening the rope (counts as one melee attack) cuts the air supply off completely and strangles the victim unless they can cut themselves free or the attacker releases the victim by loosening and/or removing the lasso from around the neck. Depending on how long the victim can go without air, the victim may die. For most characters, dizziness occurs within 2 minutes (victim is -2 attacks per melee and -3 on all combat bonuses). Within 4 minutes the victim is rendered unconscious, unless they can hold their breath for an extraordinarily long time. If still on their feet, reduce their attacks and combat bonuses by half again. Within 2 or 3 minutes the victim will lapse into a coma and die within another 1D4 minutes. Note: A slow hanging kills the victim in half the time. A good character would never use a strangling attack to kill or hang, or stops short of causing coma and death. The strangling attack does NOT work on characters clad in power armour or full conversion cyborgs, or robots. Against a supernatural being or creature of magic, the attacker must have greater Supernatural Strength then the victim.

Escaping a Lasso: Escape is possible if the victim is able to cut themselves free (provided they have a blade weapon or claws), shoot themselves free with a gun (first shooting the tow-line and then pulling the lasso from around their neck, counts as two melee attacks/actions), or pull themselves free if their P.S. is six points greater than their attacker.

It takes 1D4 melee actions to cut through an S.D.C. lasso with a S.D.C. knife, one action if an M.D. blade is used or the character has a Robotic or Supernatural P.S.. It is impossible, however, to draw a weapon and cut oneself loose if both arms are pinned or while being dragged. Of course, psionic or magical telekinesis or ectoplasm may be used to wield the blade, or some other extraordinary measure may be applicable (eye beam, bionic finger blaster, etc.).

W.P. Rope can not be used to parry. Does not require Rope Skill to use as a weapon, but when the Cowboy and Saddle Tramp O.C.C.'s do select both skills they gain an additional bonus of +2 to strike and disarm when using the lasso against humanoid opponents.`;
        this.reqOCCGroup = `This W.P. is only available to characters who can select Cowboy Skills.`;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 1, 4, 8, 12, and 15 (when rope/lasso is used in combat or for boarding).
+1 to entangle.
+1 to disarm.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPRope;