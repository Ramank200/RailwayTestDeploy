const CreateUserQuery = () => {
  const query = `INSERT INTO adishilp_user (user_id,firstname,lastname,is_active,region) values ($1,$2,$3,$4,$5);`;

  return query;
};

module.exports = {
  CreateUserQuery,
};
