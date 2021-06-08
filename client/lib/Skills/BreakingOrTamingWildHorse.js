const Skill = require('../Skill');

class BreakingOrTamingWildHorse extends Skill {
    constructor() {
        super();
        this.name = `Breaking or Taming Wild Horse`;
        this.group = `Cowboy`;
        this.isSecondary = false;
        this.description = `To 'break' a horse, first the trainer must get the horse used to being around people, then used to having a saddle on its back (this takes 3D4 days), and then the horse is 'bit' trained (gets it used to having a bit in its mouth and reins). Finally, the trainer must get the horse used to having a rider on its back. Depending on the horse, this can take a couple of weeks (making an attempt every day) to several weeks with moderate success. It takes a lot of skill to stay on a wild horse when the animal wants you off. Some horses are never completely tame, and some will allow certain people to ride them, while bucking and throwing other riders. During the initial training period the rider must hang on for dear life while the horse does everything in its power to throw them. This battle of wills can last hours at a time and take up to 12 weeks.`;
        this.penalty = `-10% when breaking exotic and alien animals
-15% steer wrestling
-15% riding wild bulls (can not be broken), wild broncos, and other wild animals.`;
        this.perLvl = 5;
        this.base = 20;
    }
}

module.exports = BreakingOrTamingWildHorse;