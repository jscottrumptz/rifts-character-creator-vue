const Spell = require('../Spell');

class TimeHole extends Spell {
    constructor() {
        super();
        this.name = 'Time Hole   ';
        this.group = 'Invocation';
        this.level = 'Twelve';
        this.range = `Self.`;
        this.duration = `Special.`;
        this.cost = `210 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The mage can teleport himself and his possessions into a sort of stasis field in a limbo-like dimension. The Time Hole is a white void the wizard inhabits. He controls a 20 foot (6 m) area per level of experience and can not go beyond this area of control. There is nothing to see or do in the Time Hole, except for what the character may have brought with him. Likewise, there is no food or water except what is taken into the strange dimension.
    The advantage of the Time Hole is that a man of magic can effectively disappear for days or weeks and be nowhere to be found. In this way the mage can hide away from enemies when he needs to recover from physical damage or P.P.E. exhaustion. He can also use the time to prepare for combat, make plans or to study in absolute isolation and seclusion. In the Time Hole time passes normally, so the character will age as usual. However, outside the Time Hole, time is moving at a much slower rate, thus for every 12 hours inside a Time Hole, only two hours pass in the outside world of humans. This means the mage can spend two days/48 hours in the Time Hole but appear to have been gone for only eight hours. The mage can stay in a Time Hole for 24 hours (four hours real time) per level of experience.`;
    }
}

module.exports = TimeHole;