const Skill = require('../Skill');

class HorsemanshipCowboyHorsemanship extends Skill {
    constructor() {
        super();
        this.name = `Horsemanship: Cowboy`;
        this.group = `Horsemanship`;
        this.isSecondary = false;
        this.note = `Bonuses:
+1 Initiative (while on horseback) at levels 2, 5, 10, & 15.
+2 Parry (while on horseback).
+2 Dodge (while on horseback).
+2 Rope/Ensnare/Entangle (while on horseback).
+2 Roll with Fall/Impact (when knocked/thrown from a horse).
+1D4 S.D.C. damage (from kicks and melee weapons while on horseback).
Charge attack (running horse) with polearm or spear; +2D6 S.D.C. damage or +1D6 M.D.C. damage, dependent upon weapon). Attacker must then successfully roll under second percentile to remain mounted upon impact. Charge attacks count as two attacks/actions.
Horse attack is possible; +4 to Strike (for horse).
Principles of riding, charge, and jumping.
Recognize breed and quality. (First percentile indicates the success ratio of accurately determining the breed, age, health, and general attributes/capabilities of the animal - racehorse, workhorse,warhorse, etc., as well as assessing it's strength, speed, and market value).
Knowledge of the proper gear to use.
Knowledge of the work methods, care, and feeding of the animal.
Breed horses (the first percentile indicates the level of knowledge and ability to raise, break, train, and breed horses. It also includes shoeing horses, giving birth, and curing minor ailments and injuries).
Hitch & Wagon (using first percentile, the character knows how to hitch, drive, and use horses, mules, oxen, and similar animals as a team to pull a wagon, plough, work a field, etc., and can make simple repairs to a wagon such as replace a thrown wheel, re-thread a hitch, etc.).
Remain in Saddle (using the second percentile to stay in the saddle and not get thrown when it has to jump, charge, dodge, kick, or perform dome other difficult manoeuvre or trick. Damage from being thrown form a horse is usually 1D6 S.D.C. plus the rider loses initiative and 2 melee attacks/actions).
Remain on and in control of a spooked animal (use second percentile to remain on the horse, and again to gain control over a spooked animal. Instinctively a horse's fear response is to flee, at full speed, running for 2D6 minutes and covering 1D4 miles (1.6-6.4km) before starting to relax and respond to the rider. Rider can attempt control once every 2 melee rounds (30 seconds). Horse will still be scared but under control. Angry or panicked horses rear up to throw any load carried (rider rolls second percentile -15% penalty to remain saddled), and then the horse bolts off, bucking to throw any loads or through trees or bush to remove any rider (rider must again roll second percentile). The rider must make a third roll (second percentile) to then take control of the animal. Failed rolls means the horse remains angry/panicked (the three rolls must be made again: 1st to remain saddled, 2nd to not be thrown off, 3rd to take control). Thrown riders take 1D6 S,D.C. damage, loses initiative and 2 melee attacks/actions.
Racing (2nd percentile is success ratio of getting maximum speed while racing at full gallop. Failed rolls means horse is 1D10% under maximum speed. Success means full speed attained. Every 4 minutes overdrive may be instigated, pushing the horse to 2D10% faster than normal maximum speed. Can be maintained for 1 minute and to a maximum of three times in a 30-minute period. Maximum speed can be maintained for minutes equal to the horse's P.E.. Pushing a horse beyond it's endurance causes it to slow to 30% below maximum speed and if forced to maintain that (albeit reduced) speed for more than 1D6+4 minutes it will collapse from exhaustion. Exhausted horses require at least 30 minutes of rest (walking and grazing) and an hour of walking or slow trot (not faster than 25% maximum) before it can again run at maximum or overdrive.
+1 Initiative (while on horseback) at levels 2, 5, 10, & 15.
+2 Parry (while on horseback).
+2 Dodge (while on horseback).
+2 Rope/Ensnare/Entangle (while on horseback).
+2 Roll with Fall/Impact (when knocked/thrown from a horse).`;
        this.description = `This skill is not available to most O.C.C.s. The American cowboy is, arguably, the most skilled and versatile horseman in the world, especially when riding combined with skills such as Roping and Herding as part of the cowboy's repertoire of horsemanship related skills, skills not normally available to other horsemen such as knights. Only the Cossack is on par with a cowboy.`;
        this.perLvl = 3;
        this.baseTwo = 50;
        this.base = 66;
    }
}

module.exports = HorsemanshipCowboyHorsemanship;