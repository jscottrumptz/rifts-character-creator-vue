const Skill = require('../Skill');

class SensoryEquipmentPilotRelated extends Skill {
    constructor() {
        super();
        this.name = `Sensory Equipment`;
        this.group = `Pilot Related`;
        this.isSecondary = false;
        this.description = `The individual with this training can operate, maintain, understand, and 'read' or interpret sensory data from all types of conventional, military, medical, and scientific equipment, scanners, and sensory devices. These devices include radar, sonar, motion detectors, surveillance equipment, optical enhancements, industrial gauges, instrument panels, medical monitors (EKG's, CAT scans, etc.), life support systems, and so on. Note that characters without this skill can not understand or operate advanced aircraft, medical equipment, or sonar/detection equipment.`;
        this.penalty = `Radar & Sonar
-15% when using passive sonar or radar. The character can expertly use radar equipment (radio echo bounces) and sonar (underwater sound echo bounces) and correctly read the information to precisely locate and track aircraft, ships, and submarines, as the case may be. In submarines (and with radar for warships and fighter aircraft) there are two methods or types of operations: passive and active. To use active sonar, the sub must give a pulse of sound to bounce off nearby ships or objects. This is very dangerous since it immediately gives away the position of the submersible itself. Most vessels will not use active sonar unless absolutely necessary, most rely on passive sonar systems. This is much more difficult since the sonar operator must sift through the background noise to find any enemy targets. Sometimes they will not be able to distinguish the location of a ship from the background static. Despite this fact, passive sonar is used because it does not give away the location of the vessel.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = SensoryEquipmentPilotRelated;