  class Psionics {
    constructor() {
        this.ability = 'None';
        this.known = {};
        this.selected = false;
        this.total = 0;
        this.healing = { max: 0, min: 0, known: [] };
        this.physical = { max: 0, min: 0, known: [] };
        this.sensitive = { max: 0, min: 0, known: [] };
        this.super = { max: 0, min: 0, known: [] };
        this.mindBleeder = { max: 0, min: 0, known: [] };
    }
}

module.exports = Psionics;