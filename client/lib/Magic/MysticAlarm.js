const Spell = require('../Spell');

class MysticAlarm extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Alarm';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `12 feet (3.65 m; one object).`;
        this.duration = `One year per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster can protect his or her possessions and domicile by placing mystic alarms on them. The invocation creates invisible, ward-like symbols on any one, specific, non-living object. If this object is touched or disturbed by anyone other than the spell caster, a silent alarm will buzz in the ward creator's head, alerting him to the intrusion. The alarm will alert the mage instantly, even if he is thousands of miles away or in another dimension. Once disturbed, the alarm disappears. The mystic alarm has a limited life of one year per level of its creator.`;
    }
}

module.exports = MysticAlarm;