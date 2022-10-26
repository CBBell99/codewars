function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username);
}
