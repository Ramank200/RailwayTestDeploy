const express = require("express");
const {
  createTablesInPgSql,
} = require("../Controllers/DatabaseDDLControllers/DatabasddlContoller");
const Dbrouter = express.Router();

Dbrouter.get("/createTable", createTablesInPgSql);

module.exports = Dbrouter;
