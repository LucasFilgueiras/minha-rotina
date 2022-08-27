import axios from "axios";

const baseUrl = "https://minha-rotina.herokuapp.com";

class UsersRepository {
  constructor(requester=axios) {
    this._requester = requester;
  }

  async create(userParams) {
    try {
      await this._requester.post(baseUrl + "/users", userParams);
      console.log(userParams);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signIn({email, password}) {
    try {
      const response = await this._requester.post(baseUrl + "/users/sign_in", {email, password});
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UsersRepository;