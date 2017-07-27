import React from 'react'

class User extends React.Component {
     render() {
        return (           
            <li>
                <span>
                    {this.props.user.value}
                </span>
                <span>
                    <button onClick = {this.props.handleDelete.bind(null, this.props.user)}>X</button>
                </span>
                
            </li>
        )
    }   
}
export default User