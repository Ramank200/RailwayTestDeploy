const express = require("express");
const { default: CreateTables } = require("../../Database/CreateTables");
const Dbrouter = express.Router();

Dbrouter.get("/createTable", (req, res) => {
  try {
    CreateTables();
  } catch (error) {
    console.log("Erro in creating Table ", error);
  }
});

export default Dbrouter;
