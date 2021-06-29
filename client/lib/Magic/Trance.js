const Spell = require('../Spell');

class Trance extends Spell {
    constructor() {
        super();
        this.name = 'Trance   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Touch or within 12 feet (3.6 m).`;
        this.duration = `Five minutes per level of experience.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    This enchantment places another character into a zombie-like state in which the entranced victim is in a hypnotic daze, unaware of his environment or happenings around him. He can not formulate thoughts, use skills, or act on his own. While entranced, the individual is only aware of the enchanter's voice and will follow extremely simple com-mands, such as stay, sit, follow me, get inside, lay down, give me your hand, etc. The entranced victim can NOT engage in any type of combat to any degree, nor any actions that require skill or thought, and offers no resistance. The magic is meant to incapacitate more than it is to enslave. Evil men of magic often use trance on prisoners or intended victims of a human sacrifice. 
        While entranced, the person can not be made to reveal secrets, be-tray a friend, harm himself, or act against his alignment. All physical attributes function as if they are half of what they really are; thus, a speed of 10 is 5 while entranced. The victim of a trance will remember nothing of the events that occurred while entranced. Can not affect people inside power and M.D.C. body armor, robots, or vehicles.`;
    }
}

module.exports = Trance;