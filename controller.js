import Post from './Post.js';
import Service from './Service.js';

class Controller {
  async create(req, res) {
    try {
      const post = Service.create(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Service.getAll();
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await Service.getOne(id);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      const updatedPost = await Service.update(post);
      return res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedPost = await Service.delete(id);
      return res.status(200).json(deletedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new Controller();
