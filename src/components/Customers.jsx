import React, { Component } from 'react'

import Customer from './Customer'

export class Customers extends Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      currentUsage: '',
      systemSize: '',
      ppw: '',
      status: "New",
      edit: false

    }

  }

  handleNewClick = () => {
    this.setState({
      edit: true
    })
  }

  handleCancelClick = () => {
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

  handleClick = () => {
    let customer = this.state
    this.setState({
      edit: false
    })

    this.props.createCustomer(customer)

  }






  render() {


    
    return this.state.edit ? (
      <div>
        <div className="theInputs">
          <div className="inputFields">
            <div>
              <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
              <input type="text" name="phoneNumber" placeholder="Phone" onChange={this.handleChange} />
              <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
            </div>
            <div>
              <input type="text" name="street" placeholder="Street" onChange={this.handleChange} />
              <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
              <input type="text" name="state" placeholder="State" onChange={this.handleChange} />
              <input type="text" name="zip" placeholder="Zip code" onChange={this.handleChange} />
            </div>
            <div>
              <input type="text" name="currentUsage" placeholder="Electric Usage" onChange={this.handleChange} />
            </div>
          </div>
          </div>
          <button onClick={this.handleClick}>Create Customer</button>
          <button style={{ margin: "2px" }} onClick={this.handleCancelClick}>Cancel</button>
         

        {this.props.customers.map(item => {
          return <Customer key={item.id} customer={item}
            updateCustomer={this.props.updateCustomer}
            deleteCustomer={this.props.deleteCustomer} />
           
        })}
      </div>
    ) : (
        <div>
          <button className="newCustomer"  onClick={this.handleNewClick}>New Customer</button>
          {this.props.customers.map(item => {
            return <Customer  key={item.id} customer={item}
              updateCustomer={this.props.updateCustomer}
              deleteCustomer={this.props.deleteCustomer}
              />
          })}

        </div>
      )
  }
}

export default Customers
