const Psionic = require('../Psionic');

class TelemechanicPossession extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanic Possession';
        this.group = 'Super';
        this.range = 'Touch or 10 feet (3 m) per level of experience.';
        this.duration = 'Two minutes (8 melees) per level of experience.';
        this.cost = '50 I.S.P.';
        this.description = `    This ability is identical to the psionic power, Mentally Possess Others, in every way, except that the psychic possesses a machine rather than another person. The character overrides the programming/controls of the machine, even in the case of sentient machines, and controls it like a living robot. Essentially, the possessing psychic is an immaterial pilot who controls the machine as he desires; computers, factory equipment, vehicles, robots, empty power armor, a toaster, etc.
    While the psychic possesses the machine, it responds to the character ' s thoughts and does whatever he desires. Of course, physical, mechanical limitations still apply. The machine needs a power source and cannot do anything it is not normally capable of doing. For example, the psychic may be able to take possession of an energy rifle and make it shoot (or not) seemingly of its own volition, but he cannot make the rifle aim, move or hop around. Likewise, if the device is unplugged, or runs out of fuel, the machine is deactivated with no ill effect to the psychic, except his possession comes to a premature end. Likewise, if it needs wheels to move, destroying the wheels will cripple it, etc. If the machine he possesses is destroyed while the psychic ' s essence is still inside it, the character loses one third of his Hit Points (or one third of his M . D . C . if a Mega-Damage creature) from the shock and pain from the destruction of his surrogate machine body. Furthermore, he is stunned for I D4 minutes (reduce attacks per melee, speed, combat bonuses, and skill performance by half while stunned). During the period that the machine is possessed, the psychic ' s natural body falls into a coma-like state and is vulnerable to attack unless protected by others.
    While in mental possession of a simple machine, the psychic has only a vague awareness of his surroundings and can see, hear and feel things around him but as if in a cloud or haze. However, if the machine has optics and/or sensors, he is able to use them like his own natural eyes and senses. The machine, regardless of its capabilities and programming, has attacks and actions equal to those of the character possessing it.`
        this.savingThrow = `Special. Regular, non-intelligent machines cannot save vs Telemechanic Possession. Artificial intelligences (robots like Skelebots) need a 15 or higher to save and sentient machines (like Archie-3) require a 12 or better to save. Artificial intelligences and sentient machines also get to save when being forced to do something that is contrary to their programing. Cybernetic and bionic devices attached to living tissue can NOT be possessed. Neither can magic items, including Rune Weapons and Techno-Wizard devices.`;
        this.required = `Psychic must be a Master Psionic and also have the powers of Object Read [Sensitive] and Telemechanics [Super Psionics].`
        this.preq = ['telemechanics' , 'objectRead']
        this.preqType = 'Master'
    }
}

module.exports = TelemechanicPossession;