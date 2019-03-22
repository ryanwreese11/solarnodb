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
      zip: ''
    }

  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let customer = this.state

    this.props.createCustomer(customer)
  }

  




  render() {
    return (
      <div className="theInputs">
        <div className="inputFields">
          <div onChange={this.handleChange} >
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
        </div>
          <button onClick={this.handleClick}>Create Customer</button>
        <div>
        </div>
        {this.props.customers.map(item => {
            return <Customer key={item.id} customer={item}
            updateCustomer={this.props.updateCustomer}/>
          })}
      </div>
    )
  }
}

export default Customers
