export const userType = `
    type User {
        _id: ID!
        first_name: String!
        last_name: String!
        email: String!
        sex: String!
        posts: [Post]
        created_at: String!
        updated_at: String!
    }
    type UserData {
        users: [User!]!
    }
    input UserInputData {
        first_name: String!
        last_name: String!
        email: String!
        sex: Boolean!
    }
    input UserInputDataUpdate {
        first_name: String
        last_name: String
        email: String
        sex: Boolean
    }
`;

export const userQuery = `
    getUsers: UserData!
    getUser(_id: ID!): User
`;

export const userMutation = `
    createUser(userInput: UserInputData): User!
    updateUser(_id: ID, userInputUpdate: UserInputDataUpdate): User!
    deleteUser(_id: ID): User!
`;