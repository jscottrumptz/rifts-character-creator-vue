const InvocationOne = require('./InvocationOne');
const InvocationTwo = require('./InvocationTwo');
const InvocationThree = require('./InvocationThree');
const InvocationFour = require('./InvocationFour');
const InvocationFive = require('./InvocationFive');
const InvocationSix = require('./InvocationSix');
/*const InvocationSeven = require('./InvocationSeven');
const InvocationEight = require('./InvocationEight');
const InvocationNine = require('./InvocationNine');
const InvocationTen = require('./InvocationTen');
const InvocationEleven = require('./InvocationEleven');
const InvocationTwelve = require('./InvocationTwelve');
const InvocationThirteen = require('./InvocationThirteen');
const InvocationFourteen = require('./InvocationFourteen');
const InvocationFifteen = require('./InvocationFifteen');*/

class Invocation {
    constructor(
        invocationOne = new InvocationOne,
        invocationTwo = new InvocationTwo,
        invocationThree = new InvocationThree,
        invocationFour = new InvocationFour,
        invocationFive = new InvocationFive,
        invocationSix = new InvocationSix,
/*        invocationSeven = new InvocationSeven,
        invocationEight = new InvocationEight,
        invocationNine = new InvocationNine,
        invocationTen = new InvocationTen,
        invocationEleven = new InvocationEleven,
        invocationTwelve = new InvocationTwelve,
        invocationThirteen = new InvocationThirteen,
        invocationFourteen = new InvocationFourteen,
        invocationFifteen = new InvocationFifteen*/
    ) {
        this.invocationOne = invocationOne;
        this.invocationTwo = invocationTwo;
        this.invocationThree = invocationThree;
        this.invocationFour = invocationFour;
        this.invocationFive = invocationFive;
        this.invocationSix = invocationSix;
/*        this.invocationSeven = invocationSeven;
        this.invocationEight = invocationEight;
        this.invocationNine = invocationNine;
        this.invocationTen = invocationTen;
        this.invocationEleven = invocationEleven;
        this.invocationTwelve = invocationTwelve;
        this.invocationThirteen = invocationThirteen;
        this.invocationFourteen = invocationFourteen;
        this.invocationFifteen = invocationFifteen;*/
    }
}

module.exports = Invocation;