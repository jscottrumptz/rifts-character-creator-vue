class Cybernetics {
    constructor(
        any = false,
        rightArm = [],
        leftArm = [],
        rightLeg = [],
        leftLeg = [],
        chest = [],
        head = [],
        eyes = [],
        rightShoulder = [],
        leftShoulder = [],
        rightFoot = [],
        leftFoot = [],
        rightHand = [],
        leftHand = [],
        rightEye = [],
        leftEye = []
    ) {
        this.any = any;
        this.rightArm = rightArm;
        this.leftArm = leftArm;
        this.rightLeg = rightLeg;
        this.leftLeg = leftLeg;
        this.chest = chest;
        this.head = head;
        this.eyes = eyes;
        this.rightShoulder = rightShoulder;
        this.leftShoulder = leftShoulder;
        this.rightFoot = rightFoot;
        this.leftFoot = leftFoot;
        this.rightHand = rightHand;
        this.lefthand = leftHand;
        this.rightEye = rightEye;
        this.leftEye = leftEye;
    }
}

module.exports = Cybernetics;