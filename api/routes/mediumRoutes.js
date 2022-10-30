'use strict';
module.exports = (app) => {
  const articleList = require('../controllers/mediumController');
  // article Routes
  app.route('/articles')
    .get(articleList.list_all_articles)
    .post(articleList.create_an_article);
  app.route('/articles/:articleId')
    .get(articleList.read_an_article)
    .put(articleList.update_an_article)
};