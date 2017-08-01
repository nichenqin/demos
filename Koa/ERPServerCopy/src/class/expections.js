class AuthError extends Error {
  constructor() {
    super("AuthError: 没有操作权限");
    this.status = 401;
  }
}

class ForbiddenError extends Error {
  constructor(reason = "未知原因") {
    super(`操作被拒绝：${reason}`);
    this.status = 403;
  }
}

module.exports = { AuthError, ForbiddenError };
