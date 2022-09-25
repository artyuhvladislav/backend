import Post from './Post.js';

class Service {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const AllPosts = await Post.find();
    return AllPosts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id was not provided');
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('id was not provided');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('id was not provided');
    }
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new Service();
