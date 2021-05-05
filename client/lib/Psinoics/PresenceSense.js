const Psionic = require('../Psionic');

class PresenceSense extends Psionic {
    constructor() {
        super();
        this.name = 'Presence Sense';
        this.group = 'Sensitive';
        this.range = '120 feet (36.6 m) area.';
        this.duration = '2 minutes ( 8 me lees) per level of experience.';
        this.cost = '4 I.S.P.';
        this.savingThrow = 'None.';
        this.description = `    Presence Sense is a psionic probe and awareness that alerts the psychic to the presence of supernatural beings, creatures of magic and other monstrous life forms. The ability cannot pinpoint the location of the presence, but will give the psychic the impression of whether it is near (within 50 feet/15.2 m) or far (beyond 90 feet/27.4 m). It will also give the character a vague idea of how many presences there are; one or two. a few (3 to 6), several (7 to 15), many (20-70) or an army or a swarm (100 or more). The psychic can also tell if one or more of the supernatural presences is small (something not too powerful), medium (Lesser Demon and most Supernatural Predators), big (Greater Demon and nasty monsters) or huge (Demon Lords, Dark Gods, Ancient Evil or Alien Intelligence). 
    The psychic can also sense human/D-Bee presences, but with much less accuracy. It is more of a feeling of "We are not alone." The per-son's distance is undeterminable and the number of people is limited to a sense of one or two or many, and that is only right half of the time. The only exception is if a place has been deserted, cleared out of human and animal life, then, the psychic can sense that one or more hu-mans are above, below, north, south, etc.
`;
    }
}

module.exports = PresenceSense;