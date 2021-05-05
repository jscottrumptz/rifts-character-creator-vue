const Psionic = require('../Psionic');

class RemoteViewing extends Psionic {
    constructor() {
        super();
        this.name = 'Remote Viewing';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '2D6+6 second flash of insight or vision of current events.';
        this.cost = '10 I.S.P.';
        this.savingThrow = `Special. Other psychics can feel or sense when some-body is trying to observe them and can try to resist it by concentrating (uses up one I.S.P.); standard save vs psionic attack (in this case, psionic intrusion). Failure means the psychic is seen via Remote Viewing. Success means the psychic trying to view is blocked, and he knows that the target has deliberately done so. Otherwise, the target of this power gets no impression from being viewed remotely and has no idea why he is being watched or by whom.`
        this.description = `    To use this power, the psychic needs a photo or video image to focus on, even if he knows the person or place intimately. When focused on a particular person, the psychic can see in his mind what the person is doing at that moment for 2D6+6 seconds. The image appears as if the character were looking down through a skylight. He sees only a glimpse of things and may not remember all details. Likewise, he may not see other people outside his line of vision, because the focus is a particular person, not the entire room. If the target is moving. walking, or driving, the remote viewer will know this and follow along for a few seconds, although he may not have a clear idea of his surroundings, but enough of an impression to recognize it if he sees it personally. 
    The character may also Remote View a specific place such as a small to medium room, a corner in a playground or field, a specific entrance to a building, a particular section of an alley, etc., but not an entire house, office building, stadium, street, etc. As before, he must have a photograph, video or frame of film to focus upon. For 2D6+6 seconds, the psychic will see whatever occurs in that small area of that particular place. 
    In the alternative, the psychic can use Remote Viewing to catch glimpses/images that tell something about the subject of the viewing. In this instance, he must have 2-4 specific questions, such as, "is so and so alive .. .'' Then the image of the character smiling as he walks through the area appears, or flashes of a brutal attack, blood, and a falling body (indicating death), and so on, appear for an instant in answer to his query. In either case, the psychic cannot look at the same person or place via Remote Viewing again for another 24 hours.`;
    }
}

module.exports = RemoteViewing;