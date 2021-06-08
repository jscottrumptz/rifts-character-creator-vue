const Skill = require('../Skill');

class MilitaryWarshipsAndPatrolBoats extends Skill {
    constructor() {
        super();
        this.name = `Military: Warships & Patrol Boats`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.note = `Characters with the Motor Boat or Ship skill can also pilot these vessels but at a -12% penalty.`;
        this.description = `The special training in the use of military warships, combat hydrofoils, patrol boats, and amphibious beach craft/transports. Includes a basic idea of how to use sonar and targeting equipment, depth charges, torpedoes, and other common weapon systems, as well as evasive manoeuvres and piloting.`;
        this.perLvl = 4;
        this.base = 40;
    }
}

module.exports = MilitaryWarshipsAndPatrolBoats;