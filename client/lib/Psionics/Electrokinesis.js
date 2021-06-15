const Psionic = require('../Psionic');

class Electrokinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Electrokinesis';
        this.group = 'Super';
        this.range = 'Varies.';
        this.duration = 'Varies.';
        this.cost = 'Varies.';
        this.description = `    Electrokinesis is a psychic power that allows the psychic to exert amazing physical control over electricity. 

    Electrical Resistance
The psychic can manipulate his body so to become resistant to electricity. Up to 60,000 volts will inflict no damage or ill effect. Currents greater than 60,000 volts, including lightning and magic electricity, do half damage. : Self. Duration: 3 minutes per level of experience. I.S.P.: 4. 

    Electrical Discharge
The character can cause static electricity within a six foot (1.8 m) area, as well as emit an electrical discharge by touch. The discharge can be a little jolt or inflict up to ID6 S.D.C. damage as often as once per melee. Range: Touch or 2 feet (0.6 m) distance. Duration: Instant. I.S.P.: 2 per each discharge. 

    Electrical M.D. Attack
The psychic can fire a light M.D. electrical blast. Range: Touch or 10 feet (0.3 m) per level of experience. Mega-Damage: ID6 M.D. to 3D6 M.D. Duration: Instant. I.S.P.: 6 I.S.P. to inflict ID6 M.D., 12 I.S.P. to inflict a 2D6 M.D. blast, 18 I.S.P. to do a 3D6 M.D. blast. 

    Manipulate Electrical Devices
Through focused thought the psychic can enforce a limited control over electrical devices, such as tum off and on light switches, computers, televisions, radios, blenders, microwave ovens, flashlights, toys (battery and plug types), windshield wipers, and all types of electrically operated appliances, toys and de-vices. He can also manipulate the controls of the device, such as volume, channel selection, tuners, speakers, change speed, dim lights, and so on. A dozen different electrical functions can be manipulated each melee. This can mean flicking the light off and on six times (12 functions/6 off, 6 on) or tum on the T.V., turn its volume up to the max. and turn on IO other appliances (12 functions in all). Range: 45 feet (13.7 m) +5 feet (1.5 m) per level of experience. Duration: 2 minutes per level of experience. I.S.P.: 4. Note: The character does not need to see the devices to manipulate them. He can feel their presence.

    Sense Electricity
The psychic can sense or feel electricity and pinpoint its exact location with fair expertise. Range: 45 feet (13.7 m) +5 feet (1.5 m) per level of experience. Duration: 2 minutes of extreme sensitivity when he can pinpoint every source of electricity in the area. I.S.P.: 2 per every two minutes. Base Skill: 55% +5% per each additional level of experience. A failed roll means only 1D6x10% of all the electrical devices/sources of electricity could be sensed.
`;
    }
}

module.exports = Electrokinesis;