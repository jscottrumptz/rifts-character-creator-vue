const Psionic = require('../Psionic');

class CommuneWithSpirits extends Psionic {
    constructor() {
        super();
        this.name = 'Commune with Spirits';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '6 I.S.P.';
        this.savingThrow = 'Standard.';
        this.description = `    Using this power, a psychic can "feel" (not see) the presence of spirits. The term ''spirit" includes Entities (including ghosts and possessing ones), invisible Astral Travelers/ Astral Beings the splintered life essence of a god or Alien Intelligence, the mysterious Indian Spirits, a spirit or demon (or god) possessing a Familiar or Witch, and imprisoned souls and life essences in rune weapons and similar magical prisons. 
    The psychic can ask the spirit questions by speaking aloud. although the creature often understands the question on an empathic or intuitive level. Only the psychic hears the answer (unless he's using a group trance) and the answer can be in words or powerful emotions (he suddenly feels its hate, fear, anger, sorrow, etc., instead of a verbal response). It is important to note that the spirit is under no obligation to answer truthfully or to answer at all. An angry and uncooperative spirit may lie, pretend to be somebody else, lash out at the psychic with its own psi-abilities or cause mischief. Likewise, the psychic cannot "feel" or sense the creature's alignment, or magic energy, nor can he use any of his other psionic powers while he is in communion with the spirit. Furthermore, the spirit may break off communication at any time, al-though the psychic can still "feel" if it is within the immediate area (30 feet/9 m radius). The psychic can also break contact at any time, but when he does so, he can no longer tell if the spirit is still hanging about.`;
    }
}

module.exports = CommuneWithSpirits;