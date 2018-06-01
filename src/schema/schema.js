import axios from "axios";
import { GraphQLObjectType, GraphQLString,GraphQLInt,
         GraphQLSchema,GraphQLList,GraphQLNonNull  } from "graphql";

import ToDoMongo from '../models/customer';

var CustomerType = new GraphQLObjectType({
    name: 'todo',
    fields: () => ({
        id: { type:GraphQLString },
        name: { type:GraphQLString },
        age: { type:GraphQLInt }
    })
  });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      customers: {
        type: new GraphQLList(CustomerType),
        resolve: (root, {id}, ...args ) => {
          // var projections = getProjection(fieldASTs);

          var foundItems = new Promise((resolve, reject) => {
              ToDoMongo.find({},(err, todos) => {
                  err ? reject(err) : resolve(todos)
              })
          }
        )

          return foundItems
        }
      },
      customer: {
        type: new GraphQLList(CustomerType),
        args: {
          id: {
            type: GraphQLInt
          },
          // name: {
          //   type: new GraphQLNonNull(GraphQLString)
          // },
          // age:{
          //   type:new GraphQLNonNull(GraphQLInt)
          // }

        },
        resolve: (root, {id}, ...args ) => {
          // var projections = getProjection(fieldASTs);

          var foundItems = new Promise((resolve, reject) => {
              ToDoMongo.find({id},(err, todos) => {
                  err ? reject(err) : resolve(todos)
              })
          })

          return foundItems
        }
      }
    }
  });

  var schema = new GraphQLSchema({
    query: RootQuery
  });
  
  export default schema;

// module.exports = new GraphQLSchema({query:RootQuery,
// mutation
// })