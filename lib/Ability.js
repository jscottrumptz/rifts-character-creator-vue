class Ability {
    constructor
    (
        name = '',
        description = '',
        type = '',
        known = true,
        display = true
    )
    {
        this.name = name;
        this.description = description;
        this.type = type;
        this.known = known;
        this.display = display;
    }
}

module.exports = Ability;