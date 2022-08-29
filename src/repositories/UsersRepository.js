import { api } from "../api/api";

class UsersRepository {
  constructor(requester = api) {
    this._requester = requester;
  }

  async create(userParams) {
    try {
      await this._requester.post("/users", userParams);
      console.log(userParams);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signIn({ email, password }) {
    try {
      const response = await this._requester.post("/users/sign_in", {
        email,
        password,
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UsersRepository;
