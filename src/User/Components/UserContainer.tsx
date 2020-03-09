import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { STORES } from '../../Common/Constants';
import UserStore  from '../../User/Store/UserStore'; 


interface InjectedProps {
  [STORES.USER_STORE]: UserStore
}

@inject('userStore')
@observer
class UserContainer extends Component<InjectedProps> {

  componentDidMount () {
    
    const { userStore } = this.props;
    userStore.getAllUsers();
    
  }

  render () {

    const { userStore } = this.props;
    


    return (
      <div>UserContainer
        {userStore.users.map(user => <div>{user.name}</div>)}
      </div>
      
    )
  }
}

export default UserContainer