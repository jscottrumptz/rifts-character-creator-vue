const Psionic = require('../Psionic');

class TelekineticForceField extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Force Field';
        this.group = 'Super';
        this.range = 'Self or 40 feet ( 12.2 m) per level of experience within line of vision.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '30 I.S.P.';
        this.savingThrow = `Dodge at -6.`;
        this.description = `    The psychic can instantly erect a force field around himself or others in the blink of an eye. If the creation of the force field is to parry an attack, the psionic must roll a successful parry to see if he was able to create the field before the attack strikes. A successful parry means the force field' beat the attacker's strike and it absorbs the damage. TK Force Fields parry incoming attacks (both energy and projectiles) sim-ply by being created before the attack arrives. Any parries with the Force Field are done with straight rolls (normal parry bonuses do not apply). Once created, they have neither bonuses or penalties, they sim-ply absorb the incoming damage. 
    The TK Force Field can be made so that it only encircles its creator, or as large an area as a 10 foot (3 m) diameter per level of experience, and can be created yards/meters away, but always within the line of vision. The smallest force field possible covers about a three foot area (0.9 m). The field is a Mega-Damage structure with 25 M.D.C. per level of experience. 
    Once one field is created, the psychic can create as many others as his I.S.P. will allow. All must be in the character's line of vision. The TK Force Field(s) will remain in place until all its M.D.C. is destroyed or its creator dispels it. If the psychic is rendered unconscious or killed, the force fields instantly vanish. However, the psychic can choose to leave the area with his force fields still in place. They will remain until the duration time limit expires. People may be able to move around in-side a force field, but the force field itself cannot be moved once it is in place. The TK Force Field is actually a force bubble and is airtight, with enough air inside for the duration of the field. 
    If attempting to cast a Force Field around an unwilling target, they would get the chance to dodge out before the force field made it completely around them, but only if they knew in advance that the entrapment attack was coming, and even then they'd be -6 to dodge. 
    For an attacker to get inside a force field he must destroy all of its M.D.C. and in so doing, destroy the field itself. Any weapon blasts, explosions and magical energy attacks, such as Call Lightning, Fire Ball, etc., will hit the Force Field, they cannot be made to appear inside the field. It will also stop area effect magic. For instance, a Carpet of Adhesion will adhere to the force field instead of the people inside, and a magic cloud may cover the sphere of force but it does not penetrate the protective field. However, Teleportation can be used to pop inside be-cause the mage can see his destination inside. Likewise, intangible spirits and Astral Beings can pass through force fields. Psionic mental attacks, Empathic Transmission and Bio-Manipulation can still be made to affect the minds of those inside the force field, provided the at-tacker has line of sight. Likewise, any psychic can use his psionic powers on those outside while he is inside the walls of the force field; line of sight. 
    Characters inside the force field suffer from the same limitations and cannot fire weapons or energy magic from within the force field 
    without hitting and damaging their protective bubble, and anyone caught inside a force field bubble is trapped inside until they blast their way out (destroying its M.D.C.) or the duration time elapses.`;
        this.note = `A TK Force Field can NOT be used to suffocate someone by putting an airtight bubble around their head. Force Field requires some form of support (even though it is composed of energy) and must be created on solid ground. Once created, it can NOT be moved. A Dispel Magic Barriers will not affect a psionic force field (it's not magical).`;
    }
}

module.exports = TelekineticForceField;