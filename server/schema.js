const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql");

const casual = require("casual");

casual.define("superCoolGuy", function () {
  return {
    id: casual.integer((from = 0), (to = 9999)),
    email: casual.email,
    name: casual.full_name,
    favePhrase: casual.catch_phrase,
    hotline: casual.phone,
    companyName: casual.company_name,
    address: casual.address,
  };
});

const allTheSuperCoolGuys = new Array(5000)
  .fill(0)
  .map((v, i) => casual.superCoolGuy);

const resolveData = (args) => {
  const { limit = 21, offset } = args;
  return allTheSuperCoolGuys.slice(offset, offset + limit);
};

const superCoolGuyType = new GraphQLObjectType({
  name: "SuperCoolGuy",
  fields: {
    id: {
      type: GraphQLInt,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    favePhrase: {
      type: GraphQLString,
    },
    hotline: {
      type: GraphQLString,
    },
    companyName: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
  },
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "query",
    fields: {
      superCoolGuys: {
        type: new GraphQLList(superCoolGuyType),
        args: {
          limit: { type: GraphQLInt },
          offset: { type: GraphQLInt },
        },
        resolve: (_, args) => resolveData(args),
      },
    },
  }),
});
