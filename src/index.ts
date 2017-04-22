import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { schema } from './schema'
import { resolvers } from './resolvers'

const PORT: number = 3000

const app = express()

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(PORT)
