const Psionic = require('../Psionic');

class ObjectRead extends Psionic {
    constructor() {
        super();
        this.name = 'Object Read';
        this.group = 'Sensitive';
        this.range = 'Touch.';
        this.duration = 'Varies; usually about 2D6 minutes. ';
        this.cost = '6 I.S.P.';
        this.savingThrow = 'None';
        this.baseSkill = `Impressions: 56% +2% per level of experience. Images: 48% + 2% per level. Present: 38% + 2% per level of experience.`;
        this.description = `    Also known as Psychometry, this uncanny ability enables the psychic sensitive to receive impressions and images from an object regarding its use, history and last owner. This is done by holding the object and concentrating on a specific line of thought or opening up to general impressions (the latter is always more vague and random). Just as a psychic must open himself to sense evil or magic, he must open himself to the object. If successful, he will receive impressions and/or images revealing bits of information. 

Impressions include: 
    General alignment of its last owner (good, selfish, evil), general emotional state of mind (angry, happy, sad, hate filled, confused, etc.), the object's general purpose (what it is used for), whether or not the last owner is living or dead, and whether the item has been used with/by magic or supernatural forces. Object Read will also conclusively indicate whether the item is currently enchanted or contains a supernatural force/entity (as well as its alignment and emotions). If the item is possessed, an Object Read makes the reader totally vulnerable to psychic attack (no bonuses to save). 

Images: 
    The psychic can also see images of isolated events which have happened in the past. This will provide brief snippets of images and events that will offer glances of the previous owner and others close to him. Traumatic and emotion filled events/images are the easiest to see. Impressions will accompany the images, adding to the story as it unfolds. Information includes: approximate age, height, weight, build, race, sex, sometimes occupation, hair color and length; special facial or body features such as a scar or tattoo or beard (very often the exact facial features are out of focus, blurred or obscured); the object's use/purpose; and some special event, usually very traumatic, important or happy. Often the event image will be fragmented as if it was a piece of movie film edited by a crazy man. The event will always be one in which the object was involved in some way. 

The success or failure of an Object Read: 
    Roll percentile dice once for impressions and once for images. The roll must fall under the character's base skill ability to succeed. A roll higher than the base skill means a failure and the psychic feels and/or sees nothing. Impressions and images are two different things, so roll for each. The psychic may get no impressions, but see images or vice versa. The present cannot be seen unless the psychic was successful on at least one of the previous read impressions or images rolls. Once an object has been read it cannot be read again by the same psychic, even if he did not see or feel a thing. Of course. the psychic can attempt to Object Read other items, but each attempt will cost 6 I.S.P. 

The Present:
    The present can also be glimpsed, but costs an additional 4 I.S.P., with no guarantee of success. Sometimes the psychic can focus in to see and feel the last owner as he or she is at that very moment. This will provide an idea of what is his current state of mind/emotion, appearance, dress. general location (that is to say, a bedroom, office, street, outdoors. etc.; no address or sense of close or far is provided), general features (shaved his beard, dyed hair, etc.) and so on. The psychic may be able to identify a place or person by feature if he has seen it before or runs into him in the near future.
`;
    }
}

module.exports = ObjectRead;