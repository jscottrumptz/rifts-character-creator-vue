const Psionic = require('../Psionic');

class Telemechanics extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanics';
        this.group = 'Super';
        this.description = `    This ability allows the psychic to mentally communicate and understand machines. This psi-power is a bizarre combination of Object Read and Telepathy, except that it applies to mechanical devices only. 
    By touching any non-artificially intelligent machine, whether it be a bicycle, gun, car or airplane, the psionic will instantly have a complete (although temporary) knowledge of exactly how the machine operates. I must stress that the psychic knows everything about the machine; the complete schematic diagram and operation knowledge are clearly seen in his mind ' s eye. The level of skill expertise is equal to 80%. 
    When touching an artificially intelligent machine, i.e., computers, the psionic not only understands everything about its operation, repair, access codes, etc., but can actually communicate with it telepathically. This means he can tap into a computer's memory bank without using a terminal because the information would be sent directly into the psychic's mind. Remember, the telepathic link and memory are temporary abilities (although a Total Recall would be able to call up small bits of info). The psychic's skill knowledge is equal to an 88% skill proficiency and applies to all aspects of the machine, its operation, repair, special codes, programing, etc.`;
        this.range = 'By touch or up to 5 feet ( 1.5 m) away.';
        this.duration = '10 minutes plus 2 minutes per level of psionic.';
        this.cost = '10 I.S.P.';
        this.savingThrow = 'None.';
    }
}

module.exports = Telemechanics;