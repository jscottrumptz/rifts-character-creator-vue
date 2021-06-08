const Skill = require('../Skill');

class EntomologicalMedicine extends Skill {
    constructor() {
        super();
        this.name = `Entomological Medicine`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = `Characters based in North America have the equivalent of Lore: Xiticix from this skill at the proficiency level listed here. Those in South America have Lore: Gatherer & Pincer Warriors.

The first percentage is the level of knowledge and understanding about the insect, the second is the ability to treat insectoids, handle their chemicals, and create anti-venoms, drugs, and poisons, using insect chemicals.`;
        this.description = `The unique specialization in insect biology and its applications to medicine and science. It is an uncommon skill, but does have applications on Rifts Earth with alien insect beings like the Xiticix.

In its simplest form, Entomological Medicine gives the scientist or doctor an in dept understanding of insect biology, physiology, and more importantly, its chemical aspects. This means the character knows how and why the insect (from ordinary bugs to giants, and intelligent insectoids) functions, its physiological strengths and weaknesses, types of natural weapons, chemical weapons (poisons, acids, chemical sprays), secretions (chemical trails, resins, webbing, etc.) and other chemical properties, including where the chemical is secreted, its exact properties, and the chemical's effect on humans and other species. In addition, the character can use insect poisons and chemicals for making medicine and anti-toxins (treatment to counteract insect poisons and chemicals), as well as extract poison.

In its more advanced application, the character understands and can treat 'insectoids' - intelligent, humanoid insects like the Xiticix. This makes the character an equivalent of an insect paramedic who can help a wounded giant insect, Xiticix, or alien insectoid (with a -20% penalty to this skill). More complex treatment will require assistance from a doctor who has this skill. Body-Fixers/Doctors versed in Entomological Medicine will be able to cure most insect complaints and injury, from diseases to broken limbs and cracked chitin, but even they work with a -10% penalty (applied to the Medical Doctor skill).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Chemistry: Analytical [Science] OR Mathematics: Basic [Science] and Chemistry [Science].`;
        this.perLvl = `5`;
        this.baseTwo = `20`;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['chemistryAnalytical'];
        this.preqOr = ['chemistry', 'mathematicsBasic']
    }
}

module.exports = EntomologicalMedicine;