const CreateUserQuery = () => {
  const query = `INSERT INTO adishilp_user (user_id,firstname,lastname,is_active,region,phone_number) values ($1,$2,$3,$4,$5,$6);`;
  return query;
};

const GetUserDetailsByQuery = () => {
  const query = `select * from adishilp_user where user_id=$1;`;
  return query;
};

const AddAddressOfTheUserQuery = () => {
  const query = `INSERT Into adishilp_address (address_line_1, address_line_2, city, landmark, postal_code, user_id,is_default) values ($1,$2,$3,$4,$5,$6,false);`;
  return query;
};

const MakeAddressDefaultQery = () => {
  const query = `UPDATE adishilp_address set is_default=true where id=$1;`;
};

const RemoveAddressOfTheUserQuery = () => {
  const query = `DELETE from adishilp_address where id=$1;`;
};

const GetUserAddressesFromQuery = () => {
  const query = `SELECT * from adishilp_address where user_id=$1;`;
};

module.exports = {
  CreateUserQuery,
  GetUserDetailsByQuery,
  AddAddressOfTheUserQuery,
  MakeAddressDefaultQery,
  RemoveAddressOfTheUserQuery,
  GetUserAddressesFromQuery,
};
