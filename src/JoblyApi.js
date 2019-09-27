import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem('token');
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U";

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async searchCompanies(searchTerm) {
    let res = await this.request(`companies?search=${searchTerm}`);
    return res.companies;
  }

  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  static async getAllJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async searchJobs(searchTerm) {
    let res = await this.request(`jobs?search=${searchTerm}`);
    return res.jobs;
  }

  static async getProfile(username) {
    let res = await this.request(`users/${username}`);
    return res.username;
  }

  static async getLogin(data) {
    let res = await this.request(`login`, data, "post");
    return res.token;
  }

  static async createUser(data) {
    let res = await this.request(`users`, data, "POST")
    return res.token;
  }
}

export default JoblyApi;
