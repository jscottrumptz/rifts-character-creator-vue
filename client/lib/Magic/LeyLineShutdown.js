const Spell = require('../Spell');

class LeyLineShutdown extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Shutdown';
        this.group = 'Invocation';
        this.level = 'Fifteen';
        this.range = `Length of the ley line; does not affect connecting lines unless performed at a nexus, then all connecting lines are shutdown but for half the usual duration.`;
        this.duration = `One melee round (15 seconds) per every three levels of experience.`;
        this.cost = `3000 P.P.E. Very rare, but known to Plato and the Dragon Kings of Freehold.`;
        this.savingThrow = `None.`;
        this.description = `    This amazing spell momentarily short circuits a ley line. For one melee round or so (seldom more than a minute), the ley line energy completely disappears as if a power switch has suddenly been turned off! Those drawing P.P.E. from the line are suddenly without power. Ley Line Phantoms and Faded individuals are instantly revealed. Ley Line Ghosts momentarily vanish with the ley line. Techno-Wizards or any practitioners of magic "riding" or using the line are deprived of the power to continue to do so. Spells relying on the energy line fail or stop as a result of the disruption of power, meanwhile ley line transmissions end abruptly, Observation Balls disappear, and no ley line ability can be performed! Any Wing Boards and other Techno-Wizard vehicles completely reliant on the energy lines fall out of the sky, plunging to earth like lead balloons. When the ley line reappears, new spells can be cast, and TW items that draw on the line energy will buzz back to life.`;
    }
}

module.exports = LeyLineShutdown;