const Psionic = require('../Psionic');

class GroupMindBlock extends Psionic {
    constructor() {
        super();
        this.name = 'Group Mind Block';
        this.group = 'Super';
        this.range = '120 feet (36.6 m).';
        this.duration = '10 minutes per level of experience.';
        this.cost = '22 I.S.P.';
        this.description = `    The Master Psionic can instantly erect a mental barrier or Mind Block to protect himself and those around him, with in a 120 foot (36.6 m) area. The Group Mind Block works just like the individual Mind Block power. It can be a means of protecting those around the psychic from psionic probes and mind attacks, but it can also be used to prevent outside forces (good or evil) from communicating via Telepathy or Empathy. Thus, a villainous psychic can use the Group Mind Block for his own evil purposes. Everyone within the 120 foot (36.6 m) area of affect will be automatically blocked, but the effect is not detectable so they are not likely to know that they are being Mind Blocked (a Detect Psionics will indicate a Group Mind Block)!`
    }
}

module.exports = GroupMindBlock;