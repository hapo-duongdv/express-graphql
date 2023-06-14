import User from "../models/User.js";

export default {
    /**
     * CREATE USER
     * @param { first_name, last_name, email, sex } UserInput
     * @returns User
     * 
     * @mutation
     * mutation {
     *  createUser(userInput: {first_name: "Quan", last_name: "Nguyen", email: "quan@gmail.com", sex: "true"}) {
     *      _id,
     *      first_name
     *      last_name
     *      email
     *      sex
     *      posts
     *      created_at
     *      updated_at
     *  }
     * }
     */
    createUser: async ({ userInput }) => {
        const post = new User({
            first_name: userInput.first_name,
            last_name: userInput.last_name,
            email: userInput.email,
            sex: userInput.sex,
        });

        const createUser = await post.save();

        return {
            ...createUser._doc,
            _id: createUser?._id.toString(),
        };
    },

    /**
     * READ: GET USERS
     * @returns User {_id, title, description, author, created_at, updated_at}
     */
    getUsers: async () => {
        const users = await User.find();
        return {
            users: users.map(p => {
                return {
                    ...p._doc,
                    _id: p._id.toString(),
                };
            })
        };
    },

    /**
     * READ: GET USER
     * @param _id
     * @returns User {id, title, description, author, created_at, updated_at}
     */
    getUser: async (_id) => {
        const user = await User.findById(_id);

        return {
            ...user._doc,
            _id: user._id.toString()
        };
    },

    /**
     * UPDATE USER
     * @param {id}, { first_name, last_name, email, sex } ID, postInputUpdate
     * @returns User
     * 
     * @mutation {
     *  updateUser(_id: "647eccad5def8b021291a2cd", userInputUpdate: {first_name: "Quan", last_name: "Nguyen", email: "quan@gmail.com", sex: "true"}) {
     *      _id,
     *      first_name
     *      last_name
     *      email
     *      sex
     *      posts
     *      created_at
     *      updated_at
     * }
     * }
     */
    updateUser: async ({_id, userInputUpdate}) => {
        const user = await User.findById(_id);

        if (!user) {
            throw new Error('User Not found!');
        }

        if (userInputUpdate?.first_name) user.first_name = userInputUpdate?.title;
        if (userInputUpdate?.last_name) user.last_name = userInputUpdate?.last_name;
        if (userInputUpdate?.email) user.email = userInputUpdate?.email;
        if (userInputUpdate?.sex) user.sex = userInputUpdate?.sex;

        const updateUser = await user.save();

        return {
            ...updateUser._doc,
            _id: updateUser?._id.toString(),
        };
    },

    /**
     * DELETE USER
     * @param {id} ID!
     * @returns User
     * 
     * @mutation
     *  deleteUser ({_id: "647eccad5def8b021291a2cd"}) {
     *      _id,
     *      first_name
     *      last_name
     *      email
     *      sex
     *      posts
     *      created_at
     *      updated_at
     *  }
     */
    deleteUser: async ({_id}) => {
        const user = await User.findById(_id);

        if (!user) {
            throw new Error('User Not found!');
        }

        await user.deleteOne();

        return {
            ...user._doc,
            _id: user?._id.toString(),
        };
    }
}
