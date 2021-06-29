const Spell = require('../Spell');

class SwallowingRift extends Spell {
    constructor() {
        super();
        this.name = 'Swallowing Rift';
        this.group = 'Invocation';
        this.level = 'Twelve';
        this.range = `Opens at a ley line nexus, but affects a one mile (1.6 km) radius around the portal, triple if part of a triangular ley line grid.`;
        this.duration = `One melee round (15 seconds) per level of the spell caster.`;
        this.cost = `300 P.P.E. (half for Shifters).`;
        this.savingThrow = `None.`;
        this.description = `    For just a few minutes, a temporary dimensional portal can be opened at a nexus point where two or more ley lines cross. This Rift is enormous, towering one mile (1.6 km) high. This Rift also creates a light windstorm (2D6+ 10 mph/ 19-35 km) with the wind flowing into the Rift. The wind and magical energy in the air inflict a penalty of -2 to strike and -20% to piloting skills for aircraft and other fliers, including power armor and those with wings or empowered by magical flight. Any non-living object carried on the wind is sucked into the Rift, including missiles. Whatever is pulled into the Rift is sent to a different dimension and is forever lost. Most intelligent beings and animals can avoid this fate, but missiles, weapons knocked loose in the air and light objects not touching the ground and weighing under 10 pounds (4.5 kg), and within a one mile radius ( l .6 km) of the Rift, are swallowed by it. Where these portals lead is unknown, but is presumed to be a limbo-like or inhospitable environment.
    Living beings who get "swallowed" vanish for as long as the Rift is active (lost to a swirl of chaos), but after it closes they reappear 2D6 minutes later somewhere along one of the connecting ley lines. They are dazed for 1D4 melee rounds (reduce combat bonuses by half and speed by 20%) from their dizzying experience, but are none worse for the wear.`;
        this.note = `One can combine the Swallowing Rift with the Triangular Defense, provided the necessary ley lines and nexus points are available.`;
    }
}

module.exports = SwallowingRift;