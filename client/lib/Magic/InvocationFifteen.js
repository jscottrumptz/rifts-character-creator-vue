const CircleOfTravel = require('./CircleOfTravel');
const DimensionalPortal = require('./DimensionalPortal');
const DimensionalTeleport = require('./DimensionalTeleport');
const EnchantWeapon = require('./EnchantWeapon');
const LeyLineRestoration = require('./LeyLineRestoration');
const LeyLineShutdown = require('./LeyLineShutdown');
const SummonAlly = require('./SummonAlly');
const TeleportSuperior = require('./TeleportSuperior');
const Transformation = require('./Transformation');

class InvocationFifteen{
    constructor(
        circleOfTravel = new CircleOfTravel,
        dimensionalPortal = new DimensionalPortal,
        dimensionalTeleport = new DimensionalTeleport,
        enchantWeapon = new EnchantWeapon,
        leyLineRestoration = new LeyLineRestoration,
        leyLineShutdown = new LeyLineShutdown,
        summonAlly = new SummonAlly,
        teleportSuperior = new TeleportSuperior,
        transformation = new Transformation
    ) {
        this.circleOfTravel = circleOfTravel;
        this.dimensionalPortal = dimensionalPortal;
        this.dimensionalTeleport = dimensionalTeleport;
        this.enchantWeapon = enchantWeapon;
        this.leyLineRestoration = leyLineRestoration;
        this.leyLineShutdown = leyLineShutdown;
        this.summonAlly = summonAlly;
        this.teleportSuperior = teleportSuperior;
        this.transformation = transformation;
    }
}

module.exports = InvocationFifteen;