const Skill = require('../Skill');

class Intelligence extends Skill {
    constructor() {
        super();
        this.name = `Intelligence`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `The specific training in the practices and principles of recognizing and analyzing sources of information about the enemy,observation techniques, counter-intelligence measures and proper procedure. This includes the practical assessment of sights and sounds, estimation of distance from strategic positions, what to report, handling prisoners of war, and handling captured documents and equipment (tagging and reporting to group leaders or the proper authorities). This means the character will be able to accurately estimate ranges, the number of enemies, direction, purpose, and assess the importance of specific information.

Another area of training made available to Intelligence is the identification of enemy troops, officers, and foreign advisers. This means the character learns the many distinguishing ranks and marks that identify specific military units, special forces, groups, and leaders of the enemy. Such identification can pinpoint and confirm enemy operations, goals, and movement, as well as confirm outside intervention/aid. Law enforcement uses the same fundamentals when dealing with gangs, terrorists, and known criminals and criminal organizations.

Further intelligence training includes a working knowledge of indigenous guerrilla warfare, enemy practices, appearance, and current activities. This enables the intelligence officer to recognize suspicious activity as guerrilla actions and identify guerrilla operatives. For example: In a combat situation, a particular booby trap, or weapon or mode of operation may be indicative of guerrilla activity in the area. It may be up to the character to confirm the existence of the enemy and their strengths, number, and location. Likewise, when dealing with magic, demons, and monsters, the particular habits (the way it kills its prey, what it eats, where it lives, etc.) might indicate what the creature is, and once that is known, the character has incorrectly assessed the information or situation, and is uncertain what it means. A failed roll involving individual clues may mean the character has dismissed clues and information as being meaningless (discretion by the DM).`;
        this.perLvl = 4;
        this.base = 32;
    }
}

module.exports = Intelligence;