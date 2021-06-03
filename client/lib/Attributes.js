const Attribute = require('./Attribute')

const { Random } = require('random-js');
const random = new Random();

class Attributes {
    constructor(iq = new Attribute, me = new Attribute, ma = new Attribute, ps = new Attribute, pp = new Attribute, pe = new Attribute, pb = new Attribute, spd = new Attribute, strType = 'Standard', confirmAttributes = false) {
        this.iq = iq;
        this.me = me;
        this.ma = ma;
        this.ps = ps;
        this.pp = pp;
        this.pe = pe;
        this.pb = pb;
        this.spd = spd;
        this.strType = strType;
        this.confirmAttributes = confirmAttributes;
    }
    
    // return the iq object
    getIq() {
        return this.iq;
    }

    // return the me object
    getMe() {
        return this.me;
    }

    // return the ma object
    getMa() {
        return this.ma;
    }

    // return the ps object
    getPs() {
        return this.ps;
    }

    // return the pp object
    getPp() {
        return this.pp;
    }

    // return the pe object
    getPe() {
        return this.pe;
    }

    // return the pd object
    getPb() {
        return this.pb;
    }

    // return the spd object
    getSpd() {
        return this.spd;
    }

    // return the strType object
    getStrType() {
        return this.strType;
    }

    getConfirmAttributes() {
        return this.confirmAttributes;
    }

    // roll one of the 8 attributes for the character based on it's race
    rollAttribute(race, sides, amount, multiplier, bonus) {
        if (!bonus) {
            bonus = 0;
        }

        if (!sides || !amount) {
            sides = 0;
            amount = 0;
        }

        if (!multiplier) {
            multiplier = 1;
        }

        let attributeRoll = random.dice(sides, amount);
        let bonusOne = 0;
        let feeble = false;

        if (race === 'Human' && attributeRoll.reduce((a, b) => a + b, 0) > 15) {
            bonusOne = random.die(6);
            attributeRoll.push(bonusOne)
        }

        if (bonusOne === 6) {
            attributeRoll.push(random.die(6));
        }

        if (((attributeRoll.reduce((a, b) => a + b, 0) * multiplier) + bonus) < 7) {

            feeble = true;
        }

        return new Attribute(attributeRoll, multiplier, bonus, feeble);
    }

    // roll all of the character's starting 8 attributes based on it's race
    rollAttributes(race) {
        this.iq = this.rollAttribute(race.name, race.iqRoll.sides, race.iqRoll.amount, race.iqRoll.multiplier, race.iqRoll.bonus);
        this.iq.name = 'IQ';
        this.me = this.rollAttribute(race.name, race.meRoll.sides, race.meRoll.amount, race.meRoll.multiplier, race.meRoll.bonus);
        this.me.name = 'ME';
        this.ma = this.rollAttribute(race.name, race.maRoll.sides, race.maRoll.amount, race.maRoll.multiplier, race.maRoll.bonus);
        this.ma.name = 'MA';
        this.ps = this.rollAttribute(race.name, race.psRoll.sides, race.psRoll.amount, race.psRoll.multiplier, race.psRoll.bonus);
        this.ps.name = 'PS';
        this.pp = this.rollAttribute(race.name, race.ppRoll.sides, race.ppRoll.amount, race.ppRoll.multiplier, race.ppRoll.bonus);
        this.pp.name = 'PP';
        this.pe = this.rollAttribute(race.name, race.peRoll.sides, race.peRoll.amount, race.peRoll.multiplier, race.peRoll.bonus);
        this.pe.name = 'PE';
        this.pb = this.rollAttribute(race.name, race.pbRoll.sides, race.pbRoll.amount, race.pbRoll.multiplier, race.pbRoll.bonus);
        this.pb.name = 'PB';
        this.spd = this.rollAttribute(race.name, race.spdRoll.sides, race.spdRoll.amount, race.spdRoll.multiplier, race.spdRoll.bonus);
        this.spd.name = 'Spd';
    }

    // test each of the current attribute totals to see if they are feeble
    feebleTest() {
        let feebleCount = 0;
        let feebleArr = [];
        for (const attribute in this) {
            if (this[attribute].total < 7) {
                feebleCount++
                feebleArr.push(attribute);
            }
        }
        return { feebleCount, feebleArr };
    }

    // test current attribute totals to see if the qualify for attribute bonuses
    attributeBonusTest(character) {

        character.secondaryStats.hp.raceBonus = this.pe.total;
        for (const attribute in this) {
            if (this[attribute].total > 15) {
                switch (attribute) {
                    // IQ bonuses
                    case 'iq':
                        var iq = this[attribute].total;
                        var iqOver = 0;
                        if (iq > 30) {
                            iqOver = ~~((iq-30)/5) * 2
                            character.bonuses.perception.attributeBonus = ~~((iq-30)/10)
                            character.saves.illusion.attributeBonus = ~~((iq-31)/3) + 1
                            if (iq > 48) {
                                character.saves.illusion.attributeBonus = 7
                            }
                            iq = 30;
                        }
                        character.skills.bonus.attributeBonus = iq - 14 + iqOver;
                        break;
                    // ME bonuses
                    case 'me':
                        var me = this[attribute].total;
                        if (me > 30) {
                            me = 30;
                        }
                        character.saves.psionic.attributeBonus = Math.floor((me - 16) / 2) + 1;
                        if (me < 20) {
                            character.saves.insanity.attributeBonus = Math.floor((me - 16) / 2) + 1;
                        } else {
                            character.saves.insanity.attributeBonus = me - 17;
                        }
                        break;
                    // MA bonuses
                    case 'ma':
                        var ma = this[attribute].total;
                        if (ma > 30) {
                            ma = 30;
                        }
                        var maBonus = 35 + ((ma - 15) * 5);
                        if (ma > 24 && ma < 28) {
                            maBonus = 80 + ((ma - 24) * 4);
                        }
                        if (ma > 27 && ma < 30) {
                            maBonus = 92 + ((ma - 27) * 2);
                        }
                        if (ma === 30) {
                            maBonus = 97;
                        }
                        character.chances.trust.attributeBonus = maBonus;
                        character.chances.intimidate.attributeBonus = maBonus;
                        break;
                    // PS bonuses
                    case 'ps':
                        var ps = this[attribute].total;
                        character.bonuses.handDamage.attributeBonus = ps - 15;
                        break;
                    // PP bonuses
                    case 'pp':
                        var pp = this[attribute].total;
                        if (pp > 30) {
                            character.bonuses.initiative.attributeBonus = ~~((pp-31)/3) + 1
                            if (pp > 45) {
                                character.bonuses.initiative.attributeBonus = 6
                            }
                            pp = 30;
                        }
                        character.bonuses.dodge.attributeBonus = Math.floor((pp - 16) / 2) + 1;
                        character.bonuses.parry.attributeBonus = Math.floor((pp - 16) / 2) + 1;
                        character.bonuses.strike.attributeBonus = Math.floor((pp - 16) / 2) + 1;
                        break;
                    // PE bonuses
                    case 'pe':
                        var pe = this[attribute].total;
                        if (pe > 30) {
                            pe = 30;
                        }
                        var peBonus = 3 + (pe - 15);
                        if (pe > 17) {
                            peBonus = 4 + ((pe - 17) * 2);
                        }
                        character.saves.coma.attributeBonus = peBonus;
                        character.saves.death.attributeBonus = peBonus;
                        character.saves.magic.attributeBonus = Math.floor((pe - 16) / 2) + 1;
                        character.saves.poison.attributeBonus = Math.floor((pe - 16) / 2) + 1;
                        break;
                    // PB bonuses
                    case 'pb':
                        var pb = this[attribute].total;
                        if (pb > 30) {
                            pb = 30;
                        }
                        var pbBonus = 25 + ((pb - 15) * 5);
                        if (pb > 26 && pb < 29) {
                            pbBonus = 80 + ((pb - 26) * 3);
                        }
                        if (pb > 28) {
                            pbBonus = 88 + ((pb - 28) * 2);
                        }
                        character.chances.charm.attributeBonus = pbBonus;
                        character.chances.impress.attributeBonus = pbBonus;
                        break;
                }
            }
        }
    }

    // convert the current spd value to mph and km per hour values
    speedConversion() {
        let spd = this.spd.total
        if (spd < 11) {
            return '3.5mph (5.6km per hour)';
        }
        if (spd > 10 && spd < 22) {
            return '7.5mph (12km per hour)';
        }
        if (spd > 21 && spd < 27) {
            return '15mph (24km per hour)';
        }
        if (spd > 26 && spd < 33) {
            return '18.5mph (29.7km per hour)';
        }
        if (spd > 32 && spd < 44) {
            return '22.5mph (36km per hour)';
        }
        if (spd > 43 && spd < 50) {
            return '30mph (48km per hour)';
        }
        if (spd > 49 && spd < 55) {
            return '35mph (56km per hour)';
        }
        if (spd > 54 && spd < 58) {
            return '37.5mph (60km per hour)';
        }
        if (spd > 57 && spd < 66) {
            return '40mph (64km per hour)';
        }
        if (spd > 65 && spd < 77) {
            return '45mph (72km per hour)';
        }
        if (spd > 76 && spd < 88) {
            return '53mph (85km per hour)';
        }
        if (spd > 87 && spd < 110) {
            return '60mph (96km per hour)';
        }
        if (spd > 109 && spd < 132) {
            return '75mph (120km per hour)';
        }
        if (spd > 131 && spd < 220) {
            return '90mph (148km per hour)';
        }
        if (spd > 219 && spd < 293) {
            return '150mph (241km per hour)';
        }
        if (spd > 292) {
            return '200mph (321km per hour)';
        }
    }

    // return the yards per minute
    get ypm() { return this.spd.total * 20 }

    // return the yards per melee round
    get ypmr() { return this.spd.total * 5 }

    // not sure how I am going to handle the storage of carry/lift/throw etc... 
    // however, I worked out a method for calculating carry and throw
    strengthConversion() {
        let ps = this.ps.total
        let pe = this.pe.total

        // pounds
        this.carry = ps * 10
        this.lift = ps * 20
        // seconds
        this.duration = pe * 3

        if (ps > 16) {
            this.carry = ps * 20
            this.lift = ps* 40
        }

        if (this.strType === 'Robot' && ps > 17) {
            this.carry = ps * 25
            this.lift = ps * 50
        }

        if (this.strType === 'Giant Robot') {
            this.carry = ps * 100
            this.lift = ps * 200
        }

        if (this.strType === 'Supernatural' && ps < 18) {
            this.carry = ps * 20
            this.lift = ps* 40
            this.duration = pe * 60
        }

        if (this.strType === 'Supernatural' && ps > 17) {
        
            this.carry = ps * 50
            this.lift = ps * 100

            if(ps >= 35) {
                // +30% bonus for every 5 points above 30
                this.carry = this.carry * ~~((90-30)/5) * 3/10
                this.lift = this.lift * ~~((90-30)/5) * 3/10
            }
        }
    }
}

module.exports = Attributes;