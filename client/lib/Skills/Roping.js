const Skill = require('../Skill');

class Roping extends Skill {
    constructor() {
        super();
        this.name = `Roping`;
        this.group = `Cowboy`;
        this.isSecondary = false;
        this.description = `Also see W.P. Rope and Rope Works

The rope is the cowboy's most important and famous tool.Characters with the Roping skill can expertly throw a rope to snare/lasso a cow's horns, a horses neck, or the hooves of either, to enable a 140 lbs. (63kg) man to capture and subdue a half-ton animal! Hitched around the saddle horn,a lariat can be used to pull a mired animal out of a bog, mud, or river,as well as keep a hobbled horse or other animal from straying away in the night or rain. The rope can even be used to contain and hold a herd of animals, as well as provide quick justice at the end of a hangman's noose.

The Roping skill includes knowledge and training in how to use a lariat/lasso, tie knots, expertly handle roped animals after they are snared without injuring them, bring them to a stop by taking quick turns of the lariat around the saddle horn (known as 'dally' or 'da la vuelta'), tether animals, and how to 'hog-tie' animals (after the animal has been lassoed, the horse backs up to make the rope taut while the cowboy 'tips' over the animal and ties three legs with a half-shank; used in separating stubborn animals from the herd, capturing wild animals, and branding). The rope/lariat can be used on cattle, horses, and even small dinosaurs and alien animals similar to cattle. This skill with a lariat can be executed standing on solid ground or while in motion. In fact, it is designed and intended to be done from horseback (or hovercycle) whilst moving.

A successful skill roll means the animal is caught in the lasso,usually ensnared by the horns, neck, a foot or leg, held tight and unable to run or pull away. Once ensnared, the cowboy can exercise any of the manoeuvres mentioned above, from pinning and tying up the animal up to controlling it and leading it back to the herd or holding pen.

A failed skill roll to lasso an animal or stationary target means it misses its mark, or hits but slips off with no effect.`;
        this.bonus = `+1 Entangle at levels 1, 3, 5, 7, 9, 11, and 14.
+10% Roping if Cowboy or Saddle Tramp O.C.C. (in addition to other O.C.C. bonuses)`;
        this.perLvl = 5;
        this.base = 20;
    }
}

module.exports = Roping;