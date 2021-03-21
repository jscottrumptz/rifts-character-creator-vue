const Psionic = require('../Psionic');

class HypnoticSuggestion extends Psionic {
    constructor() {
        super();
        this.name = 'Hypnotic Suggestion';
        this.group = 'Super';
        this.range = '12 feet (3.6 m), with eye contact. ';
        this.duration = 'Varies with each circumstance and subject; rarely more than a few hours maximum.';
        this.cost = '6 I.S.P. per idea or attempt to implant an idea.';
    }
}

module.exports = HypnoticSuggestion;