const Barter = require('./Barter');
const CreativeWriting = require('./CreativeWriting');
const Cryptography = require('./Cryptography');
const ElectronicCountermeasures = require('./ElectronicCountermeasures');
const LanguageNativeTongue = require('./LanguageNativeTongue');
const LanguageOther = require('./LanguageOther');
const Laser = require('./Laser');
const LiteracyNativeTongue = require('./LiteracyNativeTongue');
const LiteracyOther = require('./LiteracyOther');
const OpticSystems = require('./OpticSystems');
const Performance = require('./Performance');
const PublicSpeaking = require('./PublicSpeaking');
const RadioBasic = require('./RadioBasic');
const SensoryEquipmentCommunication = require('./SensoryEquipmentCommunication');
const SignLanguage = require('./SignLanguage');
const SingCommunication = require('./SingCommunication');
const Surveillance = require('./Surveillance');
const TVOrVideo = require('./TVOrVideo');

class Communication {
    constructor(
        barter = new Barter,
        creativeWriting = new CreativeWriting,
        cryptography = new Cryptography,
        electronicCountermeasures = new ElectronicCountermeasures,
        languageNativeTongue = new LanguageNativeTongue,
        languageOther = new LanguageOther,
        laser = new Laser,
        literacyNativeTongue = new LiteracyNativeTongue,
        literacyOther = new LiteracyOther,
        opticSystems = new OpticSystems,
        performance = new Performance,
        publicSpeaking = new PublicSpeaking,
        radioBasic = new RadioBasic,
        sensoryEquipmentCommunication = new SensoryEquipmentCommunication,
        signLanguage = new SignLanguage,
        singCommunication = new SingCommunication,
        surveillance = new Surveillance,
        tVOrVideo = new TVOrVideo
    ) {
        this.barter = barter;
        this.creativeWriting = creativeWriting;
        this.cryptography = cryptography;
        this.electronicCountermeasures = electronicCountermeasures;
        this.languageNativeTongue = languageNativeTongue;
        this.languageOther = languageOther;
        this.laser = laser;
        this.literacyNativeTongue = literacyNativeTongue;
        this.literacyOther = literacyOther;
        this.opticSystems = opticSystems;
        this.performance = performance;
        this.publicSpeaking = publicSpeaking;
        this.radioBasic = radioBasic;
        this.sensoryEquipmentCommunication = sensoryEquipmentCommunication;
        this.signLanguage = signLanguage;
        this.singCommunication = singCommunication;
        this.surveillance = surveillance;
        this.tVOrVideo = tVOrVideo;
    }
}

module.exports = Communication;