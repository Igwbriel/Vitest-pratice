export function register(users, newUser) {
  if (users.some(user => user.email === newUser.email)) {
    throw new Error('User already exists');
  }
  const user = { id: users.length + 1, ...newUser };
  users.push(user);
  return user;
}
