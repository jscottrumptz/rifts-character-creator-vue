const Psionic = require('../Psionic');

class Empathy extends Psionic {
    constructor() {
        super();
        this.name = 'Empathy';
        this.group = 'Sensitive';
        this.range = '100 foot (30.5 m) area.';
        this.duration = '2 minutes (8 melees) per level of experience.';
        this.cost = '4 I.S.P.';
        this.savingThrow = `Standard; a save vs Empathy means the psychic cannot get a clear sense of the emotions of that particular person. To save vs Empathy the person must roll to save once each melee that the psychic is using Empathy. Mind Block will prevent any empathic emanations from the blocked person.`;
        this.description = `    Empathy is a psi-ability that makes the psychic aware of, or feel, the emotions of other people, animals and supernatural creatures. The strongest emotions are easiest to sense; hate, anger, terror, love. Feeling for emotions can often be used to establish that somebody or something is nearby, but can NOT be used to pinpoint an invisible or hiding per-son/ creature. Empathy can be especially helpful in recognizing and communicating with ghosts and other supernatural creatures.
    Questioning a person/being while using Empathy can be very handy in establishing how they are reacting to you. In a limited sense, Empathy can be used like a lie detector to see if the emotions match the verbal response. For Example: "Did you know the deceased')" The verbal answer is no, but there is a sudden flare of nervousness and fear (or hate). This doesn't mean the guy is the killer, but it might mean he is lying about knowing the dead man. Further questions might pull out a strong emotion such as anger or hate (or happiness), which may con-firm the psychic's suspicions that this man might be involved in the murder. However, remember that this is, at best, circumstantial evidence and definitely inadmissible in court. Physical proof must be found, hut the empathic readings may put characters on the right track. Also, remember that the empathic psychic is feeling the person's real emotions, hut interpreting their significance. A very nervous person may always radiate fear or anxiety, while a cold-blooded, pathological killer may feel nothing at all and stay calm and cool as he lies through his teeth. The feeling of hate may mean that the person did know the murder victim, or knew of him, and hated him for any number of rea-sons. That does not mean he killed him. As you can sec, interpreting emotions can be a tricky thing. 
    Haunting Ghosts and Entities rarely mask their emotions. Thus, the psychic can easily tell if one or more is nearby (within 100 feet/30.5 m) and what it is feeling, “I sense great sorrow." or "Do as it says! It is angry, almost crazed. I think it will carry out its threat if you try to stop it."
`;
    }
}

module.exports = Empathy;