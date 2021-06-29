const Spell = require('../Spell');

class ManipulateObjects extends Spell {
    constructor() {
        super();
        this.name = 'Manipulate Objects';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `50 feet (15.2 m) +10 feet (3 m) per level of experience; line of sight.`;
        this.duration = `Two minutes (8 melee rounds) per level of experience.`;
        this.cost = `Varies; 2 P.P.E. per five pounds (2.3 kg).`;
        this.savingThrow = `None for inanimate objects. Living beings are immune to this magic.`;
        this.description = `    The Manipulate Objects spell was designed to help a sorcerer when he needs an extra pair of hands, but has nobody to assist him. It is used mainly to hold an item in mid-air, to bring an item from across the room without having to get up and get it, and to use magic energy to pick up, move, carry or hold one or more small objects. 
    The spell caster summons forth blue strands of magical energy that wrap around an item and bring it to him, hold it near or in place or still, or to pick up and carry it, following the mage around at waist or shoulder level. Being able to magically hold an item in mid-air until needed, or to magically carry or retrieve an item, allows the mage to keep his hands free to perform more delicate tasks. This also means the mystical movement of objects weighing less than to pounds (4.5 kg) is very simple and requires little concentration. When the mage is not consciously manipulating an object, the item hangs suspended 3-5 feet (0.9 to 1.5 m) above the ground, usually within arm's reach. 
    The P.P.E. cost varies with the combined weight of the objects, two P.P.E. points per five pounds (2.3 kg). 
    Inanimate objects get no save against this spell; this means that even tiny, lightweight robots get no save, although they may struggle or at-tack. 

    Limitations: 
Maximum speed of moving objects that weigh 10 lbs (4.5 kg) or less is a speed factor of I 0. Reduce speed by half when the total weight becomes I 00 lbs ( 45 kg) or more.
Maximum height: Six feet (18 m). 
Maximum number of objects: Two per level of experience. Maximum weight: IO pounds ( 4.5 kg) per level of experience. The spell caster cannot manipulate more than his maximum weight, so a first level spell caster can manipulate up to two items with a combined weight of IO lbs ( 4.5 kg), while a third level mage can manipulate as many as six items weighing up to 30 lbs (13.5 kg). 
    
    The magic force has the equivalent P.S. of 8, + 1 per additional level of the spell caster (9 at 2nd level, 10 at 3rd, etc.). 
    The magic energy is designed to hold and carry objects, so it can not be used to open a container, open a door or window, shoot a gun, pull a trigger or lever, press a button, or tum a knob, however, a small object can be "manipulated" to gently press or tap against a button or switch to turn it on or off. The spell caster must concentrate to direct the object and each action by the object counts as one of the character's melee actions. 
    Likewise, the slow speed of movement, relatively low P.S., and the fact that this spell is not intended for combat, means that small objects can NOT be hurled or used to stab or pound an opponent. Each object manipulated to hit/attack requires the conscious focus of the spell caster, uses up one of his attacks per melee, and is easy to dodge or parry (the magic force is -2 to strike, and no other combat bonuses apply).`;
        this.note = `This magic cannot be used to pick pockets or steal items unnoticed. Nor to grab an item, lift it in the air and drop it. The magic energy will not drop anything, because it is designed to hold and carry. A few seconds before the spell duration elapses, the objects are gently lowered to a tabletop or the floor.`;
    }
}

module.exports = ManipulateObjects;