const Airplane = require('./Airplane');
const Automobile = require('./Automobile');
const Bicycling = require('./Bicycling');
const BoatsMotorandHydrofoils = require('./BoatsMotorandHydrofoils');
const BoatsPaddleTypes = require('./BoatsPaddleTypes');
const BoatsSailTypes = require('./BoatsSailTypes');
const BoatsShips = require('./BoatsShips');
const CombatDriving = require('./CombatDriving');
const FlightSystemCombat = require('./FlightSystemCombat');
const Helicopter = require('./Helicopter');
const HoverCraftGround = require('./HoverCraftGround');
const HovercyclesOrSkycyclesOrRocketBikes = require('./HovercyclesOrSkycyclesOrRocketBikes');
const JetAircraft = require('./JetAircraft');
const JetPacks = require('./JetPacks');
const JumpBikeCombat = require('./JumpBikeCombat');
const MilitaryCombatHelicopter = require('./MilitaryCombatHelicopter');
const MilitaryJetFighter = require('./MilitaryJetFighter');
const MilitarySubmersibles = require('./MilitarySubmersibles');
const MilitaryTanksandApcs = require('./MilitaryTanksandApcs');
const MilitaryWarshipsandPatrolBoats = require('./MilitaryWarshipsandPatrolBoats');
const MotorcyclesandSnowmobiles = require('./MotorcyclesandSnowmobiles');
const RobotsandPowerArmour = require('./RobotsandPowerArmour');
const RobotCombatBasic = require('./RobotCombatBasic');
const RobotCombatElite = require('./RobotCombatElite');
const TrackedandConstructionVehicles = require('./TrackedandConstructionVehicles');
const Truck = require('./Truck');
const WaterScooters = require('./WaterScooters');
const WaterSkiingandSurfing = require('./WaterSkiingandSurfing');

class Pilot {
    constructor(
        airplane = new Airplane,
        automobile = new Automobile,
        bicycling = new Bicycling,
        boatsMotorandHydrofoils = new BoatsMotorandHydrofoils,
        boatsPaddleTypes = new BoatsPaddleTypes,
        boatsSailTypes = new BoatsSailTypes,
        boatsShips = new BoatsShips,
        combatDriving = new CombatDriving,
        flightSystemCombat = new FlightSystemCombat,
        helicopter = new Helicopter,
        hoverCraftGround = new HoverCraftGround,
        hovercyclesOrSkycyclesOrRocketBikes = new HovercyclesOrSkycyclesOrRocketBikes,
        jetAircraft = new JetAircraft,
        jetPacks = new JetPacks,
        jumpBikeCombat = new JumpBikeCombat,
        militaryCombatHelicopter = new MilitaryCombatHelicopter,
        militaryJetFighter = new MilitaryJetFighter,
        militarySubmersibles = new MilitarySubmersibles,
        militaryTanksandApcs = new MilitaryTanksandApcs,
        militaryWarshipsandPatrolBoats = new MilitaryWarshipsandPatrolBoats,
        motorcyclesandSnowmobiles = new MotorcyclesandSnowmobiles,
        robotsandPowerArmour = new RobotsandPowerArmour,
        robotCombatBasic = new RobotCombatBasic,
        robotCombatElite = new RobotCombatElite,
        trackedandConstructionVehicles = new TrackedandConstructionVehicles,
        truck = new Truck,
        waterScooters = new WaterScooters,
        waterSkiingandSurfing = new WaterSkiingandSurfing
    ) {
        this.airplane = airplane;
        this.automobile = automobile;
        this.bicycling = bicycling;
        this.boatsMotorandHydrofoils = boatsMotorandHydrofoils;
        this.boatsPaddleTypes = boatsPaddleTypes;
        this.boatsSailTypes = boatsSailTypes;
        this.boatsShips = boatsShips;
        this.combatDriving = combatDriving;
        this.flightSystemCombat = flightSystemCombat;
        this.helicopter = helicopter;
        this.hoverCraftGround = hoverCraftGround;
        this.hovercyclesOrSkycyclesOrRocketBikes = hovercyclesOrSkycyclesOrRocketBikes;
        this.jetAircraft = jetAircraft;
        this.jetPacks = jetPacks;
        this.jumpBikeCombat = jumpBikeCombat;
        this.militaryCombatHelicopter = militaryCombatHelicopter;
        this.militaryJetFighter = militaryJetFighter;
        this.militarySubmersibles = militarySubmersibles;
        this.militaryTanksandApcs = militaryTanksandApcs;
        this.militaryWarshipsandPatrolBoats = militaryWarshipsandPatrolBoats;
        this.motorcyclesandSnowmobiles = motorcyclesandSnowmobiles;
        this.robotsandPowerArmour = robotsandPowerArmour;
        this.robotCombatBasic = robotCombatBasic;
        this.robotCombatElite = robotCombatElite;
        this.trackedandConstructionVehicles = trackedandConstructionVehicles;
        this.truck = truck;
        this.waterScooters = waterScooters;
        this.waterSkiingandSurfing = waterSkiingandSurfing;
    }
}

module.exports = Pilot;