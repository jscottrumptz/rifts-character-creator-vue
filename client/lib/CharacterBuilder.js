const Character = require('./Character')
const Human = require('./Races/Human')
const Dragon = require('./Races/Dragon')
const RogueScientist = require('./OCCs/RogueScientist');
const Dnorr = require('./Races/Dnorr');
const Dramin = require('./Races/Dramin');


class CharacterBuilder {
    constructor (character = new Character) {
        this.character = character;
    }

    initializeCharacterBuilder() {
        // set character race
        this.character.race = new Human;
        // roll stats based on race
        // this.rollAttributes();
        this.character.attributes.rollAttributes(this.character.race);
        this.character.race.rollBonuses(this.character);
        this.character.race.rollSecondary(this.character);
        this.character.race.randomPsionics(this.character);
        
        // set character occ
        this.character.occ = new RogueScientist;
        // add a bonus
        // this.character.attributes.iq.occBonus = this.character.occ.rollBonus(this.character.occ.iqBonus);
        this.character.occ.rollBonuses(this.character);
        this.character.occ.rollSecondary(this.character);
        this.character.info.level = 1;
        this.character.info.name = 'Siembieda';
        this.character.info.sex = 'Male';
        this.character.info.weight = '180 lbs';
        this.character.info.heightFt = 6;
        this.character.info.heightIn = 1;
        this.character.info.insanity = ['Death Wish', 'Paranoid'];
        this.character.info.age = 28;
        this.character.info.alignment = "Unprincipled";
        this.character.info.bio = `Mercenary soldier who is an expert at power armor and operated the Norther Gun version of the Troll armor.
        His company was folded after Northern Gun pulled their support.`
        this.character.info.randomAge();
        this.character.info.randomHeightDescr();
        this.character.info.randomWeightDescr();
        this.character.info.randomBirthOrder();
        this.character.info.randomDisposition();
        this.character.info.randomEnvironment();
        this.character.info.randomFamilyOrigin();
        this.character.info.randomCoalition();
        this.character.info.randomNonHumans();
        this.character.info.randomInitialReason();
        this.character.info.physicalDescription = `Siembieda is a tall, slender man with white hair. He is "singularly handsome" with a "bizarre quality" about his face. Siembieda has dark eyes with thick eyebrows, high cheekbones, a sharpcut nose, and a black mustache.`
        this.saveCharacter(JSON.stringify(this.character, null, 2));
        console.log('Save vs Disease +' + this.character.saves.disease.total + ' / Save vs Insanity +' + this.character.saves.insanity.total + ' / Perception +' + this.character.bonuses.perception.total);
        console.log('SDC: ' + this.character.secondaryStats.sdc.total + ` / IQ: ${this.character.attributes.iq.total}`);
        // check for feeble stats
        console.log(this.character.attributes.feebleTest());

        // TEST AN ATTRIBUTE VALUE
        // this.character.attributes.iq.raceTotal = 31

        this.character.attributes.attributeBonusTest(this.character);
        console.table(this.character.skills.science);
        console.table(this.character.skills.science.mathmaticsAdvanced);
        console.table(this.character.secondaryStats);
        console.table(this.character.chances);
        console.table(this.character.bonuses);
        console.table(this.character.saves);
        console.table(this.character.attributes);
        console.log('');
        console.log('Age: ' + this.character.info.age);
        console.log('');
        console.log('Height: ' + this.character.info.heightDescr);
        console.log('');
        console.log('Weight: ' + this.character.info.weightDescr);
        console.log('');
        console.log('Birth Order: ' + this.character.info.birthOrder);
        console.log('');
        console.log('Disposition: ' + this.character.info.disposition);
        console.log('');
        console.log('Enviornment Growing Up: ' + this.character.info.environment);
        console.log('');
        console.log('Family Origin: ' + this.character.info.familyOrigin);
        console.log('');
        console.log('Sentiments toward the Coalition: ' + this.character.info.coalition);
        console.log('');
        console.log('Sentiments toward Non-Humans: ' + this.character.info.nonHumans);
        console.log('');
        console.log('Initial Reason for Adventure: ' + this.character.info.initialReason);
        console.log('');
        console.log(`This character receives a ${this.character.skills.bonus.total}% bonus to all skills due to it's IQ of ${this.character.attributes.iq.total}`);
        console.log(`This character's speed is ${this.character.attributes.speedConversion()}`);
        console.log(`It's distance covered per minute is ${this.character.attributes.ypm} yards/meters`);
        console.log(`It's distance covered per melee round is ${this.character.attributes.ypmr} yards/meters`);
        // let character increase stats based on feeble stats
        console.log(this.character.psionics.ability)
        console.log(this.character.occ.testRequirements(this.character));
        console.log(`credits: ${this.character.currencies.credits.total} / black market items: ${this.character.currencies.blackMarketItems.total}`)

        // console.table(this.character.abilities)
        //// take the array display it as a string
        //console.log(...this.character.attributes.iq.attributeRoll)
        //// get the lowest roll
        //console.log(Math.min(...this.character.attributes.iq.attributeRoll))

        console.log(~~((31-31)/3) + 1)
    }

    saveCharacter(character) {
        console.log(
            `{
"characterData": ${character},
    "username": "Scott"
}`


        )
    }

    loadCharacter(character) {
            
    }

    deleteCharacter(character) {

    }
}

module.exports = CharacterBuilder