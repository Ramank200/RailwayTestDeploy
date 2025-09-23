const CreateTables = require("../../../Database/CreateTables");

const createTablesInPgSql = (req, res) => {
  console.log(req.headers.SQLPass);
  if (req.headers.SQLPass !== "Allowing") {
    return res.send("Access Denied");
  }
  try {
    CreateTables();
    res.send("Table Created");
  } catch (error) {
    r7;
    console.log("Error in creating Table ", error);
    res.send(error);
  }
};

module.exports = { createTablesInPgSql };
