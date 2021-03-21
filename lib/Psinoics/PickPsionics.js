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

    init(character,pickList) {
        let psionicPicked = pickList.length;
        let psionicStart = character.psionics.total;
        let psionicHealing = this.groupCount(pickList,'Healing')
        let psionicPhysical = this.groupCount(pickList,'Physical')
        let psionicSensitive = this.groupCount(pickList,'Sensitive')

        // determine how many picks are left
        let availablePicks = psionicStart - psionicPicked

        // see if the character is spreding it's picks over multiple groups, if so deduct 2 picks from the available total
        if ((psionicHealing > 0 && psionicPhysical > 0) || (psionicHealing > 0 && psionicSensitive > 0) || (psionicSensitive > 0 && psionicPhysical > 0)) {
            availablePicks = availablePicks - 2;
        }

        // deterimine what tabs are available
        if ((psionicHealing > 0 && psionicStart === 2) || (psionicHealing > 5 && psionicStart === 8)) {
            physicalTab.setActive(false);
            sensitiveTab.setActive(false);
        }
        if ((psionicPhysical > 0 && psionicStart === 2) || (psionicPhysical > 5 && psionicStart === 8)) {
            healingTab.setActive(false);
            sensitiveTab.setActive(false);
        }
        if ((psionicSensitive > 0 && psionicStart === 2) || (psionicSensitive > 5 && psionicStart === 8)) {
            physicalTab.setActive(false);
            healingTab.setActive(false);
        }

        // either show the finished button or the tabs
        if (availablePicks === 0) {
            selectPsionicsButton.setActive(true);
            tabs.setActive(false);
        } else {
            selectPsionicsButton.setActive(false);
            tabs.setActive(true);
        }

        // update remaing psionics counter
        psionicsRemainingText.text = "Psionics Remaining: " + availablePicks;
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