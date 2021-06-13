const Psionic = require('../Psionic');

class Ectoplasm extends Psionic {
    constructor() {
        super();
        this.name = 'Ectoplasm';
        this.group = 'Physical';
        this.range = '40 feet +5 feet ( 12.2 + 1.5 m) per level of experience.';
        this.duration = '4 minutes (16 melees) per level of experience.';
        this.cost = '(Vapor): 6 I.S.P.  (Solid):12 I.S.P.';
        this.description = `    This mystifying ability enables the psychic to create a slightly luminous, vapor-like substance that is exuded from the pores. Ectoplasm has two forms: an invisible vapor and a luminous, solid state. 
    The vapor is a sort of floating, probing finger that can snuff out candles, open doors, knock over or pick up small objects (weighing under 9 ounces/255 grams), tap somebody on the shoulder, rustle leaves and knock on a door. The Ectoplasmic vapor can be seen only by its creator, psychics and supernatural beings who can see the invisible, or with infrared optic systems (including infrared camera lenses, infrared gun sights, binoculars, etc.). Ectoplasm, although an invisible vapor, has physical properties, which means it cannot go through walls or solid objects. Thus, a person walking into an ectoplasm stream may feel a slight sensation, like walking into a spider's web or brushing against a cotton ball. Often a person will unwittingly walk into and snag the stream of floating ectoplasm, pulling or stretching it along without being aware of it. In such cases, the psychic must maneuver the snagged portion to loop around the human obstruction. The creator of the vapor can control the full length of the vaporous stream like a floating tentacle. Although the vapor cannot go through solid objects it can slip through keyholes, cracks under doors or loose seals around a window. If a breeze can blow through, so can ectoplasm. The only drawback is that the psychic must be able to see the ectoplasm to maneuver it. 
    The solid state of ectoplasm can be a startling sight. In this form the ectoplasm can be shaped into an extra limb, such as an arm and hand, or just a hand or tentacle, or even a foot attached to a long stream spooling out of the psychic. The Ectoplasmic limb appears as a white, slightly luminous appendage connected to a trail of ectoplasm stretching back to its creator like a life-line of silly putty. The appendage and its connecting line can hover, float, levitate and fly (at a speed of I 8). The solid ectoplasmic limb has much greater strength and is able to carry, lift or hold up to 40 lbs. (18 kg), but cannot squeeze through the tiny openings that the vapor can. An opening must be at least the size of a quarter for solid ectoplasm to fit, and then the limb must be turned into a thin tentacle and reformed on the other side of the opening. Ecto-plasm can also be used to create a face or even a full figure, although detailed features are impossible. Ectoplasmically created images may explain apparitions reported during some seances.

Ecto-Combat:
    The ectoplasm vapor and solid form both have an automatic dodge against all attacks directed at any of its length. That means an attempt to hack the middle of the ectoplasmic stream will see that portion of the ectoplasm suddenly swerve, loop or bend with a life of its own to avoid the attack. The dodge by the mid-section (or any-where else) does not count as a melee action by the ecto-appendage. Moreover, the ectoplasm's creator can direct the appendage to hit back or pick up and use a weapon. The solid ectoplasm appendage is not a great tool for combat, however. It limits its creator's attacks/actions per melee and has minimal strength; equal to about a P.S. attribute of 4. A punch or kick does a mere one point of Hit Point/S.D.C. damage. Damage can be increased by the appendage using any type of hand-held weapon weighing under 40 lbs. (18 kg) and less than five feet (1.5 m) long. Small modern weapons, such as an energy pistol or revolver, can be used, but are -IO to strike. Meanwhile, the vapor cannot use any weapons weighing more than 9 ounces and can inflict no damage of its own. 
    A vapor or solid appendage must be controlled by its creator at all times (except the automatic dodge); thus, it has a number of attacks/actions equal to its creator. So, if the psychic has four attacks per melee, the ectoplasm appendage also has four attacks. However, each attack/ action by the ectoplasm counts as one of its creator's actions for that melee round.

Ecto-Combat Statistics:
• Vapor and solid get an automatic dodge against all attacks, including multiple or simultaneous attacks.
• +5 to dodge; applies to vapor and solid.
• + 1 to parry; applies to vapor and solid. 
• + 1 to strike; applies to vapor and solid. 
• Vapor inflicts no physical damage, but can touch, tap or pick up and carry objects weighing 9 ounces or less. 
• Solid ectoplasm inflicts one point of damage in combat or by weapon. 
• Attacks or actions per melee are equal to its creator's. A pair of ectoplasmic limbs will divide the attack between the two equally. 
• Astral S.D.C. is 40 plus one Hit Point. Applies to vapor and solid. If the ectoplasm is destroyed the creator takes one Hit Point and I 0 S.D.C. points of physical damage.
• Sunlight or bright artificial light (250 watts) reduces the range to half. 
• Maximum range possible for vapor and solid is 40 feet plus 5 feet per level of experience (12.2 m + 1.5 m per level). 
• One full melee (15 seconds) is required to create an ectoplasm vapor or solid appendage. Half a melee (7 seconds) is needed to with-draw/return ectoplasm into its creator.
`;
    }
}

module.exports = Ectoplasm;