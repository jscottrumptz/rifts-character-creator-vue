const Skill = require('../Skill');

class MilitaryFortification extends Skill {
    constructor() {
        super();
        this.name = `Military Fortification`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The knowledge in the design and building of basic defensive structures suitable for modern Mega-Damage combat. If provided with the right materials and time,the character can build defensive walls,bunkers, and tank traps, as well as understand the value of natural terrain that includes obstacles to impede movement and protective structures to shield friendly forces from enemy fire. The character is trained to prepare barbed wire, tank obstacles, tangle foot wire, booby traps, trenches, tank ditches, foxholes/shell scrapes, reinforced concrete or earthen walls, bunker complexes, rail gun/mortar emplacements, tunnel systems, and similar defensive constructions. Even with the advent of Mega-Damage warfare, these old classic fortifications have useful applications. Obstacles like ditches and minefields slow the advance of robots, infantry and tanks, exposing them for longer periods to defender firepower. Earthen walls and foxholes, made from S.D.C. materials, still afford soldiers some protection and can disperse energy blasts or deflect shrapnel from explosives. If these protective structures are built with Mega-Damage concrete and alloys they provide defenders with as much protection as any robot vehicle or tank.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = MilitaryFortification;