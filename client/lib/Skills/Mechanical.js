const AircraftMechanics = require('./AircraftMechanics');
const AutomotiveMechanics = require('./AutomotiveMechanics');
const BasicMechanics = require('./BasicMechanics');
const BiowareMechanics = require('./BiowareMechanics');
const Locksmith = require('./Locksmith');
const MechanicalEngineer = require('./MechanicalEngineer');
const RobotMechanics = require('./RobotMechanics');
const VehicleArmourer = require('./VehicleArmourer');
const WeaponsEngineer = require('./WeaponsEngineer');

class Mechanical {
    constructor(
        aircraftMechanics = new AircraftMechanics,
        automotiveMechanics = new AutomotiveMechanics,
        basicMechanics = new BasicMechanics,
        biowareMechanics = new BiowareMechanics,
        locksmith = new Locksmith,
        mechanicalEngineer = new MechanicalEngineer,
        robotMechanics = new RobotMechanics,
        vehicleArmourer = new VehicleArmourer,
        weaponsEngineer = new WeaponsEngineer
    ) {
        this.aircraftMechanics = aircraftMechanics;
        this.automotiveMechanics = automotiveMechanics;
        this.basicMechanics = basicMechanics;
        this.biowareMechanics = biowareMechanics;
        this.locksmith = locksmith;
        this.mechanicalEngineer = mechanicalEngineer;
        this.robotMechanics = robotMechanics;
        this.vehicleArmourer = vehicleArmourer;
        this.weaponsEngineer = weaponsEngineer;
    }
}

module.exports = Mechanical;