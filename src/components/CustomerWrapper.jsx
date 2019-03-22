import React, { Component } from 'react'
import axios from 'axios'

import Customers from './Customers';
import Header from './Header';
import Footer from './Footer';

export class CustomerWrapper extends Component {
  constructor() {
    super()
    this.state = {
      customers: []
    }
  }

  updateCustomer = customer => {
    axios.put(`/api/customers/${customer.id}`, customer).then(res => {
      this.setState({
        customers: res.data
      })
    }).catch(err => console.log(err))
  }

  createCustomer = customer => {
    axios.post('/api/customers', customer).then(res => {
      this.setState({
        customers: res.data
      })
    }).catch(err => console.log('There was an error creating customer', err))
  }

  componentDidMount() {
    axios.get('/api/customers').then(res => {
      this.setState({
        customers: res.data
      })
    }).catch(err => {
      console.log('we have an issue', err)
    })
  }

  render() {
    console.log(this.state.customers)
    return (
      <div>
        <Header />

        <Customers
          customers={this.state.customers}
          createCustomer={this.createCustomer}
          updateCustomer={this.updateCustomer} />
        <Footer />
      </div>
    )
  }
}

export default CustomerWrapper
