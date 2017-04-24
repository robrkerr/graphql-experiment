
export const schema = `
  type Speaker {
    id: String! # the ! means that every author object _must_ have an id
    name: String
    submissions: [Submission] # the list of Submissions made by this speaker
  }
  type Submission {
    id: String!
    name: String
    speaker: Speaker
  }
  # the schema allows the following query:
  type Query {
    submissions: [Submission]
    speakers: [Speaker]
    speaker(id: String!): Speaker
  }
  # this schema allows the following mutation:
  type Mutation {
    createSpeaker (
      name: String!
    ): Speaker
    createSubmission (
      name: String!
      speaker_id: String!
    ): Submission
  }
`
