const Psionic = require('../Psionic');

class HypnoticSuggestion extends Psionic {
    constructor() {
        super();
        this.name = 'Hypnotic Suggestion';
        this.group = 'Super';
        this.range = '12 feet (3.6 m), with eye contact. ';
        this.duration = 'Varies with each circumstance and subject; rarely more than a few hours maximum.';
        this.cost = '6 I.S.P. per idea or attempt to implant an idea.';
        this.savingThrow = `Standard.`;
        this.description = `The power of suggestion is a psychically boosted form of simple hypnosis. The power is limited to relaxing/calming somebody down, putting a person or animal in a light sleep, helping a person to relax and focus on a particular thought (good for helping someone to remember things) and implanting subtle ideas. The implanting or "suggestion" of an idea must be subtly worked into a verbal comment. The suggestion must be kept simple and clear, such as "You know you can trust me." or "You feel like you have a fever." or "You don't want to go there." The power of suggestion can also be used to make the victim imagine sounds and images. "Did you hear that? Listen! Footsteps. You hear the footsteps ... yes, you do!" Or, "At midnight the specter appears. Everybody who is ever present sees the specter at midnight." The poor individual who fails his saving throw will indeed imagine he sees something at midnight or hears footsteps.`;
    }
}

module.exports = HypnoticSuggestion;