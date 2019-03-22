import React, { Component } from 'react'


export class Customer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.customer.id,
      firstName: props.customer.firstName,
      lastName: props.customer.lastName,
      phoneNumber: props.customer.phoneNumber,
      email: props.customer.email,
      street: props.customer.street,
      city: props.customer.city,
      state: props.customer.state,
      zip: props.customer.zip,
      currentUsage: props.customer.currentUsage,
      edit: false,
      create: false
      
    }
  }

  handleEditClick = () => {
    this.setState({
      edit: true
    })
  }

  handleUpdateClick = () => {
    this.props.updateCustomer(this.state)
    this.setState({
      edit: false
    })
  }

  handleCancelClick = () => {
    this.setState({
      edit: false
    })
  }

  handleDeleteClick = () => {
    this.props.deleteCustomer(this.state.id)
    this.setState({
      edit: false
    })
  }


  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }



  render() {
    return this.state.edit ? (
      <div className="customerUpdate">
        <div className="updateInputs" style={{ margin: '6px' }}>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          <input type="text" name="street" value={this.state.street} onChange={this.handleChange} />
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
          <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange} />
          <input type="text" name="currentUsage" value={this.state.currentUsage} onChange={this.handleChange} />
        </div>
        <div className="updateButtons">
          <button onClick={this.handleUpdateClick}>Update Customer</button>
          <button style={{ marginLeft: '5px'}} onClick={this.handleCancelClick}>Cancel</button>
        </div>
      </div>
    ) : (


        <div className="customers" >
          <div>
            <p><strong>{this.props.customer.firstName} {this.props.customer.lastName}</strong></p>
            <p>{this.props.customer.phoneNumber}</p>
            <p>{this.props.customer.email}</p>
            <p>{this.props.customer.street}, {this.props.customer.city}, {this.props.customer.state} {this.props.customer.zip} </p>
            <p>Current Usage: {this.props.customer.currentUsage}</p>
            <p>Current Annual Bill: ${Math.floor(this.props.customer.currentUsage * 1 * .13)}</p>
            <button onClick={this.handleEditClick}>Edit Customer</button>
            <button style={{ margin: '5px' }}>Create System</button>
          </div>
          <div>
            <div className="disposition">
              <button className="deleteButton" style={{ marginBottom: '5px' }} onClick={this.handleDeleteClick}>X</button>
              <button>Change Disposition</button>
            </div>
          </div>
          
        </div>
      ) 

  }
}

export default Customer
