let id = 1
let customers = [
  {
    id: id++,
    firstName: 'Ryan',
    lastName: 'Reese',
    phoneNumber: '801-380-2038',
    email: 'ryan.reese11@gmail.com',
    street: '1028 E 2500 N',
    city: 'Provo',
    state: 'UT',
    zip: '84604',
    currentUsage: '12309',
    ppw: '',
    systemSize: ''
    
  },
  {
    id: id++,
    firstName: 'Josh',
    lastName: 'Anderson',
    phoneNumber: '801-456-7899',
    email: 'janderson@gmail.com',
    street: '1234 Fake St',
    city: 'South Jordan',
    state: 'UT',
    zip: '88888',
    currentUsage: '9899',
    ppw: '',
    systemSize: ''

  },
  {
    id: id++,
    firstName: 'Conlin',
    lastName: 'Gull',
    phoneNumber: '801-456-7899',
    email: 'cgull@gmail.com',
    street: '1234 Fake St',
    city: 'South Jordan',
    state: 'UT',
    zip: '88888',
    currentUsage: '12309',
    ppw: '',
    systemSize: ''

  }
]


module.exports = {
  get: (req, res) => {
    res.send(customers)
  },

  create: (req, res) => {
    const{ firstName, lastName, phoneNumber, email, street, city, state, zip, currentUsage, ppw, systemSize } = req.body
    
    const customer = {
      id: id++,
      firstName,
      lastName,
      phoneNumber,
      email,  
      street,
      city,
      state,
      zip,
      currentUsage,
      ppw,
      systemSize,
     

      
    }
    customers.push(customer)
    res.send(customers)
  },

  update: (req, res) => {
    let index = null
    const { id } = req.params
    const{ firstName, lastName, phoneNumber, email, street, city, state, zip, currentUsage, ppw, systemSize } = req.body
    customers.forEach((customer, i) => {
      if (customer.id === id * 1) {
        index = i
      }
    })
    customers[index] = {
      id: customers[index].id,
      firstName: firstName || customers[index].firstName,
      lastName: lastName || customers[index].lastName,
      phoneNumber: phoneNumber || customers[index].phoneNumber,
      email: email || customers[index].email,
      street: street || customers[index].street,
      city: city || customers[index].city,
      state: state || customers[index].state,
      zip: zip || customers[index].zip,
      currentUsage: currentUsage || customers[index].currentUsage,
      ppw: ppw || customers[index].ppw,
      systemSize: systemSize || customers[index].systemSize,
    }
      res.status(200).send(customers)
  },

  delete: (req, res) => {
    let index = null
    const { id } = req.params
    customers.forEach((customer, i) => {
      if (customer.id === id * 1) {
        index = i
      }
    })
    customers.splice(index, 1)
    res.status(200).send(customers) 
  }
}