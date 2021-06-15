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

        this.healingPsionics = {};
        this.physicalPsionics = {};
        this.sensitivePsionics = {};
        this.superPsionics = {};
        this.mindBleederPsionics = {};
    }
}

module.exports = Psionics;