import React, { Component } from 'react'

 class SearchUser extends Component {
     state ={
         search:'',
     };

     sendUserToParent = (event) =>{
         event.preventDefault();
         this.props.getUserSearch(this.state.search);
         //console.log('send user to parent');
     }

     handelForm = (event) =>{
        const searchValue = event.target.value;
        this.setState({search:searchValue})
     }
    render() {
        return (
             
                <form onSubmit={this.sendUserToParent}> 
               <div class="form-group">
                 <input onChange={this.handelForm} id="search" type="text" class="form-control" placeholder="Search User ...."/>
               </div>

               <button  className="btn btn-danger btn-block col-12 mt-2">Searcch</button>
               <h1>{this.state.search}</h1>
               </form>
                   
        )
    }
}
export default SearchUser;