export const postType = `
    type Post {
        _id: ID!
        title: String!
        description: String!
        author: User
        created_at: String!
        updated_at: String!
    }
    type PostData {
        posts: [Post!]!
    }
    input PostInputData {
        title: String!
        description: String!
        author: ID!
    }
    input PostInputDataUpdate {
        title: String
        description: String
        author: ID
    }
`;

export const postQuery = `
    getPosts: PostData!
    getPost(_id: ID!): Post
`;

export const postMutation = `
    createPost(postInput: PostInputData): Post!
    updatePost(_id: ID, postInputUpdate: PostInputDataUpdate): Post!
    deletePost(_id: ID): Post!
`;
