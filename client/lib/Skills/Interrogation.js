const Skill = require('../Skill');

class Interrogation extends Skill {
    constructor() {
        super();
        this.name = `Interrogation`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.note = `Only evil characters will routinely or callously engage in torture. This skill will not work on many supernatural beings, particularly those impervious to pain or who quickly bio-regenerate physical damage, not to mention those who enjoy being tortured.

-20% on interrogating supernatural creatures, monsters, or dragons.`;
        this.description = `This skill includes training in the questioning of prisoners, captives, and informers, and the assessment of the information they provide. The character knows the techniques to get information from (typically unwilling) subjects, including such old methods as 'good-cop, bad-cop', deceiving and misleading the subject into giving away information, and similar methods. The character also can judge if the subject is lying (DM modifiers in the form of bonuses or penalties depending on how good a liar the subject is, and/or the victim's M.E., M.A., and P.B. attributes; the higher any or each of these, the more convincing the lies). This skill also includes some basic knowledge on methods of torture, from basic tactics like depriving the subject of sleep to old 'medieval' instruments and modern drugs.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = Interrogation;