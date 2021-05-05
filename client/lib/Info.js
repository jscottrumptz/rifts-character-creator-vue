const { Random } = require('random-js');
const random = new Random();

class Info {
    constructor(
        name = '',
        level = 0,
        insanity = [],
        bio = '',
        age = 0,
        sex = '',
        heightDescr = '',
        heightFt = 0,
        heightIn = 0,
        weightDescr = '',
        weight = 0,
        alignment = '',
        physicalDescription = '',
        birthOrder = '',
        disposition = '',
        environment = '',
        familyOrigin = '',
        coalition = '',
        nonHumans = '',
        initialReason = ''
    ) {
        this.name = name;
        this.level = level;
        this.insanity = insanity;
        this.bio = bio;
        this.age = age;
        this.sex = sex;
        this.heightDescr = heightDescr;
        this.heightFt = heightFt;
        this.heightIn = heightIn;
        this.weightDescr = weightDescr;
        this.weight = weight;
        this.alignment = alignment;
        this.physicalDescription = physicalDescription;
        this.birthOrder = birthOrder;
        this.disposition = disposition;
        this.environment = environment;
        this.familyOrigin = familyOrigin;
        this.coalition = coalition;
        this.nonHumans = nonHumans;
        this.initialReason = initialReason;
    }

    getName() {
        return this.name;
    }

    getLevel() {
        return this.level;
    }

    getInsanity() {
        return this.insanity;
    }

    getBio() {
        return this.bio;
    }

    getAge() {
        return this.age;
    }

    getSex() {
        return this.sex;
    }

    getHeightFt() {
        return this.heightFt;
    }

    getHeightIn() {
        return this.heightIn;
    }

    getWeight() {
        return this.weight;
    }

    randomBirthOrder() {   
        let chance = random.die(100)
        if (chance <= 25 && chance > 0) {
            this.birthOrder = 'First Born'
        } else if (chance <= 35 && chance > 25) {
            this.birthOrder = 'Second Born'
        } else if (chance <= 45 && chance > 35) {
            this.birthOrder = 'Third Born'
        } else if (chance <= 55 && chance > 45) {
            this.birthOrder = 'Fourth Born'
        } else if (chance <= 75 && chance > 55) {
            this.birthOrder = 'Last Born'
        } else if (chance <= 85 && chance > 75) {
            this.birthOrder = 'First Born of Twins'
        } else if (chance <= 95 && chance > 85) {
            this.birthOrder = 'Second Born of Twins'
        } else {
            this.birthOrder = 'Illegitimate'
        } 
    }

    randomDisposition() {   
        let chance = random.die(100)
        if (chance <= 10 && chance > 0) {
            this.disposition = `Mean or bitter - The glass is half empty, it doesn't get his fair share, and tends to be suspicious, spiteful and vindictive.`
        } else if (chance <= 15 && chance > 10) {
            this.disposition = `Shy - Quiet and timid, tends to be a loner, but fairly sure of oneself.`
        } else if (chance <= 23 && chance > 15) {
            this.disposition = `Gung-ho - Guts and glory type who sees himself as a hero, and enjoys tackling obstacles, challenges and participating in combat.`
        } else if (chance <= 29 && chance > 23) {
            this.disposition = `Worry wart - Nervous and cautious about everything.`
        } else if (chance <= 35 && chance > 29) {
            this.disposition = `Hothead - Bold, and quick-tempered or emotional. Feels things deeply because it or she cares. May be a good, nice person or a hotheaded jerk.`
        } else if (chance <= 43 && chance > 35) {
            this.disposition = `Gambler - Likes to take chances for himself and is always looking for a way to even the odds and make a big score.`
        } else if (chance <= 48 && chance > 43) {
            this.disposition = `Blabber-mouth - Nice guy. but talks too much and may say the wrong thing to the wrong person. `
        } else if (chance <= 54 && chance > 48) {
            this.disposition = `Wild man - May mean well, but tends to be bullheaded, overconfident, takes unnecessary risks and tends to rush into situations without thinking it all through.`
        } else if (chance <= 61 && chance > 54) {
            this.disposition = `All around good person - Kind. generous, compassionate, and positive. The glass is usually half full.`
        } else if (chance <= 67 && chance > 61) {
            this.disposition = `Arrogant - Confident and self-assured to the point that it feels it is the best at what it docs. Likes to take charge and direct others whether they appreciate it or not. May underestimate others.`
        } else if (chance <= 75 && chance > 67) {
            this.disposition = `Tough guy - Cocky and self-reliant. May be a lone wolf or the strong, silent type.`
        } else if (chance <= 81 && chance > 75) {
            this.disposition = `Braggart - May be a nice person, but likes to brag about his or her abilities, accomplishments and exploits.`
        } else if (chance <= 86 && chance > 81) {
            this.disposition = `Paternal - Tends to be overprotective of others, especially friends. and is especially overbearing toward young characters and children.`
        } else if (chance <= 91 && chance > 86) {
            this.disposition = `Easy going - Unflappable and calm most of the time; laid back and accepting of others. Trusts almost anyone until they are proven unworthy of that trust.`
        } else if (chance <= 95 && chance > 91) {
            this.disposition = `Complainer - Constantly aggravated about something.`
        } else if (chance <= 98 && chance > 95) {
            this.disposition = `Peacemaker - Hates discord between friends, family, and co-workers and likes to help others mend fences.`
        } else {
            this.disposition = 'Schemer/Dreamer - Always looking ahead, never in the present, and dislikes the past. Thinking ahead and plotting for the future is a good trait sometimes. but a bad one other times, because it tends to miss the obvious ("what if ... ") and forgets the reality of the here and now.'
        } 
    }

    randomEnvironment() {
        let chance = random.die(100)
        if (chance <= 20 && chance > 0) {
            this.environment = `Agricultural; farm or ranch.`
        } else if (chance <= 40 && chance > 20) {
            this.environment = `Country community, small town or village.`
        } else if (chance <= 50 && chance > 40) {
            this.environment = `Old Town 'Burbs, a prosperous, upper-middle class city or town. Minimal hardship or ethnic diversity.`
        } else if (chance <= 60 && chance > 50) {
            this.environment = `New Town 'Burb, a slum with plenty of hardship, poverty and racial diversity.`       
        } else if (chance <= 70 && chance > 60) {
            this.environment = `Small town magic community where magic. creatures of magic. D-Bees and ethnic diversity were commonplace.`    
        } else if (chance <= 80 && chance > 70) {
            this.environment = `Wilderness town where hunting, trapping, raising crops and livestock, and respecting nature was the way of life. Little racial diversity and basic technology.`   
        } else if (chance <= 90 && chance > 80) {
            this.environment = `Wilderness tribe (Psi-Stalker. Simvan, Native American, Barbarian). A nomadic people who hunted, gathered food, grew some crops and lived off the land. Great respect for nature and elemental forces. Little racial diversity and minimal technology.`
        } else {
            this.environment = `Population Center, grew up in a big city like Chi-Town or an Old Town 'Burb, Whykin, Kingsdale, Tolkeen, Lazio, MercTown, and so on.`
        } 
    }

    randomFamilyOrigin() {
        let chance = random.die(100)
        let years = random.die(12) * 10;
        if (chance <= 50 && chance > 0) {
            this.familyOrigin = `Earth native. Character is human.`
        } else if (chance <= 75 && chance > 50) {
            this.familyOrigin = `D-Bee. Parents came through a Rift from another world or dimension ${years} years ago.`
        } else if (chance <= 85 && chance > 75) {
            this.familyOrigin = `Psychic. A character with a history of psionic powers in the family. Player character may or may not have psionic abilities. May be a Psi-Stalker or other psychic.`
        } else if (chance <= 90 && chance > 85) {
            this.familyOrigin = `Nonhuman mutant (Dog Boy?). The product of genetic experimentation, probably at the hand of the Coalition or the mysterious Gene Splicers, but may also be the result of weird magic or dimensional energies from a Rift. See Rifts® World Book 13: Lone Star for info on CS genetic experiments and mutants.`
        } else if (chance <= 95 && chance > 90) {
            this.familyOrigin = `An orphan raised by a different race or culture. Always felt different and out of place, even if loved and treated well.`
        } else {
            this.familyOrigin = `Tribal. Native American, Psi-Stalker, Simvan, or barbarian, or other wilderness people. May have been raised by a different race or culture.`
        } 
    }

    randomCoalition() {
        let chance = random.die(100)
        if (chance <= 10 && chance > 0) {
            this.coalition = `Likes the Coalition States; has mostly seen and heard good things about them and believes they are humankind's salvation.`
        } else if (chance <= 20 && chance > 10) {
            this.coalition = `Every nation has good and bad people. This character rehefuses to condemn a nation for the actions of its government. By the same token, the character is suspicious and fearful of the CS.`
        } else if (chance <= 30 && chance > 20) {
            this.coalition = `Believes the CS are heroes and humankind's salvation until proven otherwise.`
        } else if (chance <= 40 && chance > 30) {
            this.coalition = `Respectful but wary. Knows the CS is capable of greatness and ruthless savagery. Has heard a great many things about the Coalihetion, but doesn't have any strong feelings about them one way or the other.`
        } else if (chance <= 50 && chance > 40) {
            this.coalition = `Distrusts and fears the CS; has seen many injustices, atrocheities and acts of ruthlessness at the hands of the CS military, especially against nonhumans, practitioners of magic, and those of different beheliefs.`
        } else if (chance <= 60 && chance > 50) {
            this.coalition = `Hates the Coalition, because the character has lost numerheous friends, family members and/or acquaintances to them.`
        } else if (chance <= 70 && chance > 60) {
            this.coalition = `Suspicious and fearful of the CS. Sees them as a nation of misguided zealots who hate, fear and destroy what they fear and don't understand. Wishes that would change.`
        } else if (chance <= 80 && chance > 70) {
            this.coalition = `Indifferent, never personally had any experience with them`
        } else if (chance <= 90 && chance > 80) {
            this.coalition = `Dislikes and distrusts the Coalition, the character is well informed and knows a lot about the CS's philosophies, laws, and activheity, and they seem to it pretty unjust, if not outright evil.`
        } else {
            this.coalition = `Sad about the CS. The character has seen soldiers defy orheders to do the right thing, and recognizes the CS has done many good things for many humans. Its potential for good is tremendous, but believes Emperor Prosek and the government that serves him are evil. They are the ones responsible for the crimes the Coalition has commitheted against others. Suspicious and caution about the CS.`
        } 
    }

    randomNonHumans() {
        let chance = random.die(100)
        if (chance <= 10 && chance > 0) {
            this.nonHumans = `Hates and distrusts all nonhumans! The only good one is a dead one!`
        } else if (chance <= 15 && chance > 10) {
            this.nonHumans = `Hates all demons, monsters and supernatural creatures, does not like or trust D-Bees, or mutants in general, fears and hates those with demonic features and mind control powers.`
        } else if (chance <= 20 && chance > 15) {
            this.nonHumans = `Hates dragons and distrusts all creatures of magic and D-Bees with reptilian features.`
        } else if (chance <= 25 && chance > 20) {
            this.nonHumans = `Sees D-Bees and all nonhumans as people to be exploited (cheap labor, slaves, cannon fodder, sex toys, etc.) They're all worthless, lazy and liars any way.`
        } else if (chance <= 30 && chance > 25) {
            this.nonHumans = `D-Bees are okay, except for the Larmac (hates 'em). Dehespite its claims of equality, the character tends to treat nonhumans as second class citizens beneath humans (or whatever the character's own race is; could it a particular D-Bee itself).`
        } else if (chance <= 35 && chance > 30) {
            this.nonHumans = `Tries to treat all of God's creatures as equals, but fears and hates shape-changers, and distrusts truly inhuman/alien looking D-Bees.`
        } else if (chance <= 40 && chance > 35) {
            this.nonHumans = `Accepts all attractive and human-looking D-Bees and treats them as equals. Has trouble accepting inhuman/alien looking D-Bees and tends to avoid and ignore them.`
        } else if (chance <= 45 && chance > 40) {
            this.nonHumans = `Dislikes all D-Bees, but loathes the attractive ones who worm their way into human society as if they were one of us. Believes they should be dumped into a Rift (to anywhere) or destroyed. The character takes pleasure in cheating handsome D-Bees, getting them in trouble, turning them in to the law (or bounty hunters, CS exterminahetion squads, slavers and their enemies) and treats them with blatant contempt.`
        } else if (chance <= 55 && chance > 45) {
            this.nonHumans = `Honestly tries to accept D-Bees as equals and gives them the benefit of the doubt, but still tends to be wary and suspicious of nonhumans.`
        } else if (chance <= 60 && chance > 55) {
            this.nonHumans = `Suspicious of everybody, human and non-human alike! Tends to be a bit paranoid, because "in these times you never really know who's human and who's not."`
        } else if (chance <= 65 && chance > 60) {
            this.nonHumans = `Has had mostly good experiences with D-Bees and accepts them as equals without doubt or suspicion. Suspicious of creatures of magic and supernatural beings.`
        } else if (chance <= 70 && chance > 65) {
            this.nonHumans = `Doesn't like 'em, doesn't trust 'em and tends to blame them for everything that goes wrong in his life and in society. Howheever, the character doesn't try to hurt, use or abuse them, it just wishes they'd go someplace else. If a good alignment, the character will even help a D-Bee in need, but knows he'll live to regret it.`
        } else if (chance <= 75 && chance > 70) {
            this.nonHumans = `Hates and fears demons and supernatural beings, but behelieves that all mortal races need to live and work in harmony to hold the demons and monsters at bay.`
        } else if (chance <= 80 && chance > 75) {
            this.nonHumans = `Conditional tolerance. D-Bees don't belong here, but it ain't their fault. Treats 'em reasonably well, distrusts those it doesn't know, but may consider a D-Bee it knows and likes as a trusted friend.`
        } else if (chance <= 85 && chance > 80) {
            this.nonHumans = `Treats all sentient beings with the utmost respect and courhetesy until they prove undeserving of it. Has a high regard for life and personal freedom.`
        } else if (chance <= 90 && chance > 85) {
            this.nonHumans = `Prefers the company of D-Bees over his own race (never fit in), suspicious of creatures of magic and supernatural beings.`
        } else if (chance <= 95 && chance > 90) {
            this.nonHumans = `Kind and friendly to D-Bees and all nonhumans, except demons of course. Very sensitive to the injustice and plight of D-Bees to the point of always going above and beyond the call of duty and gives D-Bees favorable trade deals, discounts, a shoulder to cry on, a place to hide, and always the benefit of the doubt (even when it probably shouldn't).`
        } else {
            this.nonHumans = `Has found that D-Bees are just people too, and treats them the same as anybody else. Suspicious of dragons, creatures of magic and supernatural beings.`
        } 
    }

    randomInitialReason() {
        let chance = random.die(100)
        if (chance <= 10 && chance > 0) {
            this.initialReason = `Tradition; a matter of destiny.`
        } else if (chance <= 20 && chance > 10) {
            this.initialReason = `Outlaw/wanted and on the run.`
        } else if (chance <= 30 && chance > 20) {
            this.initialReason = `Wanderlust; wants to see the world.`
        } else if (chance <= 40 && chance > 30) {
            this.initialReason = `Seeks fame and fortune.`
        } else if (chance <= 50 && chance > 40) {
            this.initialReason = `Seeks intrigue and/or knowledge.`
        } else if (chance <= 60 && chance > 50) {
            this.initialReason = `Refugee. lost home and family, decided to explore.`
        } else if (chance <= 65 && chance > 60) {
            this.initialReason = `Wants to travel the Megaverse; see alien worlds.`
        } else if (chance <= 75 && chance > 65) {
            this.initialReason = `Self-discovery or seeks a purpose or an answer.`
        } else if (chance <= 85 && chance > 75) {
            this.initialReason = `Quest for power.`
        } else if (chance <= 90 && chance > 85) {
            this.initialReason = `Seeks revenge.`
        } else if (chance <= 95 && chance > 90) {
            this.initialReason = `Quest for magic.`
        } else {
            this.initialReason = `Sense of duty.`
        } 
    }

    randomWeightDescr() {
        let chance = random.die(100)
        if (chance <= 10 && chance > 0) {
            this.weightDescr = `Skinny`
        } else if (chance <= 30 && chance > 10) {
            this.weightDescr = `Thin`
        } else if (chance <= 60 && chance > 30) {
            this.weightDescr = `Average`
        } else if (chance <= 75 && chance > 60) {
            this.weightDescr = `Husky`
        } else if (chance <= 89 && chance > 75) {
            this.weightDescr = `Potbelly`
        } else {
            this.weightDescr = `Obese`
        } 
    }

    randomHeightDescr() {
        let chance = random.die(100)
        if (chance <= 30 && chance > 0) {
            this.heightDescr = `Short`
        } else if (chance <= 70 && chance > 30) {
            this.heightDescr = `Average`
        } else {
            this.heightDescr = `Tall`
        } 
    }

    randomPlaceholder() {
        let chance = random.die(100)
        if (chance <= 20 && chance > 0) {
            this.placeholder = ``
        } else if (chance <= 35 && chance > 20) {
            this.placeholder = ``
        } else {
            this.placeholder = ``
        } 
    }

    randomAge() {
        this.age = 14 + random.die(18);
    }
}

module.exports = Info;