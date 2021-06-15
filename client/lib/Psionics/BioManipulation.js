const Psionic = require('../Psionic');

class BioManipulation extends Psionic {
    constructor() {
        super();
        this.name = 'Bio-Manipulation';
        this.group = 'Super';
        this.range = '160 feet ( 48.8 m).';
        this.duration = '4-16 minutes (roll 4D4).';
        this.cost = '10 I.S.P.';
        this.savingThrow = `Standard; if a character successfully saves against the attack he is not affected at all. This applies to all seven bio-manipulative attacks.`;
        this.note = `Bio-Manipulation will affect an opponent inside M.D.C. environmental body armor and light power armor (under 220 M.D.C.), but not heavy power armor, giant robots or armored, military vehicles.`;
        this.description = `    The psychic is able to induce physical trauma to the nervous system of others by sheer force of will and conveyance of psychic energy. This psi-power is also known as the Evil Eye , especially in rural areas where magic and folklore rule the day.
    There are seven types of Bio-Manipulation effects, all of which are available to those with this power. Each affects only one person per attack and can be used in any combination. Intended victims must be within line of vision or their exact location known to the psychic. Each costs 1 0 L S.P. to inflict.
    This psychic power enables the psychic to temporarily manipulate specific biological functions or conditions in human and animal life forms. The duration can be extended 4- 1 6 (4D4) minutes per additional 6 I.S.P.

    Blind
Temporarily knocks out the victim ' s optic nerves, rendering that person quite helpless. Victims are - 1 0 to strike, parry and dodge. Deafness: Can be caused by manipulating the eardrum. Victims can not hear anything, and are -6 to parry or dodge attacks from behind. In addition, the shock of suddenly becoming deaf makes them -3 to strike, parry or dodge any other attacks, and they automatically lose the initiative on all attacks while deaf.

    Mute
Impairs the victim's vocal cords, making speech impossible. Victims are likely to be shocked and panic, making them -2 to strike, parry and dodge for the first melee ONLY.

    Pain
By manipulating the nerve centers the psionic can induce terrible pain, shooting throughout the body. Victims are -6 to strike, parry, and dodge, and take one point of damage off their Hit Points (not S . D . C . ) per each minute affected.

    Paralysis
Immobilizes the motor part of the brain, causing legs and arms to stop functioning. Victims are completely incapacitated for the duration. Note: A paralyzed character can still use psionics but only if he has line of sight on his intended target. Spell casters need to speak, so they cannot cast spells while paralyzed.

    Stun
This attack disorients and confuses its victims. Victims forfeit one attack per melee, speed is cut by half, and the character is -4 to strike, parry, dodge, disarm, and all combat moves.

    Tissue Manipulation
Affects the tissue ' s connecting nerve fibers which can cause a variety of effects. By irritating the nerve fibers, a victim will suddenly feel itchy, as if breaking out in a severe rash. Through endothermic manipulation the victim can also be made to suddenly feel cold or hot while everyone around him feels fine. ALL three conditions are more annoying or frightening than physically impairing. In each case the victims are - I to strike, parry and dodge.`;
    }
}

module.exports = BioManipulation;