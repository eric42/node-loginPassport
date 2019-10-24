"use strict";

let fs = require("fs");
let path = require("path");
const Sequelize = require("sequelize");

const sequilize = new Sequelize('URI_DATABASE_CREDENTIALS', {native: true});

const db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file){
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })

  .forEach(function(file){
    var model = sequilize.import(path.join(__dirname, file));
    db[modelName] = model;
  });

  Object.Keys(db).forEach(function(modelName){
    if("associate" in db[modelName]){
      db[modelName].associate(db);
    }
  });

  db.sequilize = sequilize;
  db.Sequelize = Sequelize;

  module.exports = db;
  