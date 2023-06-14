import { buildSchema } from "graphql";
import { postMutation, postQuery, postType } from "./post.js";
import { userMutation, userQuery, userType } from "./user.js";
import { uploadMutation, uploadType } from "./upload.js";
export default buildSchema(`
    ${postType}
    ${userType}
    ${uploadType}
    type RootQuery {
        ${postQuery}
        ${userQuery}
    }
    type RootMutation {
        ${postMutation}
        ${userMutation}
        ${uploadMutation}
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)
