const Spell = require('../Spell');

class TeleportSuperior extends Spell {
    constructor() {
        super();
        this.name = 'Teleport: Superior';
        this.group = 'Invocation';
        this.level = 'Fifteen';
        this.range = `Self or others; distance of 300 miles (480 km) per level of experience.`;
        this.duration = `Instant.`;
        this.cost = `600 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The mage can instantly transport himself and up to 1,000 lbs (450 kg), per level of experience, hundreds of miles away. To teleport, the mage must have a mental picture of his destination. The best results can be achieved when the character is personally acquainted with the target destination, some place he has visited or knows well. However, locations seen in photographs or described in detail can also be reached, but there is always a chance of a miscalculation. 
    The mage can teleport himself alone, or other people and objects within 20 feet (6.1 m) of him. The total number of people and items which the mystic can teleport is limited by the amount of weight he can handle (1,000 lbs/450 kg per level of experience). The following tables indicate the chance of a success and the results of a failed teleport. 

    Chances of a successful teleport:
• Teleporting to a familiar location or a destination visible from one's starting point: 99%.
• A place seen only a few times before (2-6 times): 85%. 
• A place seen in a photo (the photograph is being looked at during the moment of teleportation): 80%.
• A place never visited before, but described in detail: 58%.
• A place never before visited and known only by name or brief description: 20%.

    Results of an Unsuccessful Teleport: 
01-40%: Appear at the wrong place. No idea of present location; 3D6x 100 miles off course. 
41-75%: Appear at the wrong place. No idea of present location; 1D6x 100 miles off course.
76-98%: Teleport several feet above the ground; everybody falls, suffering 2D6 damage.
99-00%: Teleport into an object; instant death.`;
        this.note = `A character cannot Teleport away and leave behind something that was implanted in him. A character can Teleport into the air, but he is still subject to the dangers of the environment and will fall to the ground unless some other magic is used to prevent or cushion the fall. A character can Teleport a vehicle he is inside, along with themself as long as the total weight (including passengers and cargo) is under I 000 lbs ( 450 kg). Teleporting into water is not dangerous as long as the character can either swim or has an air supply and doesn't Teleport too deep. Once a character has teleported away, he has made a clean getaway. However, if the teleporter has left behind a personal object, a psychic can use the Object Read ability to get a general idea of his lo-cation or direction. It is possible to teleport out of a Magic Net. At-tempting to Teleport (whether successful or not) takes up two melee actions. This spell can NOT be used to deliberately Teleport an enemy into a solid object.`;
    }
}

module.exports = TeleportSuperior;