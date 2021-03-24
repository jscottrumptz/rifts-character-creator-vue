const Psionic = require('../Psionic');

class Levitation extends Psionic {
    constructor() {
        super();
        this.name = 'Levitation';
        this.group = 'Physical';
        this.range = 'Up to 60 feet (18.3 m) away.';
        this.duration = '2 minutes per level of experience.';
        this.cost = 'Small: 2 I.S.P., medium: 6 I.S.P., large: 6 I.S.P. plus 1 I.S.P. per every 10 lbs (4.5 kg) over 20 lbs (9 kg). ';
        this.savingThrow = 'None.'
        this.description = `    Levitation is a limited form of Telekinesis that can raise an object or a person straight up into the air and suspend it there, hovering in the air. Sideways movement is NOT possible. 
    Small objects weighing two pounds (0.9 kg) or less are the easiest to levitate. Maximum height is 8 feet (2.4 m) plus one foot (0.3 m) per each level of experience. Medium-sized objects weighing 3 to 20 pounds (1.4 to 9 kg) are more difficult, requiring greater concentration. Maximum height is 6 feet (1.8 m) plus one foot (0.3 m) per level of experience. Large objects or people weighing over 20 lbs. (9 kg) cost 6 (S.P. plus one I.S.P. for every 10 lbs. (4.5 kg) beyond 20 (9 kg). Thus, a 125 pound (56.2 kg) weight would require 17 I.S.P. to raise it into the air. Maximum height is 4 feet (1.2 m) plus one foot (0.3 m) per level of experience. Or the psychic can levitate himself 10 feet (3 m) +2 feet (0.6 m) per level of his experience.`;
        this.limitations = 'Sideways movement is NOT possible.'
    }
}

module.exports = Levitation;