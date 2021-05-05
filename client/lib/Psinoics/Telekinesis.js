const Psionic = require('../Psionic');

class Telekinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinesis';
        this.group = 'Physical';
        this.range = 'Up to 60 feet (18.3 m) away.';
        this.duration = '2 minutes per level of experience.';
        this.cost = 'Small: 3 I.S.P., medium: 8 I.S.P., large (over 20 lbs/9 kg): 8 I.S.P. + 1 I.S.P. per every 10 lbs (4.5 kg) of weight.';
        this.description = `    Telekinesis is the ability to move objects without any other means than directed psychic energy. The character can make an object hop, fall, roll, rise into the air, suspend it there (hover) or make it fly across the room. 
    In order to move an object by Telekinesis, the item must be clearly visible, within the psychic's range (60 feet/18.3 m) and the point of focus. As usual, the psychic must concentrate on what he is doing; thus, each telekinetic feat counts as one of the character's physical attacks. The total number of telekinetic attacks is equal to the character's number of physical attacks per melee; usually 4 or 5. One can attack with Telekinesis by hurling an object as if thrown or causing it to buzz about a room, swinging and hitting like a club controlled by an invisible hand. Several objects can be telekinetically thrown around within the same melee round, but not simultaneously. The psychic can only concentrate on one item at a time. For example: A physical psychic with four, normal, hand to hand attacks per melee can perform four attacks with Telekinesis. First. he makes a flower vase fly from the table, aiming it at his opponent's head. Second, he makes the lamp hurl at the guard at the door. Third, the table is suddenly flipped up on end and, fourth. the doorknob is turned and the door flung open. Four attacks or actions using Telekinesis. 
    As we can sec in the example, Telekinesis can be used to do more than making objects fly around. The Telekinetic power can be used to open doors. flick switches, press buttons, turn knobs and dials, open windows. make a rocking chair rock and so on. The range of possibilities is extensive when you stop and think about it. Remember, each action counts as one of the character's physical actions/attacks per me lee. 
    It is easiest to move or hurl small objects weighing two pounds (0.9 kg or less) Maximum height or distance is 60 feet (18.3 m). Medium-sized objects weighing 3 to 20 pounds (1.35 to 9 kg) are more difficult to manipulate. Maximum height or distance is reduced by half; 30 feet (91 m) Large or heavy objects weighing over 20 lbs (9 kg) are the most difficult lo maneuver. reducing maximum height and distance to 15 feet (46 m) IS.P. cost for large. heavy objects is 8 I.S.P. for the first 20 lbs (9 kg) plus one I.S.P. for each additional 10 lbs (4.5 kg) of weight. This means it would cost 19 I.S.P. to move a 125 lb. (56.2 kg) weight (8 ISP. for the first 20 lbs (9 kg) +11 I.S.P. for the remaining 105 lbs). Remember. the height and distance of effect is limited to 15 feet (4 6 m) for such a heavy object. 

Telekinesis Combat Bonuses:
• + 3 to strike with Telekinesis; physical/skill bonuses to strike do not apply when Telekinesis is used. 
• +4 to parry with Telekinesis by using a controlled object to parry or sheer telekinetic force to block an attack. Counts as a medium heavy object; costs 8 J.S.P. Note: Only these two bonuses apply to TK combat. 
• S.D.C Damage from Hurled Objects: 
    Very Small: 6 ounces to 1 pound (0.23 to 0.45 kg): 1D4. 
    Small: 1.5 to 2 lbs (0.6 to 0.9 kg): 1D6. 
    Medium Small: 2-4 lbs (0.9 to 1.8 kg): 2D4. 
    Medium: 5 to 10 lbs (2.25 to 4.5 kg): 3D4. 
    Medium Large: 11 to 25 lbs (4.95 to 11.2 kg) 3D6. 
    Large: 26 to 40 lbs (11.7 to 18 kg): 4D6. Add 1D6 damage for each additional 20 lbs (9 kg).`;
        this.note = `This form of Telekinesis is not a force field, thus, while it can be used to parry/block a punch, kick, club, knife or even sword, it cannot stop bullets, arrows, gas, flying tackles, and similar attacks. Furthermore, a failed roll to make a telekinetic parry means the psychic did not parry and is struck by his opponent. 
    Telekinesis moves, lifts and throws physical objects with the power of the mind. so it may be used to hurl a victim into something as a slam attack but NOT as a crushing or thrusting attack in and of itself. Objects thrown would be equivalent to objects thrown by a physical hand. Telekinesis does not allow psychics to levitate themselves or fly, due to the weight limitation (see Super Telekinesis).`;
    }
}

module.exports = Telekinesis;