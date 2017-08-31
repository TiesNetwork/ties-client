import transform from '../utils/transform';

class Users {
  static toJson(data) {
    const fields = ['address', 'company', 'country', 'keywords', 'name', 'photo', 'position', 'surname'];
    return transform(fields, data);
  }

  static fromJson(data) {
    const fields = ['company', 'country', 'keywords', 'name', 'photo', 'position', 'surname'];
    return transform(fields, data, true);
  }
}

export default Users;
