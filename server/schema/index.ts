import { AxiosResponse } from 'axios';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLID
} from 'graphql';

import { citysApi } from '../api/citysApi';

const CityType = new GraphQLObjectType({
    name: 'GetCitys',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
    })
});

type test = {
    id: string,
    name: string
}

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        city: {
            type: new GraphQLList(CityType),
            args: { id: { type: GraphQLID } },
            async resolve(params, { id }) {
                const result: AxiosResponse<Array<test>> = await citysApi.getAll();
                const data = result.data.map(({ id, name }) => ({ id, name })).filter(el => id ? el.id == id : true);
                console.log(data)
                return data;
            }
        }
    }
});

export default new GraphQLSchema({ query: Query });