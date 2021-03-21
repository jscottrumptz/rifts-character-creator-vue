const Psionic = require('../Psionic');

class GroupTrance extends Psionic {
    constructor() {
        super();
        this.name = 'Group Trance';
        this.group = 'Super';
        this.range = 'All willing subjects within 20 feet (6 m) of the psychic, + 10 feet (3 m) per level of experience.';
        this.duration = '2 minutes per level of experience or until the trance is broken, whichever comes first.';
        this.cost = '15 I.S.P.';
    }
}

module.exports = GroupTrance;