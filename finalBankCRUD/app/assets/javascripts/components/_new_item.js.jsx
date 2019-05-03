const NewAccount = (props) => {
  let formFields = {}

  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset();}
}>
     <input ref={input => formFields.accountnumber = input} placeholder='Enter account number'/>
     <input ref={input => formFields.routingnumber = input} placeholder='Enter routing number' />
     <input ref={input => formFields.bankaddress = input} placeholder='Enter address' />
     <input ref={input => formFields.banknickname = input} placeholder='Enter nickname' />
     <button>Submit</button>
    </form>
  )
}
