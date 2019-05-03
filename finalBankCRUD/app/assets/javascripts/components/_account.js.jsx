class Account extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let accountnumber = this.accountnumber.value
      let routingnumber = this.routingnumber.value
      let bankaddress = this.bankaddress.value
      let banknickname = this.banknickname.value
      let id = this.props.account.id
      let account = {id: id, accountnumber: accountnumber, routingnumber: routingnumber, bankaddress: bankaddress, banknickname: banknickname}
      this.props.handleUpdate(account)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let accountnumber = this.state.editable ? <input type='text' ref={input => this.accountnumber = input} defaultValue={this.props.account.accountnumber}/>:<h3>{this.props.account.accountnumber}</h3>
    let routingnumber = this.state.editable ? <input type='text' ref={input => this.routingnumber = input} defaultValue={this.props.account.routingnumber}/>:<p>{this.props.account.routingnumber}</p>
    let bankaddress = this.state.editable ? <input type='text' ref={input => this.bankaddress = input} defaultValue={this.props.account.bankaddress}/>:<h3>{this.props.account.bankaddress}</h3>
    let banknickname = this.state.editable ? <input type='text' ref={input => this.banknickname = input} defaultValue={this.props.account.banknickname}/>:<p>{this.props.account.banknickname}</p>
    return(
      <div>
        <h1>{accountnumber}</h1>
        <p>{routingnumber}</p>
        <p>{bankaddress}</p>
        <p>{banknickname}</p>
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.account.id)}>Delete</button>
      </div>
    )
  }
}
