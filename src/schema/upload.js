export const uploadType = `
    scalar Upload
    type File {
    filename: String!
    mimetype: String!
    encoding: String!
    }
`;

export const uploadMutation = `
    uploadFile(file: Upload!): File!
`;
