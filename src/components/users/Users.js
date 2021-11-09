import React, { Component } from 'react'
import axios from 'axios'
import User from './user/User'
import SearchUser from './SearchUser'

export class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[
                {
                    login: "mojombo",
                    id: 1,
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo",
                    repos_url: "https://api.github.com/users/mojombo/repos",

                 },
                 {
                    login: "dodood",
                    id: 2,
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/mojombo",
                    repos_url: "https://api.github.com/users/mojombo/repos",

                 },
                 {
                    login: "bnonbo",
                    id: 3,
                    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                    html_url: "https://github.com/mojombo",
                    repos_url: "https://api.github.com/users/mojombo/repos",

                 },
                
             ]
        }
    }

    // start getUsers
    getUsers = () =>{

        axios.get('https://api.github.com/users')
        .then(response => {
            this.setState({users:response.data})
        })
    }
    // End getUsers

    componentDidMount = () =>{

        this.getUsers();
    }
    

    searchFromGit = (data) =>{
       
        if( data !== ' '){
            axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(response => {
                this.setState({
                    users:response.data.items
                })

            })
        }
    }

    componentDidApdate =() =>{
        this.searchFromGit();
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                    <SearchUser getUserSearch={this.searchFromGit} />

                    </div>
                </div>
            <div className="row">
                {this.state.users.map((item) => (
                    <div key={item.id} className="col-md-4 mt-3">
                        <User user={item}  />
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default Users;
