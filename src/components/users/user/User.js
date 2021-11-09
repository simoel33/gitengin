import React, { Component } from 'react'

export class User extends Component {
    render() {
        const {avatar_url,login, html_url , repos_url} = this.props.user;
        return (
            <div>
                 <div class="card">
                        <img class="card-img-top" src={avatar_url} alt=""/>
                        <div class="card-body">
                            <h4 class="card-title">{login}</h4>
                            <p class="card-text">
                            <a href={html_url} className="btn btn-success"> Show More </a> 
                            <a href={repos_url} className="btn btn-warning"> Repositories</a>
                            </p>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default User;
