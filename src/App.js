
import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Todos from './containers/Todos'
import styled from 'styled-components';
const Styles = styled.div`
.container{
  margin-top: 5%;
}
`;

class App extends Component {
  render() {
    return (
    <Styles>
      <div className="App">
      
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <Todos/>
          </div>
        </div>
      </div>
      </Styles>
    );
  }
}

export default App;


