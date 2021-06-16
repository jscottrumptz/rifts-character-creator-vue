const StatRoll = require('./StatRoll');
const SkillGroups = require('./SkillGroups');

const { Random } = require('random-js');
const random = new Random();

class OCC {
    constructor(
        // DESCRIPTIONS
        name = '',
        group = '',
        description = '',
        image = '',
        alignment = '',
        psionicsDesc = `As per Race.`,
        abilitiesDesc = `As per Race.`,
        magicDesc = `None, unless a Magic Race is chosen.`,
        cyberneticsDesc = `As per Race.`,
        equipmentDesc =  `None.`,
        raceDesc = '',
        occQuote = '',

        // REQUIREMENTS
        reqAlignment = [],
        reqRace = [],
        recommendedAttributes = '',
        reqIq = 0,
        reqMe = 0,
        reqMa = 0,
        reqPs = 0,
        reqPp = 0,
        reqPe = 0,
        reqPb = 0,
        reqSpd = 0,

        // SKILLS
        occSkills = new SkillGroups,
        occRelatedNumber = 0,
        occRelatedAtLevel = [],
        secondaryNumber = 0,
        secondaryAtLevel = [],
        languages = 0,
        literacies = 0,
        totalWP =0,
        // the character's default Hand to Hand skill (used during Related OCC skill selection)
        startingHandToHand = 'noHandToHandSkill',

        // ATTRIBUTES
        iqBonus = new StatRoll,
        meBonus = new StatRoll,
        maBonus = new StatRoll,
        psBonus = new StatRoll,
        ppBonus = new StatRoll,
        peBonus = new StatRoll,
        pbBonus = new StatRoll,
        spdBonus = new StatRoll,

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
        // DESCRIPTIONS
        this.name = name;
        this.group = group;
        this.description = description;
        this.image = image;
        this.alignment = alignment;
        this.psionicsDesc = psionicsDesc;
        this.abilitiesDesc = abilitiesDesc;
        this.magicDesc = magicDesc;
        this.cyberneticsDesc = cyberneticsDesc;
        this.equipmentDesc = equipmentDesc;
        this.raceDesc = raceDesc;
        this.occQuote = occQuote;

        // REQUIREMENTS
        this.reqAlignment = reqAlignment;
        this.reqRace = reqRace;
        this.recommendedAttributes = recommendedAttributes;
        this.reqIq = reqIq;
        this.reqMe = reqMe;
        this.reqMa = reqMa;
        this.reqPs = reqPs;
        this.reqPp = reqPp;
        this.reqPe = reqPe;
        this.reqPb = reqPb;
        this.reqSpd = reqSpd;

        // SKILLS
        this.occSkills = occSkills;
        this.occRelatedNumber = occRelatedNumber;
        this.secondaryNumber = secondaryNumber;
        this.occRelatedAtLevel = occRelatedAtLevel;
        this.secondaryAtLevel = secondaryAtLevel;
        this.languages = languages;
        this.literacies = literacies;
        this.totalWP = totalWP;
        this.startingHandToHand = startingHandToHand;

        // ATTRIBUTES
        this.iqBonus = iqBonus;
        this.meBonus = meBonus;
        this.maBonus = maBonus;
        this.psBonus = psBonus;
        this.ppBonus = ppBonus;
        this.peBonus = peBonus;
        this.pbBonus = pbBonus;
        this.spdBonus = spdBonus;

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

        let occBonus = (attributeRoll.reduce((a, b) => a + b, 0) * attribute.multiplier) + attribute.bonus;

        return occBonus
    }

    rollBonuses(character) {
        if (this.testRequirements(character)) {
            // ATTRIBUTES
            character.attributes.iq.occBonus = this.bonusRoll(this.iqBonus);
            character.attributes.me.occBonus = this.bonusRoll(this.meBonus);
            character.attributes.ma.occBonus = this.bonusRoll(this.maBonus);
            character.attributes.ps.occBonus = this.bonusRoll(this.psBonus);
            character.attributes.pp.occBonus = this.bonusRoll(this.ppBonus);
            character.attributes.pe.occBonus = this.bonusRoll(this.peBonus);
            character.attributes.pb.occBonus = this.bonusRoll(this.pbBonus);
            character.attributes.spd.occBonus = this.bonusRoll(this.spdBonus);
            // SECONDARY STATS
            character.secondaryStats.hp.occBonus = this.bonusRoll(this.hp);
            character.secondaryStats.hpLvl.occBonus = this.bonusRoll(this.hpLvl);
            character.secondaryStats.hpDay.occBonus = this.bonusRoll(this.hpDay);
            character.secondaryStats.sdc.occBonus = this.bonusRoll(this.sdc);
            character.secondaryStats.sdcLvl.occBonus = this.bonusRoll(this.sdcLvl);
            character.secondaryStats.sdcDay.occBonus = this.bonusRoll(this.sdcDay);
            character.secondaryStats.mdc.occBonus = this.bonusRoll(this.mdc);
            character.secondaryStats.mdcLvl.occBonus = this.bonusRoll(this.mdcLvl);
            character.secondaryStats.mdcDay.occBonus = this.bonusRoll(this.mdcDay);
            character.secondaryStats.ppe.occBonus = this.bonusRoll(this.ppe);
            character.secondaryStats.ppeLvl.occBonus = this.bonusRoll(this.ppeLvl);
            character.secondaryStats.ppeDay.occBonus = this.bonusRoll(this.ppeDay);
            character.secondaryStats.isp.occBonus = this.bonusRoll(this.isp);
            character.secondaryStats.ispLvl.occBonus = this.bonusRoll(this.ispLvl);
            character.secondaryStats.ispDay.occBonus = this.bonusRoll(this.ispDay);
            character.secondaryStats.horror.occBonus = this.bonusRoll(this.horror);
            // BONUSES
            character.bonuses.perception.occBonus = this.bonusRoll(this.perceptionBonus);
            character.bonuses.initiative.occBonus = this.bonusRoll(this.initiativeBonus);
            character.bonuses.strike.occBonus = this.bonusRoll(this.strikeBonus);
            character.bonuses.parry.occBonus = this.bonusRoll(this.parryBonus);
            character.bonuses.dodge.occBonus = this.bonusRoll(this.dodgeBonus);
            character.bonuses.roll.occBonus = this.bonusRoll(this.rollBonus);
            character.bonuses.pull.occBonus = this.bonusRoll(this.pullBonus);
            character.bonuses.attacks.occBonus = this.bonusRoll(this.attacksBonus);
            character.bonuses.handDamage.occBonus = this.bonusRoll(this.handDamageBonus);
            character.bonuses.disarm.occBonus = this.bonusRoll(this.disarmBonus);
            character.bonuses.knockout.occBonus = this.bonusRoll(this.knockoutBonus);
            character.bonuses.deathBlow.occBonus = this.bonusRoll(this.deathBlowBonus);
            character.bonuses.bodyFlip.occBonus = this.bonusRoll(this.bodyFlipBonus);
            character.bonuses.critical.occBonus = this.bonusRoll(this.criticalBonus);
            character.bonuses.entangle.occBonus = this.bonusRoll(this.entangleBonus);
            // SAVES
            character.saves.poison.occBonus = this.bonusRoll(this.poisonBonus);
            character.saves.insanity.occBonus = this.bonusRoll(this.insanityBonus);
            character.saves.spell.occBonus = this.bonusRoll(this.spellBonus);
            character.saves.pain.occBonus = this.bonusRoll(this.painBonus);
            character.saves.disease.occBonus = this.bonusRoll(this.diseaseBonus);
            character.saves.drugs.occBonus = this.bonusRoll(this.drugsBonus);
            character.saves.ritual.occBonus = this.bonusRoll(this.ritualBonus);
            character.saves.possession.occBonus = this.bonusRoll(this.possessionBonus);
            character.saves.psionic.occBonus = this.bonusRoll(this.psionicBonus);
            character.saves.magic.occBonus = this.bonusRoll(this.magicBonus);
            character.saves.toxin.occBonus = this.bonusRoll(this.toxinBonus);
            character.saves.coma.occBonus = this.bonusRoll(this.comaBonus);
            character.saves.death.occBonus = this.bonusRoll(this.deathBonus);
            character.saves.horror.occBonus = this.bonusRoll(this.horrorBonus);
            character.saves.illusion.occBonus = this.bonusRoll(this.illusionBonus);
            character.saves.mindControl.occBonus = this.bonusRoll(this.mindControlBonus);
            character.saves.fatigue.occBonus = this.bonusRoll(this.fatigueBonus);
            // CHANCES
            character.chances.trust.occBonus = this.bonusRoll(this.trustBonus);
            character.chances.intimidate.occBonus = this.bonusRoll(this.intimidateBonus);
            character.chances.charm.occBonus = this.bonusRoll(this.charmBonus);
            character.chances.impress.occBonus = this.bonusRoll(this.impressBonus);
            // CURRENCIES 
            character.currencies.credits.occBonus = this.bonusRoll(this.credits);
            character.currencies.blackMarketItems.occBonus = this.bonusRoll(this.blackMarketItems);
            character.currencies.gems.occBonus = this.bonusRoll(this.gems);
            character.currencies.gold.occBonus = this.bonusRoll(this.gold);
            character.currencies.tradableItems.occBonus = this.bonusRoll(this.tradableItems);
        }
    }

    testRequirements(character) {
        if (this.reqIq > character.attributes.iq.total) {
            return false
        } else if (this.reqMe > character.attributes.me.total) {
            return false
        } else if (this.reqMa > character.attributes.ma.total) {
            return false
        } else if (this.reqPs > character.attributes.ps.total) {
            return false
        } else if (this.reqPp > character.attributes.pp.total) {
            return false
        } else if (this.reqPe > character.attributes.pe.total) {
            return false
        } else if (this.reqPb > character.attributes.pb.total) {
            return false
        } else if (this.reqSpd > character.attributes.spd.total) {
            return false
        } else {
            return true
        }
    }

    requirementsMessage(character) {
        if (this.reqIq > character.attributes.iq.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqIq} IQ needed.`
        } else if (this.reqMe > character.attributes.me.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqMe} ME needed.`
        } else if (this.reqMa > character.attributes.ma.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqMa} MA needed.`
        } else if (this.reqPs > character.attributes.ps.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqPs} PS needed.`
        } else if (this.reqPp > character.attributes.pp.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqPp} PP needed.`
        } else if (this.reqPe > character.attributes.pe.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqPe} PE needed.`
        } else if (this.reqPb > character.attributes.pb.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqPb} PB needed.`
        } else if (this.reqSpd > character.attributes.spd.total) {
            return `This character does not qualify to be a ${this.name}. There is a minimum of ${this.reqSpd} Spd needed.`
        } else {
            return `This character would make a great ${this.name}.`
        }
    }

    rollSecondary(character) {
        console.log(character.occ.name)
    }

    getSecondary(character) {
        console.log(character.occ.name)
    }
}

module.exports = OCC;