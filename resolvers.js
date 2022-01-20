const hotels = require('./hotels.json')

const resolvers = {
    Query: {
        hotels: () => hotels
    },
};

module.exports = resolvers;