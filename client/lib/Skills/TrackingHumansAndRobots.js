const Skill = require('../Skill');

class TrackingHumansAndRobots extends Skill {
    constructor() {
        super();
        this.name = `Tracking: Humans & Robots`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.note = `The track humanoid skill requires concentration, focus, and time to examine the trail. It will require at least one full melee round (15 seconds) of observation to pick up a trail and can not be used in the midst of combat where the character is distracted with staying out of the line of fire, finding cover, and staying alive.

Counter-tracking techniques are also known, and include covering one's trail, misdirection, parallel trails, avoiding obvious pitfalls like littering and others.

A failed Tracking: Humans & Robots roll means that the signs are inconclusive, vague or misleading. Additional signs must be found to verify or clarify (roll again). Three consecutive failed rolls, means the tracker has completely lost the trail. Roll once every 40 yards/meters when following a trail, unless it is very obvious, like that made by a caravan of wagons, a giant robot, or company of soldiers (30 or more). Characters attempting to follow a skilled tracker who is deliberately trying to conceal their trail suffer a penalty of -25% to stay on them. However, the character engaged in counter-tracking techniques travels at slow speeds, about half that of a casual rate of speed (or one-quarter their maximum speed).

The percentage covers both tracking and counter-tracking abilities. A character trained in tracking humans may attempt to track animals, creatures of magic and supernatural beings, but does so at half this skill's normal ability.`;
        this.description = `Visual tracking is the identification of tracks, and following the path of men, cyborgs, robots and animals by the signs they leave on the ground and vegetation. Tracking is a precise art, requiring much practice. The skill includes the evaluation of tracks, indicating whether the subject being tracked is loaded down with equipment, running, moving slowly (by measuring the space between steps), and so on. By this means, the tracker can estimate the subject's rate of movement, apparent direction, the number of people/robots in the party, and whether the person or machine appears to know they are being followed. Depending upon the shape of the being's feet and footwear, the tracker may also be able to tell the D-Bee or demon's race or species and whether it is an adult or juvenile. Other methods of tracking include recognizing tell-tale signs such as blood and other stains, broken and misplaced vegetation, overturned rocks, litter (such as cigarette butts, packing from food rations, candy wrappers, soiled bandages, campfire remains, etc.), and even odors carried by the wind. Likewise, the tire tracks of vehicle, the weight of its load, and sometimes even its make and year. Monsters, demons and animal-like beings are recognized by their tracks, habits, and faeces.`;
        this.perLvl = 5;
        this.base = 25;
    }
}

module.exports = TrackingHumansAndRobots;