'use strict';
const mongoose = require('mongoose'),
  Article = mongoose.model('Articles');
exports.list_all_articles = (req, res) => {
  Article.find({}, (err, article) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.create_an_article = (req, res) => {
  let new_article = new Article(req.body);
  new_article.save((err, article) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.read_an_article = (req, res) => {
  Article.findById(req.params.ArticleId, (err, article) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};
exports.update_an_article = (req, res) => {
 Article.findOneAndUpdate({_id: req.params.ArticleId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(article);
  });
};