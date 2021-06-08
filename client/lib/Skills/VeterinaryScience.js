const Skill = require('../Skill');

class VeterinaryScience extends Skill {
    constructor() {
        super();
        this.name = `Veterinary Science`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = `A Medical Doctor can also treat an animal but is at a -35% penalty to do so.`;
        this.description = `The doctor who specializes in the medical care and treatment of wild and domestic animals. Areas of study are biology (specifically animal), reproduction, breeding, animal anatomy, physiology, pathology, toxicology, surgery, suturing wounds, setting bones, disease, medical care and other applications and techniques in the medical treatment of animals.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+10% to this skill if Zoology [Science] is also taken.`;
        this.required = `Biology [Science] and Animal Husbandry [Medical].`;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['biology', 'animalHusbandry']
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'zoology') {
                this.skillBonus = this.skillBonus + 10;
            }
        })
    }
}

module.exports = VeterinaryScience;