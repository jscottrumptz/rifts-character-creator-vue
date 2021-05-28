const Skill = require('../Skill');

class VehicleArmourer extends Skill {
    constructor() {
        super();
        this.name = `Vehicle Armourer`;
        this.group = `Mechanical`;
        this.isSecondary = `false`;
        this.note = `Extra Armour
Replace S.D.C. body with M.D.C. body or add more M.D.C. to M.D.C. armour at:-
12 M.D.C. per level of experience to military/combat vehicles, full-sized vans and large trucks. Reduce speed by 5% for every extra 24 M.D.C. of armour on military vehicles.
5M.D.C. per level on commercial (non-combat) vehicles. Reduce speed by 5% for every extra 10 M.D.C. of armour on commercial vehicles
Add a ram prow (does an extra 2D6 M.D. damage on ram attacks, plus 1D6 M.D. for every 40 mph/64 kmph of speed; ram prow has 1D4x10 M.D.C. +7 M.D.C. per level of experience). Reduce speed by 10% for adding a ram prow.
Custom Body Modifications
Repaint, modify, or completely reconfigure the body of a vehicle to change or disguise its original appearance, or to make it look innocent, old, new, scary, or sleek.
Turn interior into a sealed, environmental compartment and/or add a reinforced pilot or crew compartment (1D4x10M.D.C., +5 M.D.C. per level of experience) inside the vehicle.
Move the location of the engine and/or gas tank.
Add a gas tank.
Soup-up with heavy-duty shock absorbers (in effect adds 10 M.D.C. to reinforced pilot or crew compartment).
Extend or shorten wheelbases, and similar changes.
Replace S.D.C. components and parts with M.D.C. equivalents
May include such things as:-
Add hand grips (1D4 M.D.C. each) and railings (1D6+3 M.D. C. each).
Extra or fewer headlights (1D4 M.D.C.).
Add a spotlight (small: 1D6 M.D.C.) or a medium searchlight (2D4+4 M.D.C.) or a large searchlight (2D6+6 M.D.C.).
Remove doors and replace them with locking hatches (1D6x10 M.D.C., +5 M.D.C. per level of experience).
Change windows to slits with armoured glass (1D6+6 M.D.C.).
Add a roof mounted turret (1D4x10+15 M.D.C.).
Add or repair weapon mounts for heavy vehicle-mounted weapons (rail guns, machine-guns, mini-missile launchers, heavy lasers, flame throwers, etc.) but can not hook up the weapon or ammo drum or modify the actual weapon unless they also have the Weapon Systems skill.
Note that all the above is illegal in the Coalition States and some other kingdoms and communities(park your vehicle on the outskirts of town), and perfectly legal at others, especially those that cater to mercenaries (Kingsdale, MercTown, Arzno, etc.). Acquiring military grade weapons, ammo, parts, and vehicles can also be a challenge (see Find Contraband skill).`;
        this.description = `This skill is usually reserved for the Military Technical Officer O.C.C. (Engineers and Mechanics) and Operator O.C.C. (probably working for the Black Market, weapon manufacturers like Northern Gun, military contractors, or somebody's military). The specialized skill in which the character can do more than just tinker with the mechanics of a vehicle.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Automatically gets Basic Mechanics skill at +20% as part of this skill.
+10% to Automotive Mechanics skill.
Drive/operate military vehicles and trucks at the base skill for that vehicle type.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = VehicleArmourer;