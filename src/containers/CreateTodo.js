//Component to create a new Todo
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
const Styles = styled.div`

.clearButton{
    margin-top: 1%;
    margin-right: 1%;
}

.submitButton
{margin-top: 1%;
    
}
*{
    font-family: 'Kufam', cursive !important;
  }


`;

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e){
        this.setState({
            todotext: e.target.value
        })
    }

    render(){
        return (
            <Styles>
                  <div className="form-group row">
                    <div className="col-sm-8">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="todo" placeholder="Enter your todo here"/>
                      <button type="button" onClick={ () => this.setState({ todotext: '' }) } className="btn btn-danger clearButton">Clear</button>
                      <button type="button" onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } }  className="btn btn-success submitButton">Add Todo</button>
                    </div>
                  </div>
                  </Styles>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateTodo)