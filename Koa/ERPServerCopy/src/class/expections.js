class AuthError extends Error {
  constructor() {
    super("AuthError: 没有操作权限");
    this.status = 401;
  }
}

module.exports = { AuthError };
