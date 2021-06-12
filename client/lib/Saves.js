const StatValue = require('./StatValue')

// also make changes in OCC and Race
class Saves {
    constructor(
        poison = new StatValue,
        insanity = new StatValue,
        spell = new StatValue,
        pain = new StatValue,
        disease = new StatValue,
        drugs = new StatValue,
        ritual = new StatValue,
        possession = new StatValue,
        psionic = new StatValue,
        magic = new StatValue,
        toxin = new StatValue,
        coma = new StatValue,
        death = new StatValue,
        horror = new StatValue,
        illusion = new StatValue,
        mindControl = new StatValue,
        fatigue = new StatValue
    ) {
        this.poison = poison;
        this.poison.name = 'Poison';
        this.insanity = insanity;
        this.insanity.name = 'Insanity';
        this.spell = spell;
        this.spell.name = 'Spell';
        this.pain = pain;
        this.pain.name = 'Pain';
        this.disease = disease;
        this.disease.name = 'Disease';
        this.drugs = drugs;
        this.drugs.name = 'Drugs';
        this.ritual = ritual;
        this.ritual.name = 'Ritual';
        this.possession = possession;
        this.possession.name = 'Possession';
        this.psionic = psionic;
        this.psionic.name = 'Psionic';
        this.magic = magic;
        this.magic.name = 'Magic';
        this.toxin = toxin;
        this.toxin.name = 'Toxin';
        this.coma = coma;
        this.coma.name = 'Coma';
        this.death = death;
        this.death.name = 'Death';
        this.horror = horror;
        this.horror.name = 'Horror';
        this.illusion = illusion;
        this.illusion.name = 'Illusion';
        this.mindControl = mindControl;
        this.mindControl.name = 'Mind Control';
        this.fatigue = fatigue;
        this.fatigue.name = 'Fatigue';
    }

    getPoison() {
        return this.poison;
    }

    getInsanity() {
        return this.insanity;
    }

    getSpell() {
        return this.spell;
    }

    getPain() {
        return this.pain;
    }

    getDisease() {
        return this.disease;
    }

    getDrugs() {
        return this.drugs;
    }

    getRitual() {
        return this.ritual;
    }

    getPossession() {
        return this.possession;
    }

    getPsionic() {
        return this.psionic;
    }

    getMagic() {
        return this.magic;
    }

    getToxin() {
        return this.toxin;
    }

    getComa() {
        return this.coma;
    }

    getDeath() {
        return this.death;
    }

    getHorror() {
        return this.horror;
    }

    getIllusion() {
        return this.illusion;
    }
}

module.exports = Saves;