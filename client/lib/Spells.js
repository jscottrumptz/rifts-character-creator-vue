class Spells {
    constructor() {
        // where the character derives its ability (Major, Minor, Racial, or OCC)
        this.ability = 'None';
        // level of psionic power used to determine preqs and other stats (Minor, Major, or Master)
        this.type = 'None'
        // character's known psionics
        this.known = {};
        // has the character made its psionic selections yet
        this.selected = true;
        // total spell selections
        this.total = 0;
        this.levelRequirements = true;

        this.invocation = {
            available: false,
            requiredAmount: 0,
            one: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            two: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            three: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            four: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            five: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            six: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            seven: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            eight: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            nine: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            ten: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            eleven: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            twelve: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            thirteen: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            fourteen: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            fifteen: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            a: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            b: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            legend: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            }
        };
    }
}

module.exports = Spells;