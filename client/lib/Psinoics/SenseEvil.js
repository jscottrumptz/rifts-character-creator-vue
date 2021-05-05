const Psionic = require('../Psionic');

class SenseEvil extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Evil';
        this.group = 'Sensitive';
        this.range = '140 feet (42.7 m) area.';
        this.duration = '2 minutes (8 melees) per level of experience.';
        this.cost = '2 I.S.P.';
        this.savingThrow = 'None';
        this.description = `    This psi-power is a much more refined ability to feel the presence of evil. All supernatural creatures radiate their alignment, good or evil. A psychic sensitive will automatically feel supernatural evil without spending a single I.S.P. point. However, to get a clearer picture of the evil force(s) the character must open himself and use the Sense Evil ability. 
    Sense Evil will indicate the general number of supernatural evil: one, a few (2-6), several (7-14), or many (15 or more). It can also register the intensity of the evil and pinpoint the general location of the source(s) to a particular room(s), possessed object, character, and distance; i.e. very near (within 15 feet/4.5 m), near (within 50 feet/15.2 m), or far (60 to 140 feet/18.2 to 42.7 m). The character can track the source of supernatural evil, like a bloodhound, by sensing how close it is to him. 
    Evil emanations from human beings are much less distinct and cannot be felt unless the source-person has an immediate evil intention and has psychic powers or is psychotic. The former can mask his evil intentions with a Mind Block.`;
    }
}

module.exports = SenseEvil;