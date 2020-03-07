import { action, observable } from 'mobx';
import { user } from '../Model/User';
import UserService from '../Service/UserService'

class UserStore {

  @observable users:user[] = [];

  constructor(private userService: UserService) {

  }

  @action
  async getAllUsers() {
    const response = await this.userService.getAllUsers();
    this.setUsers(response.data);
  }

  @action
  setUsers(users: user[]) {
    console.log('users', users)
    this.users = users;
  }


}

export default UserStore;