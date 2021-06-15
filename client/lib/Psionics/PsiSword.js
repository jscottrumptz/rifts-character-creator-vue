const Psionic = require('../Psionic');

class PsiSword extends Psionic {
    constructor() {
        super();
        this.name = 'Psi-Sword';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '30 I.S.P.';
        this.description = `    A Psi-Sword is a Mega-Damage energy weapon that the psychic can mentally will into existence! The sword appears out of thin air, as a shimmering blade of energy that resembles a glowing sword. The sword's actual appearance will generally reflect its creator. A character who is impressed by strength and power will create a huge Claymore sword-like weapon. A character who prides himself on speed and agility is likely to create a rapier or saber type blade, while a hero who enjoys cunning and subterfuge may create a short sword. Each is equally powerful regardless of its form and size. 
    The creation of the Psi-Sword is a very personal thing and requires years of mastery and great psionic power. Like the Cyber-Knight, the Mind Melter can change the shape and even the color of the sword to fit his current mood, but unlike the Knight, he can do so from day one. 
    The Mind Melter can create the Psi-Sword after only a few moments of concentration (about 15 seconds/one melee) and maintain it for five minutes per level of experience. This means a fifth level Mind Melter can create and maintain a Psi-Sword for 25 minutes at the cost of 30 I.S.P., while a third level character must expend the same 30 1.S.P. but can maintain the weapon for 15 minutes. If the psychic is knocked unconscious, the weapon disappears. Likewise, the character can willingly dispel the weapon with a thought. 
    Psi-Sword damage: 4D6 M.D. at level three (one can not select this power until level three). Add 2D6 at levels four, seven, nine, twelve, and fifteen. 
    The Psi-Sword of the Mind Melter is incredibly powerful, but can be adjusted to inflict a minimum of 2D6 Mega-Damage (M.D.) or increased by increments of 1D6 up to the character's current maximum. 
    
For Example: A fourth level Mind Melter can inflict a maximum of 6D6 M.D., but the character decides, for whatever reason, to decrease the power to the minimum of 2D6 M.D.; he can, at will, increase the damage capability of the sword by increments of I D6 M.D. up to the maximum of 6D6 M.D. (306, 4D6, 5D6, and 6D6).
`;
    }
}

module.exports = PsiSword;