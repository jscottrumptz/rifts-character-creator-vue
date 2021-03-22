const HealingPsionics = require('./HealingPsionics');
const PhysicalPsionics = require('./PhysicalPsionics');
const SensitivePsionics = require('./SensitivePsionics');
const SuperPsionics = require('./SuperPsionics');

class PickPsionics {
    constructor(
        healingPsionics = new HealingPsionics,
        physicalPsionics = new PhysicalPsionics,
        sensitivePsionics = new SensitivePsionics,
        superPsionics = new SuperPsionics,
    ) {
        this.healingPsionics = healingPsionics;
        this.physicalPsionics = physicalPsionics;
        this.sensitivePsionics = sensitivePsionics;
        this.superPsionics = superPsionics;
    }

    getHealingPsionics() {
        return this.healingPsionics;
    }

    getPhysicalPsionics() {
        return this.physicalPsionics;
    }

    getSensitivePsionics() {
        return this.sensitivePsionics;
    }

    getSuperPsionics() {
        return this.SuperPsionics;
    }

    setPsionicTotal(character) {
        if (character.psionics.ability = 'Major') {
            character.psionics.total = 8;
        }
    
        if (character.psionics.ability = 'Minor') {
            character.psionics.total = 2;
        }
    }



    addSelection(pickList, selection) {
        pickList.push(selection)
        this.init()
    }

    removeSelection(pickList, selection) {
        pickList.splice(selection.index,1)
        this.init()
    }

    // count how many psionics have been pick from a particular group
    groupCount(pickList, group) {
        let count = 0;
        pickList.forEach(selection => {
            if (selection.group === group) {
                count++
            }
        });
        return count;
    }

    // tied to the selectPsionicsButton to finalize selections
    finishPicking(character,pickList) {
        // add the pickList array items into the character known psionics array
        pickList.forEach(selection => {
            character.psionics.known.push(selection)
        });
    }
}

module.exports = PickPsionics;