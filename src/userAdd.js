import React from 'react';

class AddUserForm extends React.Component {
    render() {
        return (
            <form onSubmit = {this.props.handleSubmit} >
                <input type="text" onChange = {this.props.handleChange} placeholder=" "/>
                <input type="submit" value = 'Add'/>
            </form>)
    }
}

export default AddUserForm
