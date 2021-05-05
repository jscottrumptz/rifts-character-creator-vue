const Psionic = require('../Psionic');

class TotalRecall extends Psionic {
    constructor() {
        super();
        this.name = 'Total Recall';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = 'Permanent.';
        this.cost = '2 I.S.P.';
        this.description = `    The character remembers every word he reads. Specific blocks of written and visual information can be recalled in perfect detail at will. Each block of information costs 3 I.S.P. to recall in absolute detail. If all I.S.P. have been expended the memory is a little fuzzy, so that exact quotes and details may be impossible to recall. Roll percentile to see how much is retained: 
    01 %-50%: Remembered in full detail, word for word.
    50%-80%: Details are forgotten, but the full essence of the ideas are clear. 
    81 %-00%: Can only recall the most basic concepts; no details nor strong comprehension.`;
        this.note = `Does apply to the spoken word, although psychics with this ability usually have very good memories.`;
    }
}

module.exports = TotalRecall;