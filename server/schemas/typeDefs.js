// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    scalar JSON
    
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        friends: [User]
        characterCount: Int
        characters: [Character]
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Character {
        _id: ID
        createdAt: String
        characterData: JSON
        username: String
    }
    
    
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        characters(username: String): [Character]
        character(_id: ID!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addFriend(friendId: ID!): User
        addCharacter(characterData: JSON): Character
        updateCharacter(characterId: ID!, characterData: JSON): Character
        removeCharacter(characterId: ID!): Character
}
`;

// export the typeDefs
module.exports = typeDefs;