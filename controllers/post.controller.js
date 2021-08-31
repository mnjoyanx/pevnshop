const posts = require("../models");
const Posts = posts.Posts;

exports.create = async (req, res) => {
  console.log(req.body);
  const post = await Posts.create(req.body);
  return res.status(201).json({ data: post });
};
