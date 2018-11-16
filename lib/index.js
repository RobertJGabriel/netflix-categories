'use strict';
const objectExists = require('object-key-exists');
const categories = require('./all.json');

function all() {
  return categories;
}

exports.all = all;

function get(id) {
  if (typeof id !== 'string') return false;
  if (objectExists.exists(id) === false) return false;
  if (categories[id] === undefined) return false;
  return categories[id];
}

exports.get = get;
