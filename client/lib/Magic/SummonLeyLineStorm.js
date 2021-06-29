const Spell = require('../Spell');

class SummonLeyLineStorm extends Spell {
    constructor() {
        super();
        this.name = 'Summon Ley Line Storm';
        this.group = 'Invocation';
        this.level = 'Twelve';
        this.range = `One mile (1.6 km) per level of experience.`;
        this.duration = `Five minutes per level of the spell caster.`;
        this.cost = `500 P.P.E. (half for Shifters). Nazcan Line Magic can also be used to "create" a Ley Line Storm, but requires an hour long ritual and 800 P.P.E.`;
        this.limitations = `Can only be created on a ley line.`;
        this.savingThrow = `Standard per the effects of the storm.`;
        this.description = `    The spell caster can summon (effectively creating) a Ley Line Storm that causes electromagnetic disturbances, dimensional anomalies and disrupts magic.
    The mage can also direct its movement, making it pause in one place or travel down a particular portion of the ley line or a connecting line. In addition, the spell caster can direct bolts of ley line energy at specific targets of his choosing (each bolt counts as one melee action; see the rather lengthy description for details).
    To control the Ley Line Storm, the spell caster is mentally linked to it. This means he sees and senses most everything going on within the storm itself l However, as long as the summoned storm remains, the spell caster is effectively part of it, his physical body entranced and vulnerable while his mind and senses are one with the Ley Line Storm. This means he can not cast other spells or take action (move, run, dodge, talk, etc.) as long as the storm remains in existence. He can be physically moved or protected by others, but can't do so of his own volition. To regain control of his body, the Ley Line Storm must be stopped and the spell cancelled.`;
        this.note = ``;
    }
}

module.exports = SummonLeyLineStorm;