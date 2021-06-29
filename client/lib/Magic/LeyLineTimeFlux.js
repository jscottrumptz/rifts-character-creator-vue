const Spell = require('../Spell');

class LeyLineTimeFlux extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Time Flux';
        this.group = 'Invocation';
        this.level = 'Nine';
        this.range = `Self and one other per level of experience.`;
        this.duration = `To slow or increase the seeming passage of time: Five minutes per level of the spell caster.
To leap ahead in time, the effect takes only 15 seconds (one melee round), but the character(s) can leap forward up to 12 hours per level of experience (double for Temporal Raiders and Temporal Wizards). Time travel must go forward in nothing less than increments of one minute (60 seconds).`;
        this.cost = `80 P.P.E. (half for Ley Line Walkers, Shifters, Temporal Raiders and Temporal Wizards).`;
        this.limitations = `Only works on a ley line.`;
        this.savingThrow = `Standard for those who do not wish to be affected by this spell.`;
        this.description = `    This spell has a few different possible applications.
1. Speed up or slow down time. The spell caster can create one of the following time altering effects (pick one). This magic only works on those on one specific ley line, or the connecting lines joined at a specific nexus junction. Everybody on the ley line, including friends and foes, feel the same affect. Only the spell caster is immune.
    Note: Percentile numbers are provided for random determination of a Time Flux as a random dimensional anomaly. This often occurs during ley line surges (ie. solstices, planetary alignments, etc.) and after Ley Line Storms (01 -33% chance).
    01-50 Time seems to be moving too quickly while the character(s) seems to be moving in slow motion. What seems to be five minutes is really 10 or 15. Skill performance, duties, travel time/distance covered, and similar takes twice as long to do than it should. The character(s) affected will feel frustrated and behind schedule.
    51-00 Time seems to be moving slowly while the character(s) seem to be moving quickly. What seems to be 10 or IS minutes is really only five. Skill performance, duties and travel time/distance travelled takes half the time they would normally. The character(s) affected will feel like a dynamo who is ahead of schedule.
2. This spell can negate random Time Flux events as well as a Time Flux spell and its effects cast by a different mage.
3. An alternative use of the Time Flux spell is "Time Leap." The spell caster can use this incantation to leap forward (never backward) in time. The use of the Time Flux in this capacity will make the mage and one additional individual, animal or vehicle (no larger than a van; each person inside counts as one individual) per level of the spell caster's experience teleport into the future. The mage and his companions disappear from the here and now, to reappear several hours or days into the future (which becomes their here and now)! They always reappear at the same point where they leapt forward in time, and the entire process for the time travelers seems to take only a few seconds even if days have passed.
    Unfortunately, by leapfrogging ahead in time, the time travelers have no knowledge of what has transpired while they were gone. Although only seconds have passed for them, the rest of the world continued to proceed as usual, with the natural passage of time and chain of events going forward. During this period, the time travelers seem to disappear from the face of the planet. Time leaping can be dangerous, because the future is a fluid and ever changing thing. Schedules may be altered and unexpected events can change plans and projections. Consequently, j umping ahead in time could mean missing a battle or event where the character(s) were desperately needed, or appearing in the middle of a conflict that they thought would have ended hours or days earlier. Similarly, events that the character(s) miss or avoid by Time Leaping may have a different outcome than expected because he (or they) were not present to make a difference.`;
        this.note = `Leaping forward in time involves skipping time, not space, so this spell can not be used to teleport someplace else. The time travelers reappear at the same place on the ley line where they leapt forward in time to reappear there "later." This spell only works when performed on a ley line, but once a Time Leap is completed the participants are free to physically leave the line and travel anywhere. If there is an obstruction at the exact location of departure, the time traveler(s) will appear at the nearest point to it (they do not materialize inside or under the obstruction).`;
    }
}

module.exports = LeyLineTimeFlux;