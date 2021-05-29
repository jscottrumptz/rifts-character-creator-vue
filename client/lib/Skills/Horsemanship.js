const HorsemanshipGeneral = require('./HorsemanshipGeneral');
const HorsemanshipCowboyHorsemanship = require('./HorsemanshipCowboyHorsemanship');
const HorsemanshipCossack = require('./HorsemanshipCossack');
const HorsemanshipCyberKnight = require('./HorsemanshipCyberKnight');
const HorsemanshipEquestrian = require('./HorsemanshipEquestrian');
const HorsemanshipExoticAnimalsHorsemanship = require('./HorsemanshipExoticAnimalsHorsemanship');

class Horsemanship {
    constructor(
        horsemanshipGeneral = new HorsemanshipGeneral,
        horsemanshipCowboyHorsemanship = new HorsemanshipCowboyHorsemanship,
        horsemanshipCossack = new HorsemanshipCossack,
        horsemanshipCyberKnight = new HorsemanshipCyberKnight,
        horsemanshipEquestrian = new HorsemanshipEquestrian,
        horsemanshipExoticAnimalsHorsemanship = new HorsemanshipExoticAnimalsHorsemanship

    ) {
        this.horsemanshipGeneral = horsemanshipGeneral;
        this.horsemanshipCowboyHorsemanship = horsemanshipCowboyHorsemanship;
        this.horsemanshipCossack = horsemanshipCossack;
        this.horsemanshipCyberKnight = horsemanshipCyberKnight;
        this.horsemanshipEquestrian = horsemanshipEquestrian;
        this.horsemanshipExoticAnimalsHorsemanship = horsemanshipExoticAnimalsHorsemanship;
    }
}

module.exports = Horsemanship;