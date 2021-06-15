const Psionic = require('../Psionic');

class TelekinesisSuper extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinesis (Super)';
        this.group = 'Super';
        this.range = '100 feet (30.5 m) per level of experience.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '10 I.S.P. to lift/move/hurl an object that weighs 100 lbs (45 kg), +10 I.S.P. per each additional 100 lbs (45 kg). ';
        this.damage = `1D4x10 S.D.C. per 100 lbs (45 kg) of weight. Note: 100 S.D.C. points equal one (1) M.D. point.`;
        this.description = `The power is basically the same as the ability described in the Physical category of psionic powers, but greatly enhanced. Differences are increased range, and dramatically increased weight and damage. The character can use Super Telekinesis to manipulate as many as one object per level of his experience, as long as the combined weight does not exceed his total weight capacity.

• +3 to strike with Telekinesis; physical/skill bonuses to strike do not apply when Telekinesis is used. 
• +4 to parry with Telekinesis by using a controlled object to parry or sheer telekinetic force to block an attack. Counts as a medium heavy object; costs 8 I.S.P. 
• S.D.C. Damage from Hurled Objects: 
    Very Small: 6 ounces to 1 pound (0.2 to 0.45 kg): 1D4. 
    Small: 1.5 to 2 lbs (0.6 to 0.9 kg): 1D6 S.D.C. 
    Medium Small: 2-4 lbs (0.9 to 1.8 kg): 2D4 S.D.C. 
    Medium: 5 to 10 lbs (2.25 to 4.5 kg): 3D4 S.D.C. 
    Medium Large: 11 to 25 lbs (4.95 to 11.2 kg): 3D6 S.D.C. 
    Large: 26 to 40 lbs (11.7 to 18 kg): 4D6 S.D.C. and add 106 damage for each additional 20 lbs (9 kg) up to 200 lbs (90 kg).

•  Mega-Damage from Huge Hurled Objects: M.D. is only possible with Super Telekinesis and only when the hurled object is 100 lbs (45 kg) or heavier and is a hard material like wood, stone or metal (not people). Does ID4 M.D. per 100 pounds (45 kg).`;
    }
}

module.exports = TelekinesisSuper;