import React from 'react'
import User from './user'

class UserList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    { 
                        this.props.users.map((user, thisOne) => {
                            return (<User 
                                key={user.id} 
                                handleDelete = {this.props.handleDelete} 
                                user = {this.props.users[thisOne]}
                                />)
                        })
                    }
                </ul>
            </div>
        )
    }
} 

export default UserList