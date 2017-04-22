"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var graphql_server_express_1 = require("graphql-server-express");
var graphql_tools_1 = require("graphql-tools");
var schema_1 = require("./schema");
var resolvers_1 = require("./resolvers");
var PORT = 3000;
var app = express();
var executableSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs: schema_1.schema,
    resolvers: resolvers_1.resolvers
});
app.use('/graphql', bodyParser.json(), graphql_server_express_1.graphqlExpress({ schema: executableSchema }));
app.use('/graphiql', graphql_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(PORT);
