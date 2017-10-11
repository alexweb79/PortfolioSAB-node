const mongoose = require('mongoose');

module.exports.getArticles = function (req, res) {
  res.json('GET')
}

module.exports.createArticles = function (req, res) {
  res.json('POST')
}

module.exports.editArticles = function (req, res) {
  res.json('PUT')
}

module.exports.deleteArticles = function (req, res) {
  res.json('DELETE')
}