class ValidationHelper {
  static isLogin() {
    return false;
  }

  static API_Base = "https://cart-api.teamrabbil.com/api";

  static isEmpty(value) {
    return value.length === 0;
  }
}

export default ValidationHelper;
