import { action, observable } from 'mobx';
import { user } from 'User/Model/User';
import UserService from 'User/Service/UserService';
import RootStore from 'Root/RootStore'

class UserStore {

  @observable users:user[] = [];

  constructor(private userService: UserService) {
    
    this.userService = userService;
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