import UserStore from '../User/Store/UserStore'
import UserService from '../User/Service/UserService'

export default class RootStore {
  static instance: RootStore;

  userStore = new UserStore(new UserService());
}