const Skill = require('../Skill');

class Archaeology extends Skill {
    constructor() {
        super();
        this.name = `Archaeology`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The scientific study of relics from ancient civilizations by excavation and other means. The skill teaches proper excavation(dig) techniques, analysis, preservation, restoration, and dating methods (including carbon dating), as well as a rudimentary history and anthropology background.

Like the anthropologist, the archaeologist is one of the few who is well versed in the legends and few facts about the 'Time of Man.' They are an expert in identification of pre-Rifts technology and man-made creations, from books and clothing to vehicles and buildings. The character can ascertain whether the item is an ancient artifact or of recent construction, and therefore, if an item is an authentic artifact or a forgery. They are also well versed in their Black Market value and the CS laws that prohibit the possession, sale, and scavenging of ancient artifacts. [For example: The possession of books (even comic books and children's books), video discs, or other pre-Rift educational or technological data is illegal by the decree of the Coalition. Failure to turn such items over to the CS government is a serious crime punishable by imprisonment or death.]

The first percentile number applies to the character's historical and archaeological capabilities, the second is their ability to figure out the purpose of the item through examination alone (i.e. without seeing it used in action).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+2% to all Lore skills.
+10% to History.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `20`;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Archaeology;