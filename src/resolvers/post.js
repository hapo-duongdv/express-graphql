import Post from "../models/Posts.js";

export default {
    /**
     * CREATE POST
     * @param { title, description, author } PostInput
     * @returns Post
     * 
     * @mutation
     * mutation {
     *  createPost(postInput: {title: "bai post 1", description: "description 1", author: "Chung Nguyen"}) {
     *      _id,
     *      title,
     *      description,
     *      author,
     *      created_at,
     *      updated_at
     *  }
     * }
     */
    createPost: async ({ postInput }) => {
        const post = new Post({
            title: postInput.title,
            description: postInput.description,
            author: postInput.author
        });

        const createPost = await post.save();

        return {
            ...createPost._doc,
            _id: createPost?._id.toString(),
        };
    },

    /**
     * READ: GET POSTS
     * @returns Post {_id, title, description, author, created_at, updated_at}
     */
    getPosts: async () => {
        const posts = await Post.find();
        return {
            posts: posts.map(p => {
                return {
                    ...p._doc,
                    _id: p._id.toString(),
                };
            })
        };
    },

    /**
     * READ: GET POST
     * @param _id
     * @returns Post {id, title, description, author, created_at, updated_at}
     */
    getPost: async (_id) => {
        const post = await Post.findById(_id);

        return {
            ...post._doc,
            _id: post._id.toString()
        };
    },

    /**
     * UPDATE POST
     * @param {id}, {title, description, author} ID, postInputUpdate
     * @returns Post
     * 
     * @mutation {
     *  updatePost(_id: "647eccad5def8b021291a2cd", postInputUpdate: {title: "bai post 1", description: "description 1", author: "Chung Nguyen"}) {
     *      _id
     *      title
     *      description
     *      author
     *      created_at
     *      updated_at
     * }
     * }
     */
    updatePost: async ({_id, postInputUpdate}) => {
        const post = await Post.findById(_id);

        if (!post) {
            throw new Error('Post Not found!');
        }

        if (postInputUpdate?.title) post.title = postInputUpdate?.title;
        if (postInputUpdate?.description) post.description = postInputUpdate?.description;
        if (postInputUpdate?.author) post.author = postInputUpdate?.author;

        const updatePost = await post.save();

        return {
            ...updatePost._doc,
            _id: updatePost?._id.toString(),
        };
    },

    /**
     * DELETE POST
     * @param {id} ID!
     * @returns Post
     * 
     * @mutation
     *  deletePost ({_id: "647eccad5def8b021291a2cd"}) {
     *      _id
     *      title
     *      description
     *      author
     *      created_at
     *      updated_at
     *  }
     */
    deletePost: async ({_id}) => {
        const post = await Post.findById(_id);

        if (!post) {
            throw new Error('Post Not found!');
        }

        await post.deleteOne();

        return {
            ...post._doc,
            _id: post?._id.toString(),
        };
    }
}
