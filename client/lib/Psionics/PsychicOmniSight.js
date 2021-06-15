const Psionic = require('../Psionic');

class PsychicOmniSight extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Omni-Sight';
        this.group = 'Super';
        this.range = '500 foot ( 152 m) radius.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '15 I.S.P.';
        this.description = `    An advanced form of extrasensory perception that allows the psychic to have a sort of controlled out of body experience. The psychic must spend one minute (four melee rounds) in meditation and enter into a trance state. While entranced, his spirit or essence seems to rise I 0-20 feet (3-6 m) above his physical body (this is not visible to anybody but other psychic sensitives and those who can see the invisible, auras or spirits). 
    From this vantage point, combined with heightened awareness, the psychic sees through his mind's eye, without having to use his normal vision or senses. Psychic Omni-Sight is incredible, enabling the psychic to see in all directions at once, to see radiation, thermal patterns, the invisible, and to literally see any movement, even of the wind! This power enables the psychic to guard or survey a campsite for signs of wayward group members or approaching dangers (maximum range 500 feet/152 m; this psionic vision is stopped/contained by walls and other obstacles). It can also be used to survey an area for things that might otherwise escape normal sight or take much longer to locate and identify.
    
    Special Bonuses & Abilities
• Pinpoints the locations of electrical outlets, electronic "bugs" (spy and surveillance devices), electronic devices and other energy and heat sources, as well as bionic body parts and cybernetic implants close to the surface of the skin (not Bio-Systems or artificial internal organs). Such concealed or obscured items can be identified by their shape and heat pattern. Success Ratio: 40% +5% per level of experience. 
• This ability can also help the psychic to locate secret compartments and trap doors. Success Ratio: 25% +5% per level of experience. 
• See the infrared and ultraviolet spectrums of light. 
• See heat signatures: can tell if an engine has been recently used or a weapon recently fired (within the last 15 minutes), follow recent footprints or vapor trails (within the last five minutes), see heat sig-nature in darkness and so on. 
• Hyper-sensitive to movement. The psychic can not be surprised by movement or attacks within the 500 foot (152 m) radius or confines of the area under psionic scrutiny (may be substantially smaller in-doors; closed off by walls and doors).\`;`;
        this.limitations = `Although keenly aware and alert while using Psychic Omni-Sight, the psychic cannot take physical action, not even to speak, nor use most psionic powers unless he cancels/ends the ability. He can awaken the instant the psi-ability ends and leap into action.
While entranced by Omni-Sight, the character can only use the following psionic powers: Empathy, Telepathy, See Aura, Empathic Transmission and Telekinesis. The number of psionic attacks/actions per melee round are half those normally available when not entranced.`;
    }
}

module.exports = PsychicOmniSight;