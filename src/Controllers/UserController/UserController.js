const db = require("../../../Database/db");
const {
  CreateUserQuery,
} = require("../../../Database/Queries/UserQueries/UserQuery");

const CreateUser = async (req, res) => {
  const { user_id, firstName, lastName, region } = req.body;

  const CreateUseInTableQuery = CreateUserQuery();

  try {
    let CreatedUser = await db.query(
      CreateUseInTableQuery,
      [user_id, firstName, lastName, true, region],
      (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(res.rows);
        }
      }
    );
  } catch (error) {}
};

module.exports = { CreateUser };
