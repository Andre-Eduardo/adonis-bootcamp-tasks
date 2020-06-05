'use strict';

class ResetPassword {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      token: 'requied',
      password: 'requied|confirmed',
    };
  }
}

module.exports = ResetPassword;
