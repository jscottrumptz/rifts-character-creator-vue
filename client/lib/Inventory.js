class Inventory {
    constructor(
        weapons = [],
        vehicles = [],
        powerArmor = [],
        equipment = []
    ) {
        this.weapons = weapons;
        this.vehicles = vehicles;
        this.powerArmor = powerArmor;
        this.equipment = equipment;
    }
}

module.exports = Inventory;