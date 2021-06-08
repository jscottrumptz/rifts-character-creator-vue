const Skill = require('../Skill');

class HorsemanshipExoticAnimalsHorsemanship extends Skill {
    constructor() {
        super();
        this.name = `Horsemanship: Exotic Animals`;
        this.group = `Horsemanship`;
        this.isSecondary = true;
        this.note = `Characters with any Horsemanship skill can quickly figure out how to ride exotic animals and alien riding beasts but at a penalty of-12% to ride ground/running animals and at -20% to ride flying animals or tree climbing and leaping animals. Similarly, beings from other dimensions not familiar with riding fast and sleek Earth horse are -10% to ride them. Penalty applies to the second percentile for tricks, stunts, racing, and maintaining control. The horseman knows nothing about judging quality nor the care or grooming of exotic animals.

+1 Parry (while on animal).
+1 Dodge (while on animal)
+1D4 S.D.C. damage (from kicks and melee weapons while on animal).
Charge attack (running animal) with polearm or spear; +1D6 damage (S.D.C.or M.D.C. dependent upon weapon). Attacker must then successfully roll under second percentile to remain mounted upon impact. Charge attacks count as two attacks/actions.
Animal attack is possible (no bonuses).
Principles of riding, charge, and jumping.
Recognize breed and quality. (First percentile indicates the success ratio of accurately determining the breed, age, health, and general attributes/capabilities of the animal - racing, workbeast,war animal, etc., as well as assessing it's strength, speed, and market value).
Knowledge of the proper gear to use.
Knowledge of the work methods, care, and feeding of the animal.
Breed animal (the first percentile indicates the level of knowledge and ability to raise, break, train, and breed the animal. It also includes shoeing (if required), giving birth, and curing minor ailments and injuries).
Hitch & Wagon (using first percentile, the character knows how to hitch, drive, and use the animal, and similar animals, as a team to pull a wagon, plough, work a field, etc., and can make simple repairs to a wagon such as replace a thrown wheel, re-thread a hitch, etc.).
Remain in Saddle (using the second percentile to stay in the saddle and not get thrown when it has to jump, charge, dodge, kick, or perform dome other difficult manoeuvre or trick. Damage from being thrown form an animal is usually 1D6 S.D.C. plus the rider loses initiative and 2 melee attacks/actions).
Remain on and in control of a spooked animal (use second percentile to remain on the animal, and again to gain control over a spooked animal. [See individual animal's nature concerning how it reacts in this situation as compared to the horse.] Thrown riders typically take 1D6 S,D.C. damage, loses initiative and 2 melee attacks/actions.
Racing (2nd percentile is success ratio of getting maximum speed while racing at full gallop. Failed rolls means animal is 1D10% under maximum speed. Success means full speed attained. Every 4 minutes overdrive may be instigated, pushing the animal to 2D10% faster than normal maximum speed. Can be maintained for 1 minute and to a maximum of three times in a 30-minute period. Maximum speed can be maintained for minutes equal to the animal's P.E.. Pushing an animal beyond it's endurance usually causes it to slow to 30% below maximum speed and if forced to maintain that (albeit reduced) speed for more than 1D6+4 minutes it may collapse from exhaustion (compare animal's nature to the horse in this situation). Exhausted horses require at least 30 minutes of rest (walking and grazing) and an hour of walking or slow trot (not faster than 25% maximum) before it can again run at maximum or overdrive and the animal may be similar.`;
        this.description = `The basic riding skill but the character is experienced in riding tame animals other than the horse. Exotic animals can include: elephants, camels, lamas, pegasus, gryphons, dinosaurs, giant insects, and other monstrous beasts trained (or willing) to be ridden. Wild, untamed creatures can not be ridden, except by Simvan and select other characters with special animal skills or powers.`;
        this.perLvl = 5;
        this.baseTwo = 20;
        this.base = 30;
    }
}

module.exports = HorsemanshipExoticAnimalsHorsemanship;