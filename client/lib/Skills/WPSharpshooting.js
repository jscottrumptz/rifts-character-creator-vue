const Skill = require('../Skill');

class WPSharpshooting extends Skill {
    constructor() {
        super();
        this.name = `W.P. Sharpshooting`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = false;
        this.description = `Sharpshooting is a combination of special expertise and trick shooting with a particular type of weapon, typically revolvers, pistols and energy pistols, but sometimes includes rifles. It was first developed by gunfighters and quickly adopted by the gunslingers and lawmen of the New West. This skill can be developed by any  of the Men at Arms O.C.C. but is fairly uncommon among most, except for the Gunfighter, Sheriff and Gunslinger.

W.P. Sharpshooting must be selected for each weapon type or category of weapon (revolver, pistol, energy pistol, rifle, etc.) in which the Sharpshooting expertise is desired. This means if the character wants to be a specialist with revolvers, that's one Sharpshooting selection at the cost of two O.C.C. Related Skill selections, plus the W.P. selection (Sharpshooting can be applied to O.C.C. weapon skills but not Secondary Skills). If Sharpshooting is also desired for W.P. Energy Pistol, the skill must be selected again (at the cost of two O.C.C. Related Skills). This process is repeated for each W.P. for which the added benefits of Sharpshooting is desired. Since Sharpshooting selection costs the equivalent of two O.C.C. Related Skill selections, even most Gunslingers and Gunfighters seldom have more than one or two Sharpshooting specialties - most Men at Arms do not have any.

All bonuses and tricks are only possible with W.P.s to which the Sharpshooting skill has been added. Thus, a character with Sharpshooting: Revolver does not get the Sharpshooting bonuses when firing an energy pistol. The Sharpshooting skill can be added to all modern guns, from revolvers (six-shooters) to energy rifles, but does not include W.P. Heavy Military or W.P. Heavy M.D.; i.e. it can not be applied to rail guns, rocket launchers, mini-missile launchers, bazookas, artillery weapons, vehicle or robot weapons, hand grenades, or explosives. Likewise, Sharpshooting can not be applied to weapons that do not shoot, such as clubs, maces, knives,s swords, axes, whips, or even spears, bolas, or other weapons that can be thrown.

The Sharpshooting skill can be combined with the W.P. Archery skill, but is applicable only to the sling, crossbow, and bow and arrow. Only the Gunfighter, Sheriff, and Gunslinger O.C.C.s automatically get a few Sharpshooting skills among their O.C.C. skills, but any additional selections cost them two O.C.C. Related skills like anybody else. This skill is never available to robots, master psionics, practitioners of magic, dragons, demons, or any creatures of magic or supernatural beings. Juicers, Crazies, and Borgs are limited to only one Sharpshooting skill. Characters can not trade in Secondary Skills for the Sharpshooting Skill.`;
        this.bonus = `All bonuses are in addition to the conventional W.P. bonuses.
Aimed Shot (applicable to both the single shot and the aimed burst shot): +1 to strike with a P.P. 20 and for every additional 5 P.P. points above 20, but the bonuses are only applicable when the appropriate type of weapon is used. Aimed shots only. No bonuses for shooting Wild.
Bonus Attack: +1 melee attack when using that specific weapon for the entire melee round (add it at the end).
Quick Draw: +1 to initiative at P.P. 18 and for every additional 4 P.P. points, in addition to other initiative bonuses.
Sharpshooter's Called Shot: The Sharpshooter's 'aimed' shot bonuses are NOT applicable when using this special 'called shot'. Instead the sharpshooter uses the following superior bonuses: +1 to strike with a P.P. 18 and for every additional 3 points above 18, but the bonuses are only applicable when the appropriate type of weapon is used and the special called shot counts as 2 melee attacks/actions. Aimed shots only.`;
    }
}

module.exports = WPSharpshooting;