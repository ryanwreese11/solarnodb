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
        <div className="systemButtons" style={{ margin: '6px' }}>
          <div className="updateInputs">
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
          <div>
            <button onClick={this.handleUpdateClick}>Update Customer</button>
          </div>
        </div>
        <div className="systemButtons" style={{ margin: '6px' }} >
          <div className="updateInputs">
            <input type="text" name="systemSize" placeholder="System Size (watts)" value={this.state.systemSize} onChange={this.handleChange} />
            <input type="text" name="ppw" placeholder="Price Per Watt" value={this.state.ppw} onChange={this.handleChange} />
          </div>
          <button style={{ marginLeft: '5px' }} onClick={this.handleUpdateClick}>Create System</button>
        </div>
        <div className="systemButtons"  >
          <button style={{ marginLeft: '5px' }} onClick={this.handleCancelClick}>Cancel</button>
        </div>
      </div>
    ) : (


        <div className="customers" >
          <div>
            <p><strong><img src="https://image.flaticon.com/icons/png/512/9/9273.png" width="20px" />: {this.props.customer.firstName} {this.props.customer.lastName}</strong></p>
            <p><img src="https://image.flaticon.com/icons/png/512/15/15407.png" width="20px" />: {this.props.customer.phoneNumber}</p>
            <p><img src="http://www.pngmart.com/files/7/E-Mail-PNG-Pic.png" width="20px" />: {this.props.customer.email}</p>
            <p><img src="http://www.stickpng.com/assets/images/588891debc2fc2ef3a1860a2.png" width="20px" />: {this.props.customer.street}, {this.props.customer.city}, {this.props.customer.state} {this.props.customer.zip} </p>
            <p><img src="http://cdn.onlinewebfonts.com/svg/img_564375.png" width="20px" />: {this.props.customer.currentUsage} kWh/annually</p>
            <p><img src="https://www.shareicon.net/data/2015/10/21/659520_sign_512x512.png" width="20px" />: ${Math.floor(this.props.customer.currentUsage * 1 * .13)}/annually</p>
            <p>System Size: {this.props.customer.systemSize} (watts)</p>
            <p>Total System Cost: ${Math.floor(this.props.customer.systemSize * this.props.customer.ppw)}</p>
            <button onClick={this.handleEditClick}>Edit Customer/Create System</button>
          </div>
          <div>
            <div className="disposition">
              <button className="deleteButton" style={{ marginBottom: '5px' }} onClick={this.handleDeleteClick}>x</button>

            </div>
          </div>

        </div>
      )

  }
}

export default Customer
