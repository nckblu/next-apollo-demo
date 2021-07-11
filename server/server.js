const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const myGraphQLSchema = require("./schema");
const app = express();
app.use(cors());
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log("super cool guys coming your way");
  setTimeout(() => {
    console.log(`quick, come see: http://localhost:${port} 😎`);
  }, 1000);
});
