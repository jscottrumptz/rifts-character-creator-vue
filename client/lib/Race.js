const StatRoll = require('./StatRoll');

const { Random } = require('random-js');
const random = new Random();

class Race {
    constructor(
        name = '',
        description = '',
        image = '',
        availableOCCs = 'Any.',
        psionicsDesc = `Standard; the same probability of psionic powers as a human.`,
        abilitiesDesc = `As per O.C.C.`,
        magicDesc = `None, unless a Magic O.C.C. is chosen.`,
        cyberneticsDesc = `As per O.C.C.`,
        skillsDesc =  `By O.C.C. only.`,
        disposition = '',
        habitat = '',
        allies = '',
        rivals = '',
        pronunciation = '',
        alias = '',
        alignment = 'Any.',
        heightMin = 0,
        heightMax = 0,
        weightMin = 0,
        weightMax = 0,
        lifespan = new StatRoll,
        lifespanDesc = 'years.',
        sizeDesc = 'feet tall.',
        weightDesc = 'lbs.',
        otherBonusText = '',

        iqRoll = new StatRoll,
        meRoll = new StatRoll,
        maRoll = new StatRoll,
        psRoll = new StatRoll,
        ppRoll = new StatRoll,
        peRoll = new StatRoll,
        pbRoll = new StatRoll,
        spdRoll = new StatRoll,

        iq = 0,
        me = 0,
        ma = 0,
        ps = 0,
        pp = 0,
        pe = 0,
        pb = 0,
        spd = 0,

        // SKILLS
        rccSkills = [],
        reqRcc = [],
        rccRelatedSkills = [],
        rccRelatedAtLevel = [],
        reqRccRelated = [],
        secondarySkills = [],
        secondaryAtLevel = [],

        // SECONDARY STATS
        hp = new StatRoll,
        hpLvl = new StatRoll,
        hpDay = new StatRoll,
        hpText = '',
        sdc = new StatRoll,
        sdcLvl = new StatRoll,
        sdcDay = new StatRoll,
        sdcText = '',
        mdc = new StatRoll,
        mdcLvl = new StatRoll,
        mdcDay = new StatRoll,
        mdcText = '',
        ppe = new StatRoll,
        ppeLvl = new StatRoll,
        ppeDay = new StatRoll,
        ppeText = '',
        isp = new StatRoll,
        ispLvl = new StatRoll,
        ispDay = new StatRoll,
        ispText = '',
        horror = new StatRoll,

        // BONUSES
        perceptionBonus = new StatRoll,
        initiativeBonus = new StatRoll,
        strikeBonus = new StatRoll,
        parryBonus = new StatRoll,
        dodgeBonus = new StatRoll,
        rollBonus = new StatRoll,
        pullBonus = new StatRoll,
        attacksBonus = new StatRoll,
        handDamageBonus = new StatRoll,
        disarmBonus = new StatRoll,
        knockoutBonus = new StatRoll,
        deathBlowBonus = new StatRoll,
        bodyFlipBonus = new StatRoll,
        criticalBonus = new StatRoll,
        entangleBonus = new StatRoll,

        // SAVES
        poisonBonus = new StatRoll,
        insanityBonus = new StatRoll,
        spellBonus = new StatRoll,
        painBonus = new StatRoll,
        diseaseBonus = new StatRoll,
        drugsBonus = new StatRoll,
        ritualBonus = new StatRoll,
        possessionBonus = new StatRoll,
        psionicBonus = new StatRoll,
        magicBonus = new StatRoll,
        toxinBonus = new StatRoll,
        comaBonus = new StatRoll,
        deathBonus = new StatRoll,
        horrorBonus = new StatRoll,
        illusionBonus = new StatRoll,
        mindControlBonus = new StatRoll,
        fatigueBonus = new StatRoll,

        // CHANCES
        trustBonus = new StatRoll,
        intimidateBonus = new StatRoll,
        charmBonus = new StatRoll,
        impressBonus = new StatRoll,

        // CURRENCIES  
        credits = new StatRoll,
        blackMarketItems = new StatRoll,
        gems = new StatRoll,
        gold = new StatRoll,
        tradableItems = new StatRoll
    ) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.availableOCCs = availableOCCs;
        this.psionicsDesc = psionicsDesc;
        this.abilitiesDesc = abilitiesDesc;
        this.magicDesc = magicDesc;
        this.cyberneticsDesc = cyberneticsDesc;
        this.skillsDesc = skillsDesc;
        this.disposition = disposition;
        this.habitat = habitat;
        this.allies = allies;
        this.rivals = rivals;
        this.pronunciation = pronunciation;
        this.alias = alias;
        this.alignment = alignment;
        this.heightMin = heightMin;
        this.heightMax = heightMax;
        this.weightMin = weightMin;
        this.weightMax = weightMax;
        this.lifespan = lifespan;
        this.lifespanDesc = lifespanDesc;
        this.sizeDesc = sizeDesc;
        this.weightDesc = weightDesc;
        this.otherBonusText = otherBonusText;

        this.iqRoll = iqRoll;
        this.meRoll = meRoll;
        this.maRoll = maRoll;
        this.psRoll = psRoll;
        this.ppRoll = ppRoll;
        this.peRoll = peRoll;
        this.pbRoll = pbRoll;
        this.spdRoll = spdRoll;

        this.iq = iq;
        this.me = me;
        this.ma = ma;
        this.ps = ps;
        this.pp = pp;
        this.pe = pe;
        this.pb = pb;
        this.spd = spd;

        // SKILLS
        this.rccSkills = rccSkills;
        this.reqRcc = reqRcc;
        this.rccRelatedSkills = rccRelatedSkills;
        this.rccRelatedAtLevel = rccRelatedAtLevel;
        this.reqRccRelated = reqRccRelated;
        this.secondarySkills = secondarySkills;
        this.secondaryAtLevel = secondaryAtLevel;

        // SECONDARY STATS
        this.hp = hp;
        this.hpLvl = hpLvl;
        this.hpDay = hpDay;
        this.hpText = hpText;
        this.sdc = sdc;
        this.sdcLvl = sdcLvl;
        this.sdcDay = sdcDay;
        this.sdcText = sdcText;
        this.mdc = mdc;
        this.mdcLvl = mdcLvl;
        this.mdcDay = mdcDay;
        this.mdcText = mdcText;
        this.ppe = ppe;
        this.ppeLvl = ppeLvl;
        this.ppeDay = ppeDay;
        this.ppeText = ppeText;
        this.isp = isp;
        this.ispLvl = ispLvl;
        this.ispDay = ispDay;
        this.ispText = ispText;
        this.horror = horror;

        // BONUSES
        this.perceptionBonus = perceptionBonus;
        this.initiativeBonus = initiativeBonus;
        this.strikeBonus = strikeBonus;
        this.parryBonus = parryBonus;
        this.dodgeBonus = dodgeBonus;
        this.rollBonus = rollBonus;
        this.pullBonus = pullBonus;
        this.attacksBonus = attacksBonus;
        this.handDamageBonus = handDamageBonus;
        this.disarmBonus = disarmBonus;
        this.knockoutBonus = knockoutBonus;
        this.deathBlowBonus = deathBlowBonus;
        this.bodyFlipBonus = bodyFlipBonus;
        this.criticalBonus = criticalBonus;
        this.entangleBonus = entangleBonus;

        // SAVES
        this.poisonBonus = poisonBonus;
        this.insanityBonus = insanityBonus;
        this.spellBonus = spellBonus;
        this.painBonus = painBonus;
        this.diseaseBonus = diseaseBonus;
        this.drugsBonus = drugsBonus;
        this.ritualBonus = ritualBonus;
        this.possessionBonus = possessionBonus;
        this.psionicBonus = psionicBonus;
        this.magicBonus = magicBonus;
        this.toxinBonus = toxinBonus;
        this.comaBonus = comaBonus;
        this.deathBonus = deathBonus;
        this.horrorBonus = horrorBonus;
        this.illusionBonus = illusionBonus;
        this.mindControlBonus = mindControlBonus;
        this.fatigueBonus = fatigueBonus;

        // CHANCES
        this.trustBonus = trustBonus;
        this.intimidateBonus = intimidateBonus;
        this.charmBonus = charmBonus;
        this.impressBonus = impressBonus;

        // CURRENCIES 
        this.credits = credits;
        this.blackMarketItems = blackMarketItems;
        this.gems = gems;
        this.gold = gold;
        this.tradableItems = tradableItems;
    }

    bonusRoll(attribute) {
        if (!attribute.bonus) {
            attribute.bonus = 0;
        }

        if (!attribute.sides || !attribute.amount) {
            attribute.sides = 0;
            attribute.amount = 0;
        }

        if (!attribute.multiplier) {
            attribute.multiplier = 1;
        }

        let attributeRoll = random.dice(attribute.sides, attribute.amount)

        let raceBonus = (attributeRoll.reduce((a, b) => a + b, 0) * attribute.multiplier) + attribute.bonus;

        return raceBonus
    }

    rollSecondary() {

    }

    getSecondary() {

    }

    rollBonuses(character) {
        // SECONDARY STATS
        character.secondaryStats.hp.raceBonus = this.bonusRoll(this.hp);
        character.secondaryStats.hpLvl.raceBonus = this.bonusRoll(this.hpLvl);
        character.secondaryStats.hpDay.raceBonus = this.bonusRoll(this.hpDay);
        character.secondaryStats.sdc.raceBonus = this.bonusRoll(this.sdc);
        character.secondaryStats.sdcLvl.raceBonus = this.bonusRoll(this.sdcLvl);
        character.secondaryStats.sdcDay.raceBonus = this.bonusRoll(this.sdcDay);
        character.secondaryStats.mdc.raceBonus = this.bonusRoll(this.mdc);
        character.secondaryStats.mdcLvl.raceBonus = this.bonusRoll(this.mdcLvl);
        character.secondaryStats.mdcDay.raceBonus = this.bonusRoll(this.mdcDay);
        character.secondaryStats.ppe.raceBonus = this.bonusRoll(this.ppe);
        character.secondaryStats.ppeLvl.raceBonus = this.bonusRoll(this.ppeLvl);
        character.secondaryStats.ppeDay.raceBonus = this.bonusRoll(this.ppeDay);
        character.secondaryStats.isp.raceBonus = this.bonusRoll(this.isp);
        character.secondaryStats.ispLvl.raceBonus = this.bonusRoll(this.ispLvl);
        character.secondaryStats.ispDay.raceBonus = this.bonusRoll(this.ispDay);
        character.secondaryStats.horror.raceBonus = this.bonusRoll(this.horror);
        // BONUSES
        character.bonuses.perception.raceBonus = this.bonusRoll(this.perceptionBonus);
        character.bonuses.initiative.raceBonus = this.bonusRoll(this.initiativeBonus);
        character.bonuses.strike.raceBonus = this.bonusRoll(this.strikeBonus);
        character.bonuses.parry.raceBonus = this.bonusRoll(this.parryBonus);
        character.bonuses.dodge.raceBonus = this.bonusRoll(this.dodgeBonus);
        character.bonuses.roll.raceBonus = this.bonusRoll(this.rollBonus);
        character.bonuses.pull.raceBonus = this.bonusRoll(this.pullBonus);
        character.bonuses.attacks.raceBonus = this.bonusRoll(this.attacksBonus);
        character.bonuses.handDamage.raceBonus = this.bonusRoll(this.handDamageBonus);
        character.bonuses.disarm.raceBonus = this.bonusRoll(this.disarmBonus);
        character.bonuses.knockout.raceBonus = this.bonusRoll(this.knockoutBonus);
        character.bonuses.deathBlow.raceBonus = this.bonusRoll(this.deathBlowBonus);
        character.bonuses.bodyFlip.raceBonus = this.bonusRoll(this.bodyFlipBonus);
        character.bonuses.critical.raceBonus = this.bonusRoll(this.criticalBonus);
        character.bonuses.entangle.raceBonus = this.bonusRoll(this.entangleBonus);
        // SAVES
        character.saves.poison.raceBonus = this.bonusRoll(this.poisonBonus);
        character.saves.insanity.raceBonus = this.bonusRoll(this.insanityBonus);
        character.saves.spell.raceBonus = this.bonusRoll(this.spellBonus);
        character.saves.pain.raceBonus = this.bonusRoll(this.painBonus);
        character.saves.disease.raceBonus = this.bonusRoll(this.diseaseBonus);
        character.saves.drugs.raceBonus = this.bonusRoll(this.drugsBonus);
        character.saves.ritual.raceBonus = this.bonusRoll(this.ritualBonus);
        character.saves.possession.raceBonus = this.bonusRoll(this.possessionBonus);
        character.saves.psionic.raceBonus = this.bonusRoll(this.psionicBonus);
        character.saves.magic.raceBonus = this.bonusRoll(this.magicBonus);
        character.saves.toxin.raceBonus = this.bonusRoll(this.toxinBonus);
        character.saves.coma.raceBonus = this.bonusRoll(this.comaBonus);
        character.saves.death.raceBonus = this.bonusRoll(this.deathBonus);
        character.saves.horror.raceBonus = this.bonusRoll(this.horrorBonus);
        character.saves.illusion.raceBonus = this.bonusRoll(this.illusionBonus);
        character.saves.mindControl.raceBonus = this.bonusRoll(this.mindControlBonus);
        // CHANCES
        character.chances.trust.raceBonus = this.bonusRoll(this.trustBonus);
        character.chances.intimidate.raceBonus = this.bonusRoll(this.intimidateBonus);
        character.chances.charm.raceBonus = this.bonusRoll(this.charmBonus);
        character.chances.impress.raceBonus = this.bonusRoll(this.impressBonus);
        // CURRENCIES 
        character.currencies.credits.raceBonus = this.bonusRoll(this.credits);
        character.currencies.blackMarketItems.raceBonus = this.bonusRoll(this.blackMarketItems);
        character.currencies.gems.raceBonus = this.bonusRoll(this.gems);
        character.currencies.gold.raceBonus = this.bonusRoll(this.gold);
        character.currencies.tradableItems.raceBonus = this.bonusRoll(this.tradableItems);

    }

    randomPsionics(character) {
        if (character.psionics.randomPsionics) {
                let chance = random.die(100)
            if (chance < 11) {
                character.psionics.ability = 'Major'
                character.secondaryStats.isp.initialValue = character.attributes.me.total + random.dice(6,4).reduce((a, b) => a + b, 0);
                // 1d6 + 1
                character.secondaryStats.ispLvl.initialValue = random.die(6) + 1
                return 'Major'
            } else if (chance < 26) {
                character.psionics.ability = 'Minor'
                character.secondaryStats.isp.initialValue = character.attributes.me.total + random.dice(6,2).reduce((a, b) => a + b, 0);
                // 1d6 + 1
                character.secondaryStats.ispLvl.initialValue = random.die(6)
                return 'Minor'
            } else {
                character.psionics.ability = 'None'
                return 'None'
            }
        }
    }
}

module.exports = Race;