  class Psionics {
    constructor() {
        // where the character derives its ability (Major, Minor, Racial, or OCC)
        this.ability = 'None';
        // level of psionic power used to determine preqs and other stats (Minor, Major, or Master)
        this.type = 'None'
        // character's known psionics
        this.known = {};
        // has the character made its psionic selections yet
        this.selected = false;
        // total psionic selections
        this.total = 0;

        this.healingPsionics = { max: 0, min: 0 };
        this.physicalPsionics = { max: 0, min: 0 };
        this.sensitivePsionics = { max: 0, min: 0 };
        this.superPsionics = { max: 0, min: 0 };
        this.mindBleederPsionics = { max: 0, min: 0 };
    }
}

module.exports = Psionics;