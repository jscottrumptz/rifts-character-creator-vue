const Spell = require('../Spell');

class ChromaticProtection extends Spell {
    constructor() {
        super();
        this.name = 'Chromatic Protection   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self or touch to cast the magic; 10 foot (3 m) range for the protective light against attacking enemies.`;
        this.duration = `The protection magic remains in effect for one minute (4 melees) per level of the spell caster and will automatically activate against each and every attacker (including simultaneous, multiple attackers) within its 10 foot (3 m) radius of influence. It can not protect against long-range attacks. Victim is blind for 1D4 melee rounds.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    This is a unique spell of protection that can be cast around any one living being or an inanimate object no bigger than an automobile. The only evidence of the spell being in place is a faint, blue glow around the enchanted person or object. The glow is virtually unnoticeable in daylight but obvious in the dark (making the recipient of its protection a more noticeable and easy target - attackers are +1 to strike him). 
    The magic is activated when an enemy tries to make a move to strike and hurt the character or object protected by the magic. The attacker, and only the attacker(s), is struck and blinded by a burst of brilliant, pulsing light, as if a dozen flash bulbs with the light intensity of the sun suddenly went off in rapid succession. Only the would-be attacker sees the light and is affected by it, so those around him will be unaware of any magic or even that the attacker has been afflicted by magic, unless they can sense or see magic energy. Furthermore, the light frequency magically adjusts to the spectrum of light by which the attacker sees, so it is effective against most life forms. (Note: It is not effective against those rare beings who use psionics, feelers, sense of smell and/or other senses to see/identify their victims and surroundings, including the Splugorth' s Altaran Blind Warrior Women.)
    The victim of the magical light pulses is temporarily blinded for 1D4 melee rounds, making him - 1 0 to strike, parry and dodge, as well as -4 on initiative and loses one melee attack/action each round he is blinded. Furthermore, his impaired vision makes it impossible for the character to read, he can not move faster than a speed of 8 without stumbling and falling (loses initiative and two melee actions per each fall), and any attempt to perform a skill is done as if blind, with a skill penalty of -80%.

    Further Notes:
1. The spell caster must touch the recipient of this magical protection or can cast the spell on himself.
2. The light is magical and will penetrate non-magical armor and visors, so even characters in environmental body armor or power armor will suffer its effects. Only magical, rune or Bio-Wizard armor, Techno-Wizard armor, and rare items created by the gods designed to protect the eyes from magical light can negate the effects of this spell.
3. Dragons, greater demons, demon lords, gods (even lesser ones) and alien intelligences are not affected by this spell, and most lesser/minor supernatural beings recover in half the time (reduce the duration of penalties by halt).
4. The spell will affect those who make a clear and obvious physical move to attack, including raising one ' s hand in a hostile gesture, a punch, kick, bite, pointing a weapon at the character, or making a verbal threat followed by drawing a weapon or even picking up a chair to use as a club or to throw. In all cases, the attacker must make the first hostile action.`;
    }
}

module.exports = ChromaticProtection;