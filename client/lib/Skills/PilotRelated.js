const Navigation = require('./Navigation');
const SensoryEquipmentPilotRelated = require('./SensoryEquipmentPilotRelated');
const WeaponSystems = require('./WeaponSystems');

class PilotRelated {
    constructor(
        navigation = new Navigation,
        sensoryEquipmentPilotRelated = new SensoryEquipmentPilotRelated,
        weaponSystems = new WeaponSystems
    ) {
        this.navigation = navigation;
        this.sensoryEquipmentPilotRelated = sensoryEquipmentPilotRelated;
        this.weaponSystems = weaponSystems;
    }
}

module.exports = PilotRelated;