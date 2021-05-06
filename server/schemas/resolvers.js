// import models
const { User, Character } = require('../models');

// error handling
const { AuthenticationError } = require('apollo-server-express');

const GraphQLJSON = require('graphql-type-json');

// import the token function from utils
const { signToken } = require('../utils/auth');

// just a simple object called resolvers with a Query and Mutation nested object that holds a series of methods. These methods get
// the same name of the query or mutation they are resolvers for. We don't have to worry about error handling here
// because Apollo can infer if something goes wrong and will respond for us.
const resolvers = {
    JSON: GraphQLJSON,

    Query: {
        characters: async (parent, {username}) => {
            const params = username ? {username} : {};
            // We then pass that object, with or without any data in it, to our .find() method. If there's data, it'll
            // perform a lookup by a specific username. If there's not, it'll simply return every character.
            return Character.find(params).sort({createdAt: -1});
        },
        // get a character by _id
        character: async (parent, {_id}) => {
            return Character.findOne({_id});
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('characters');
        },
        // get a user by username
        user: async (parent, {username}) => {
            return User.findOne({username})
                .select('-__v -password')
                .populate('friends')
                .populate('characters');
        },

        // read request header for jwt
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('friends')
                    .populate('characters');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        // creates a user and issues them a token
        addUser: async (parent, args) => {
            const user = await User.create(args);
            // create the token
            const token = signToken(user);

            return { token, user };
        },
        // verifies user exits and issues them a token
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            // create the token
            const token = signToken(user);
            return { token, user };
        },
        // create a character
        addCharacter: async (parent, args, context) => {
            if (context.user) {
                const character = await Character.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { characters: character._id } },
                    //  without the { new: true } flag  Mongo would return the original document instead of the updated document.
                    { new: true }
                );

                return character;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        // update character
        updateCharacter: async (parent, { characterId, characterData }) => {
            const character = await Character.findByIdAndUpdate(characterId,{characterData:characterData}, {new: true});
            return character;
        },
        // remove character
        removeCharacter: async (parent, { characterId }) => {
            const character = await Character.findByIdAndDelete(characterId);
            return character;
        },
        // add a friend
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    // A user can't be friends with the same person twice, though, hence why we're using the $addToSet
                    // operator instead of $push to prevent duplicate entries.
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;