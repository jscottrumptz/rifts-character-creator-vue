const Psionic = require('../Psionic');

class Clairvoyance extends Psionic {
    constructor() {
        super();
        this.name = 'Clairvoyance';
        this.group = 'Sensitive';
        this.range = 'Self (although the image could pertain to people or places thousands of miles away.';
        this.duration = '6D6 melees.';
        this.cost = '4 I.S.P.';
        this.baseSkill = '58% +2% per level of experience.';
        this.description = `    This allows the psychic to see or feel glimpses of the possible future. This is achieved through meditation or intense concentration in which the clairvoyant thinks about a particular person, event or place. Add +5% to the base skill if the person involved is a friend or loved one. 
    Clairvoyance is unpredictable and cannot be turned on and off like a lightbulb. Sometimes it works (if the roll is under the base skill) and sometimes it does not (when the roll is above the base skill). A failed roll means the psychic received no insight to the future. 
    A clairvoyant trance can be attempted as often as twice every day. The message can be a sudden feeling that somebody is in need ('" ... something's wrong. lt's ... it's .. .Janet! I've got to see her!") or, more often, a sudden flash of insight, a sudden image that races through the mind. The image is like a brief snippet of film from a movie or a dream. Often all the details are not clear, but the potential danger is. For example, "The psychic character is in a trance or meditation, thinking about his/her friend Janet. Suddenly, the mind is flooded with an image of Janet rushing down a crowded street. It's dusky, like morning, twilight or evening. She seems very upset. The traffic light changes to amber. Janet races into the street, ignoring the light. It turns red. There's a car, squeal of tires, Janet screams. The image ends." ls Janet hurt? Killed? Unknown, but the danger is clear. There are also other hints of information: the time of day, Janet seeming upset, rushing, etc. The glimpse into the future could be twenty minutes, eight hours, 24 hours, or a week. The psychic has no way of knowing. Of course, he has the advantage of recognizing the potential danger as it begins to un-fold and may be able to avoid it, stop it or change the outcome. The im-age may last a few minutes or be a sudden flash lasting but a few seconds. The flash could be a peculiar noise, a face, or a specific image, like a particular door or object.
    It is important to note that sometimes a clairvoyant image will occur unintentionally, without the psychic trying to do so. These most often manifest themselves as dreams or nightmares during sleep. The clairvoyant dream is exactly like the image from a meditative trance de-scribed previously. The precognitive flash of the future may also occur un-beckoned while awake, but this is extremely rare. These brief glimpses of the possible future happen because the clairvoyant is acutely attuned to his world. Anything that might hurt or change that world (including people and places) will often be foretold in a flash of insight. 
`;
        this.gmNote = `    Be careful of revealing too much. Use the examples provided as a guide. Remember, these are brief glimpses of the possible future. not a motion picture. The psychic can NOT engage in any actions, combat or otherwise, during a moment of clairvoyance or the image will instantly stop. It usually requires 2D4 melees of concentration or meditation before the image occurs. Remember, a failed base skill roll means absolutely nothing happens, but still burns up the 4 I.S.P. and time.`;
    }
}

module.exports = Clairvoyance;