// TEMP in-memory storage (will be replaced by DB)
const users = [];

exports.findByPhone = (phone) => {
  return users.find((u) => u.phone === phone);
};

exports.createUser = (phone) => {
  const user = {
    id: users.length + 1,
    phone,
    role: "USER",
  };
  users.push(user);
  return user;
};

