import { buildSchema } from "graphql";

export default buildSchema(`
    type Post {
        _id: ID!
        title: String!
        description: String!
        author: String!
        created_at: String!
        updated_at: String!
    }
    type PostData {
        posts: [Post!]!
    }
    input PostInputData {
        title: String!
        description: String!
        author: String!
    }
    input PostInputDataUpdate {
        title: String
        description: String
        author: String
    }
    type RootQuery {
        getPosts: PostData!
        getPost(_id: ID!): Post
    }
    type RootMutation {
        createPost(postInput: PostInputData): Post!
        updatePost(_id: ID, postInputUpdate: PostInputDataUpdate): Post!
        deletePost(_id: ID): Post!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)
