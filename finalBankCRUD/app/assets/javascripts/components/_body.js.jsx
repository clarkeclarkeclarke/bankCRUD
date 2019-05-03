class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewAccount = this.addNewAccount.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFruit = this.updateAccount.bind(this)
  }

  handleUpdate(account){
    fetch(`http://localhost:3000/api/v1/fruits/${account.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({account: account}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateAccount(account)
      })
  }
  updateAccount(account){
    let newAccounts = this.state.accounts.filter((f) => f.id !== account.id)
    newAccounts.push(account)
    this.setState({
      accounts: newAccounts
    })
  }

  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/accounts/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.deleteAccount(id);
      })
  }

  deleteAccount(id){
    newAccounts = this.state.accounts.filter((account) => account.id !== id)
    this.setState({
      accounts: newAccounts
    })
  }

  handleFormSubmit(accountnumber, routingnumber, bankaddress, banknickname){
    let body = JSON.stringify({account: {accountnumber: accountnumber, routingnumber:   routingnumber, bankaddress: bankaddress, banknickname: banknickname} })
  fetch('http://localhost:3000/api/v1/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((account)=>{
      this.addNewAccount(account)
    })

  }
  addNewAccount(account){
    this.setState({
      accounts: this.state.accounts.concat(account)
    })
  }
  componentDidMount(){
    fetch('/api/v1/accounts.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ accounts: data }) });
  }
  render(){
      return(
        <div>
          <NewAccount handleFormSubmit={this.handleFormSubmit}/>
          <AllAccounts accounts={this.state.accounts} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
        </div>
      )
    }
  }
