const Spell = require('../Spell');

class SenseEvil extends Spell {
    constructor() {
        super();
        this.name = 'Sense Evil';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `90 foot (27.4 m) area.`;
        this.duration = `Two minutes (8 melees) per level of experience.`;
        this.cost = `2 P.P.E.`;
        this.savingThrow = `None, except a psychic Mind Block, Alter Aura or a Protection from Magic circle which will prevent the spell from working on anyone in the circle. The psychic's equivalent power of Sense Evil is not blocked by magic circles.`;
        this.description = `    The Sense Evil invocation enables the spell caster to feel or sense the presence of evil, and especially supernatural evil (demons, Devils, etc.). It will indicate approximately how many supernatural evil presences are within the 90 foot (27.4 m) area; one, a few (2-6), several (7-14), or many (more than 15). It can also register the intensity of the evil and pinpoint the general location of the source(s) to a particular room(s), possessed object, or person, or an approximate distance (very close, near, far, etc.). 
    Evil emanations from human beings, D-Bees and other mortals are much less distinct and can not be sensed as easily or broadly as above. In this case, the spell caster must see a particular individual and cast the spell on that one character. The mage can then detect if the character is Diabolic or not, otherwise he can only sense any immediate evil intention on the part of the targeted individual.`;
    }
}

module.exports = SenseEvil;