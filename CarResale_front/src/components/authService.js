import { axios_obj } from '../http-common.js';

class AuthService {

    login(data) {

        return axios_obj.post("/user/login",data)
    }

    signup(data) {
        return axios_obj.post("/user/signup", data)
    }
}

export default new AuthService();