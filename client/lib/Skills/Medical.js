const AnimalHusbandry = require('./AnimalHusbandry');
const BrewingMedicinal = require('./BrewingMedicinal');
const CrimeSceneInvestigation = require('./CrimeSceneInvestigation');
const CyberneticMedicine = require('./CyberneticMedicine');
const EntomologicalMedicine = require('./EntomologicalMedicine');
const FieldSurgery = require('./FieldSurgery');
const FirstAid = require('./FirstAid');
const Forensics = require('./Forensics');
const HollisticMedicine = require('./HollisticMedicine');
const MedicalDoctor = require('./MedicalDoctor');
const Paramedic = require('./Paramedic');
const Pathology = require('./Pathology');
const Psychology = require('./Psychology');
const VeterinaryScience = require('./VeterinaryScience');

class Medical {
    constructor(
        animalHusbandry = new AnimalHusbandry,
        brewingMedicinal = new BrewingMedicinal,
        crimeSceneInvestigation = new CrimeSceneInvestigation,
        cyberneticMedicine = new CyberneticMedicine,
        entomologicalMedicine = new EntomologicalMedicine,
        fieldSurgery = new FieldSurgery,
        firstAid = new FirstAid,
        forensics = new Forensics,
        hollisticMedicine = new HollisticMedicine,
        medicalDoctor = new MedicalDoctor,
        paramedic = new Paramedic,
        pathology = new Pathology,
        psychology = new Psychology,
        veterinaryScience = new VeterinaryScience
    ) {
        this.animalHusbandry = animalHusbandry;
        this.brewingMedicinal = brewingMedicinal;
        this.crimeSceneInvestigation = crimeSceneInvestigation;
        this.cyberneticMedicine = cyberneticMedicine;
        this.entomologicalMedicine = entomologicalMedicine;
        this.fieldSurgery = fieldSurgery;
        this.firstAid = firstAid;
        this.forensics = forensics;
        this.hollisticMedicine = hollisticMedicine;
        this.medicalDoctor = medicalDoctor;
        this.paramedic = paramedic;
        this.pathology = pathology;
        this.psychology = psychology;
        this.veterinaryScience = veterinaryScience;
    }
}

module.exports = Medical;