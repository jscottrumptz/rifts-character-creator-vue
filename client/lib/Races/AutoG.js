const Race = require('../Race');
const { Random } = require('random-js');
const random = new Random;
const Art = require('../Skills/Art');
const Anthropology = require('../Skills/Anthropology');
const MathematicsBasic = require('../Skills/MathematicsBasic');
const MathematicsAdvanced = require('../Skills/MathematicsAdvanced');

class AutoG extends Race {
    constructor() {
        super();
        this.name = `Auto-G`;
        this.description = `    Auto-Gs are a rare and feared D-Bee who is believed to have come to Earth from an unknown world. Many are the tales of the Auto-G, but all are probably pure fiction or half-truths. They call themselves Earthlings and claim their natural appearance is "human," however, an Auto-G is a shape-changer who can take the appearance and abilities of most mortal humanoids, which suggests they have nothing in common with humans. Some believe they are refugees and criminals from a far-flung galaxy not even known to the Splugorth, and call themselves "human" to hide among them and create confusion about their true nature. The Coalition States, Free Quebec, and even the Splugorth and other groups consider these strange beings to be the ultimate shape-changers without actually being a supernatural being or true creature of magic. 
    Unlike the metamorphosis of a dragon or the shape-changing abilities of other beings, the Auto-G's transformation is so complete that even its DNA and apparent natural abilities are the same as the race whose appearance it has assumed. This means if an Auto-G is copying a D-Bee race that has wings and flies, or can teleport, or tum invisible, etc., so can the Auto-G when he assumes that form. If killed while in its unnatural form, that's the way the body remains. It does not revert to its true, allegedly human appearance. 
    The ultimate shape-changer, an Auto-G can study and duplicate a specific individual right down to his or her fingerprints, retina, scent and unique genetic structure! Thus, an Auto-G disguised as someone else has identical fingerprints, voice and physical abilities, and can fool a retinal scanner, blood tests, voice pattern identification, and DNA tests! Even a spouse or the character's own mother can not tell the original from the genetic duplicate unless he acts differently and even then ... 
    The Auto-Gs' amazing powers of transformation place them among the very best and most dangerous spies, assassins, infiltrators and undercover agents in the Megaverse, and the absolute masters at framing innocent people. For this reason they are also among the most feared, hated and hunted. Even the Splugorth have instructed their minions to kill an Auto-G on sight. If someone is suspected of being an Auto-G, but can't be proven as such, they are still destroyed by Minions who are instructed that it is better to be safe than sorry. 
    Of course, an Auto-G does not possess the power to copy a person's skills, memories, habits, or personality, but these things can be studied and mimicked as part of a careful impersonation. Nor can they generate bionic implants or artificial appendages, only the actual, physical form of the subject they hope to imitate. These are the flaws in the Auto-G's disguise, but its odd behavior is hardly conclusive and might be explained away by drunkenness, drug use, illness, injury, magic, psionic influence, panic, confusion, or a lapse in memory. The physical disguise is so convincing, most people will find an answer to odd behavior rather than jump to the conclusion he has been replaced by a shape-changer.
    Psionic powers can also help uncover an Auto-G, however, these beings pass casual inspection by Dog Boys, Psi-Stalkers and other psychics with ease. Since they are whatever race they are impersonating they do NOT register as anything else. Furthermore, an Auto-G can also disguise its P.P.E. and alter its aura. A Telepathic scan may pluck out an incriminating or disturbing surface thought, but only an interrogation and pointed questions are likely to produce thoughts that might betray the impostor, a casual scan of surface thoughts rarely reveals any-thing suspicious or incriminating. 
    A psychic Mind Bond always reveals the truth, but most psychics avoid using this invasive and distasteful power. Mean-while, using a See Aura is likely to display a very normal looking aura for that race. Unless the psychic has studied the aura of a specific person before he was impersonated by an Auto-G, the psychic will not see anything unusual or different. However, if the psychic is very familiar with the real McCoy's aura (typically a friend, loved one or somebody important), he is likely to notice subtle and disturbing differences or aberrations - one of which is a high amount of P.P.E. However, whether these differences from what he remembers are enough to make him suspicious is another matter entirely. 
    Auto-Gs are so incredibly rare and many of the stories about them are so outlandish and frightening, that most people do not believe they are real. In fact, there is only a 01-05% chance that an average person has ever heard of an Auto-G, and even among learned scholars, scientists, adventurers, warriors and practitioners of magic who have heard of the D-Bee, only O 1-15% believe they are real. The rest believe Auto-Gs are mythical boogeymen who never really existed except in stories from the Dark Age. The Coalition States, Splugorth and Naruni are the exception. 
    In the Coalition States, NTSET, Intel Specters, Psi-Net and top military and political leaders know Auto-Gs are real. The CS was among the first to discover that Auto-Gs exist, dating back to the early days of the Chi-Town City-State when these boogeymen were found living among them. This prompted the, even then, technological society to study and understand these strange, secretive beings. Having had more dealings with Auto-Gs than anyone else in the world, Chi-Town is the leading expert on the subject. They have established protocols for detecting and countering Auto-Gs that have stood the test of time for over one hundred years. When the Coalition States were formed they shared this information with their allied States, insisting that all other member States put their protocols in place (including Free Quebec). This information has always been kept "Top Secret." Thus, the CS can identify Auto-Gs by testing for a particular rare combination of enzymes only the D-Bee possesses. They also use observational techniques and psionics to pinpoint individuals who might be Auto-Gs. The simple test can be performed on the living or dead and takes only a few minutes. The CS also has psionic procedures that can be used to help uncover "suspected" Auto-G infiltrators. Unfortunately, such detection in the 'Burbs and on the battlefield is much more difficult and rarely performed (it's just not practical). 
    In 2 P.A., Chi-Town launched a campaign to unearth and obliterate all shape-changers within their territories, with Auto-Gs at the top of the extermination list. This campaign is believed to have been so successful over the decades that it was believed Auto-Gs may have been wiped out. Whatever tiny numbers may have survived had certainly fled the regions dominated by the Coalition States. Ever vigilant, CS forces continued to investigate every rumor or suspicion of shape-changers operating within their domain. That belief was dispelled when a branch of the Chi-Town ISS foiled a hit team sent to kill Emperor Prasek in I 06 P.A. All five conspirators were slain trying to escape, leading to an autopsy. The standard AG Test revealed one of the seemingly human assassins was really an Auto-G. Military code-breakers confirmed the authorities' worst suspicions 36 hours later when they pierced the defense codes on a computer disk found on the body of the Auto-G. The disk contained a comprehensive profile, complete with old and new video footage, on each member of the Prosek family. It also revealed a plan to secretly kill either the Emperor or Joseph II and have the shape changer take his place to undermine the CS from within. It also references "Team Two." So far, Team Two has never manifested or it members may have been scared away or slain by CS security without realizing it. Who may have ordered the "hit" is unknown, but the Federation of Magic and Tolkeen are at the top of the list. How many other Auto-Gs may exist in North America is unknown. Most authorities believe there may be as few as 40 or 50, and certainly no more than 200-600 throughout North America.

(see Rifts® World Book 30: D - Bees of North America pg. 27 for more information)`;
        this.image = 'assets/images/race/auto_g.jpg';
        this.availableOCCs = `    In theory, any, but Auto-Gs tend toward the following: Bounty Hunter (and any type of man-hunter), Master Assassin, Freelance Spy, Super-Spy, Professional Thief, Bandit, Highway Man, Smuggler, Con Artist, Gunfighter, Gunslinger, Sheriff, or Mere Soldier. The rare few who choose a less violent occupation may select any of the Scholar & Adventurer O.C.C.s. Note: Cannot select any O.C.C. that artificially augments the body, including Cyber-Knight and Headhunter, nor any Practitioner of Magic O.C.C. or Psychic O.C.C.`;
        this.psionicsDesc = `Alter Aura (2), Death Trance (1), Mask P.P.E. (4), Mask I.S.P. & Psionics (7), Mind Block (4), Nightvision (4), and Summon Inner Strength (4). Considered a Major Psychic and needs a 12 or higher to save vs psionic attack. 
    I.S.P.: M.E. attribute number plus a roll of 4D6, and an additional 1D6+ 1 per level of experience.`;
        this.abilitiesDesc = ``;
        this.magicDesc = `None; cannot practice magic of any kind.`;
        this.cyberneticsDesc = `Avoid it whenever possible. Never make more than 40% of their body cybernetic (any more will kill them).`;
        this.skillsDesc = ``;
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 120;
        this.weightMax = 180;
        this.lifespan = {sides:6, amount:6, bonus: 134};
        this.lifespanDesc = `years. Reaches physical maturity at age 16, but their shape-shifting abilities usually manifest by age 7. Females give birth to one child after a nine month pregnancy and can bear children until 72 years of age.`;
        this.weightDesc = `lbs; but size varies depending on the being they are copying.`;
        this.disposition = `A legacy of fear and persecution has made most Auto-Genetics cold and detached, or angry and resentful, of humans and D-Bees. They resent not being able to use their god given abilities without evoking fear and suspicion or out-right hatred and panic. Auto-Gs genuinely believe they are human and resent being outcasts among their fellow humans. At the same time, many Auto-Gs are rather cocky, bold, resourceful and self-assured, all of which are important for thieves, spies, killers and man-hunters.`;
        this.habitat = `Basically the same as any human or whatever race they are impersonating. Auto-Gs are believed to originate from North America, possibly the Devil's Gate (St. Louis) or from a Rift that appeared in the ruins of Old Chicago. Long ago they were found mainly in the Mid-West, but since they are so feared and hunted, they hide their true natures. It is believed there are fewer than 600 Auto-Gs in all of North America, possibly as few as 200. Of course, no one knows how many really exist, and since they could be almost any-body, there could be thousands living undetected among the many human and D-Bee communities, though that is doubtful.`;
        this.allies = `Nobody in particular and truly trust only their own kind. Those who pursue criminal professions tend to associate with like-minded evildoers and power-brokers. A number of Auto-Gs are rumored to be members of and/or work with the Federation of Magic. Rumors abound that Tolkeen had also hired a number of freelance Auto-G assassins and spies.`;
        this.rivals = `Universally feared, most people slay Auto-Gs whenever they are discovered. The CS is enemy number one, and Splugorth Slavers love to buy and sell the D-Bee in their slave markets. Otherwise, enemies are any-body who gets in their way or threatens their existence.`;
        this.pronunciation = `aa·tow jee.`;
        this.alias = `"Auto-G" is slang for "auto-genetic," a term coined to describe their ability to duplicate the genetic structure and physical appearance of other races.`;
        this.alignment = `Any, but professional assassins and spies lean toward Anarchist (35%), Aberrant (30%), Miscreant (10%) and Diabolic (15%).`;
        this.abilities = ['No Psionics']
        this.iqRoll = { sides: 6, amount: 2, bonus: 8 };
        this.meRoll = { sides: 6, amount: 2, bonus: 8 };
        this.maRoll = { sides: 6, amount: 3 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 2, bonus: 8 };
        this.pbRoll = { sides: 6, amount: 3, bonus: 6 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.hpText = 'PE';
        this.hpLvl = { sides: 6, amount:1 }
        this.sdcText = 'PE+24';
        this.ppeText = 'PE+2D4x10'
        this.ispText = 'ME+2D6'
        this.ispLvl = { sides: 6, amount:1, bonus: 1 }
        this.horror = { bonus: 10 };
        this.perceptionBonus = { bonus: 4 };
        this.mindControlBonus = { bonus: 1 };
        this.illusionBonus = { bonus: 1 };
        this.possessionBonus = { bonus: 3 };
        this.horrorBonus = { bonus: -1 };
        this.insanityBonus = { bonus: -1 };
    }

    getSecondary(character) {
        character.secondaryStats.hp.initialValue = character.attributes.pe.total;
        character.secondaryStats.sdc.initialValue = character.attributes.pe.total;
        character.secondaryStats.ppe.initialValue = character.attributes.pe.total;
        character.secondaryStats.isp.initialValue = character.attributes.me.total;
    }

    rollSecondary(character) {
        character.psionics.randomPsionics = false;
        character.secondaryStats.ppe.raceBonus = random.dice(4,2).reduce((a, b) => a + b, 0) * 10;
        character.secondaryStats.isp.raceBonus = random.dice(6,2).reduce((a, b) => a + b, 0);
        character.secondaryStats.sdc.raceBonus = 24;

        let me = character.attributes.me
        if (me.raceTotal > 17) {
            me.attributeRoll.push(random.die(6));
            me.raceTotal = me.attributeRoll.reduce((a, b) => a + b, 0) + me.bonus;
        }

        character.skills.known.art = new Art;
        character.skills.known.art.raceBonus = 20;

        character.skills.known.anthropology = new Anthropology;
        character.skills.known.anthropology.raceBonus = 10;

        character.skills.known.mathematicsBasic = new MathematicsBasic;
        character.skills.known.mathematicsBasic.raceBonus = 15;

        character.skills.known.mathematicsAdvanced = new MathematicsAdvanced;
        character.skills.known.mathematicsAdvanced.raceBonus = 15;
    }
}

module.exports = AutoG;