import axios from 'axios';
import React, { Component } from 'react';
import User from './user/User';


class UserItem extends Component {

    
    state = {
        user:'hiii'   ,    
    }

    componentWillUnmount = () =>{
      const login = this.props.match.params.login;

      this.setState({user:login})
      
     /* axios.get(`https://api.github.com/users/${login}`)
      .then(response => {this.setState({user:response.data})
     
      } )*/

      
}


    render() {
        const {user} = this.state.user;
        return (
            <div>

               <h1>{this.state.user}</h1>
            </div>
        )
    }
}

export default UserItem;
