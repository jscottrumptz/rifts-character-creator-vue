const Psionic = require('../Psionic');

class GroupMindBlock extends Psionic {
    constructor() {
        super();
        this.name = 'Group Mind Block';
        this.group = 'Super';
        this.range = '120 feet (36.6 m).';
        this.duration = '10 minutes per level of experience.';
        this.cost = '22 I.S.P.';
    }
}

module.exports = GroupMindBlock;