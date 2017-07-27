import React from 'react';
import UserList from './userList';
import AddUserForm from './userAdd';

let id = 0;
let addedUser = {};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [] 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleSubmit(event) {  
        event.preventDefault();
        this.state.users.push({id: ++id, value: addedUser});
        this.setState({users: this.state.users});
    }
    handleChange(event) {
        addedUser = event.target.value;
    }
    handleDelete(deletedUser) {
        this.setState({users: this.state.users.filter((user) => {return user != deletedUser})});
    }
    render() {
        return (
            <div>
                <AddUserForm 
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    users = {this.state.users}
                />
                <UserList 
                    handleDelete = {this.handleDelete}
                    users = {this.state.users} 
                />
            </div>
        )
    }
}
export default App