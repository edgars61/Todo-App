import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
form{
  margin:auto;
  text-align:center;
  margin-top: 2%;
}
@media only screen and (max-width: 600px) {
  form {
    margin-top:4%;
  }
}
`;

class App extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

render() {
 return(
   <Styles>
   <div className="App">
   <form id="contact-form" className="col-9 col-md-6 col-lg-4 col-xl-4" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control"  id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </Styles>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(event) {
}
}

export default App;