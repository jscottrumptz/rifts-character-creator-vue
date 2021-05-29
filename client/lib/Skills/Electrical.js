const BasicElectronics = require('./BasicElectronics');
const ComputerRepair = require('./ComputerRepair');
const ElectricalEngineer = require('./ElectricalEngineer');
const ElectricityGeneration = require('./ElectricityGeneration');
const RobotElectronics = require('./RobotElectronics');

class Electrical {
    constructor(
        basicElectronics = new BasicElectronics,
        computerRepair = new ComputerRepair,
        electricalEngineer = new ElectricalEngineer,
        electricityGeneration = new ElectricityGeneration,
        robotElectronics = new RobotElectronics

    ) {
        this.basicElectronics = basicElectronics;
        this.computerRepair = computerRepair;
        this.electricalEngineer = electricalEngineer;
        this.electricityGeneration = electricityGeneration;
        this.robotElectronics = robotElectronics;
    }
}

module.exports = Electrical;