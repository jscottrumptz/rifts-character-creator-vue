const Psionic = require('../Psionic');

class SpeedReading extends Psionic {
    constructor() {
        super();
        this.name = 'Speed Reading';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '3 minutes per level of experience.';
        this.cost = '2 I.S.P.';
        this.description = `    This is the ability to read and comprehend the written word extremely quickly. Speed of reading is 30 pages per minute (4 melee rounds). The psychic will retain the information as he would normally. Highly technical texts will reduce the speed reading by half (15 pages per minute) and may require two readings to remember in detail.`;
    }
}

module.exports = SpeedReading;