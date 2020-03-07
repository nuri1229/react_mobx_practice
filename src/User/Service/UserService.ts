import axios from 'axios';

const API_URL: string = 'https://jsonplaceholder.typicode.com/users'

class UserService {
  
  constructor () {

  }

  async getAllUsers(): Promise<any> {
    return axios.get(API_URL)
  }
}

export default UserService;