const Spell = require('../Spell');

class WeightOfDuty extends Spell {
    constructor() {
        super();
        this.name = 'Weight of Duty   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `One victim up to 200 feet (61 m) distant or two by touch.`;
        this.duration = `One minute (4 melee rounds) per level of the spell caster.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    Weight of Duty affects all characters it is cast upon. A standard save vs magic can be made against this magical mental assault (a high M.E. or other mental save bonuses do not apply). The spell only affects intelligent, mortal beings with an honorable alignment (including Aberrant) or a strong sense of duty and responsibility. Supernatural beings and creatures of magic are immune. Those who fail to save suffer the feeling that the task set before them is too great and they are doomed to failure. This magical melancholy makes them lose all inspiration, drive and initiative, and their limbs actually seem to become heavy as if straining to lift a tremendous weight. Those affected suffer the following penalties: No initiative, - 1 attack per melee, -4 to strike, parry and dodge, speed is half, and skill performance is half of normal, plus skills and actions are done halfheartedly and take twice as long as normal. Worse, they are likely to surrender if things go badly.`;
        this.note = `If the save is made, however, the target benefits from renewed determination and they are +2 on initiative and +2 to save vs this spell and similar mind control magic if it is used against them any time in the next hour!`;
    }
}

module.exports = WeightOfDuty;