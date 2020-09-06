//Component to create a new Todo
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import styled from 'styled-components';
const Styles = styled.div`

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
                    <div className="col-sm-10">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="todo" placeholder="Enter your todo here"/>
                      <button type="button" onClick={ () => this.setState({ todotext: '' }) } style={{marginTop: "25px", marginRight: "15px"}} className="btn btn-danger">Clear</button>
                      <button type="button" onClick={() =>{ this.props.addTodo(this.state.todotext); this.setState({ todotext: '' }) } } style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
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