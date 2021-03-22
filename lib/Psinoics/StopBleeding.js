const Psionic = require('../Psionic');

class StopBleeding extends Psionic {
    constructor() {
        super();
        this.name = 'Stop Bleeding';
        this.group = 'Healing';
        this.range = 'Self or other by touch.';
        this.duration = 'Indefinitely, as long as the healer keeps his hand on or near the injury and concentrates on stopping the bleeding. Four minutes per experience level of the psi-healer if the character uses this temporary tourniquet and leaves his patient to do other things.';
        this.cost = '2 for self, 4 for others.';
        this.description = `    Another type of bio-feedback, mind over matter power, in which the psychic stops bleeding from wounds and internal injury using the power of his mind. This means stopping additional damage from blood loss and being able to function relatively unimpaired. As impressive and potentially lifesaving as this ability may be, it is only a stopgap measure. The injury is NOT being healed and the character· still needs medical attention or he will, eventually, die from his injuries. If rendered unconscious, the bleeding and blood loss damage immediately begins.`;
        this.note = `Stops the bleeding from all sources, however, additional/ new Hit Point damage suffered after the Stop Bleeding requires additional concentration and another two I.S.P. to stop the bleeding from the new wound(s).`
        this.penalties = `Furthermore, the psychic must continue to concentrate on stopping the bleeding, which means his number of attacks per melee round and all combat bonuses are reduced by half, but skill performance and other abilities function at normal capacity (he can run, leap, climb, swim, drive, operate machinery, etc. at full tilt, for example).`;
    }
}

module.exports = StopBleeding;