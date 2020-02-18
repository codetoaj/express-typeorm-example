const UserSchema = require("../schemas/Users");
const { getRepository } = require("typeorm");

class UserService {
  create(userData) {
    const repo = getRepository(UserSchema);
    return repo.save(userData)
  }

  list(query) {
    const repo = getRepository(UserSchema);
    const qb = repo.createQueryBuilder("users");
    
    return qb.getManyAndCount();
  }
}

module.exports = UserService;