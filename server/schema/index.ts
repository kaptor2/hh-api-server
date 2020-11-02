import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} from 'graphql';

const CityType = new GraphQLObjectType({
    name: 'GetCitys',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        city: {
            type: CityType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {

            }
        }
    }
});

export default new GraphQLSchema({ query: Query });