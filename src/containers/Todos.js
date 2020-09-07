import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
const Styles = styled.div`

.myTodos{
 

}
{
  font-family: 'Kufam', cursive !important;
}
.myTodos{
  background-color:#202020;
  height:100%;
  color:white;

}


.mainHeader{
  margin-bottom:4%;
  margin-top:4%;
  font-size:1.2em;
  text-align:center;
  padding-top:4%;
}
.todoItem{
  font-size:1.2em;
 
}
.actionButtons{
  
    color:white;
    font-size: 20pt;

.deleteButton{


}




`;


class Todos extends Component {
  render() {
    return (
      
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12 todos" style={{marginBottom:"10%" }}>
        <Styles>
        <nav style={{ marginTop: "60px" }}>
          <ol className="nav nav-tabs">
            <li
              className={"nav-link active"+ (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
            >
             All
            </li>
            <li
               className={"nav-link "+ (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
            >
              Completed
            </li>
            <li className={"nav-link  "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
            >
              Active
            </li>
          </ol>
        </nav>
        {this.props.todos.length !== 0 ? (
          <div style={{ marginTop: "60px" }}className="container myTodos">
            <div className="container mainHeader ">
              
                <div className="row">
                <span className="todosHeader col-6 col-sm-6" >Todos</span>
                <span className="actionsHeader col-6 col-sm-6">Actions</span>
                </div>
              
            </div>
            <div class="tbody container">
              {this.props.todos.map(todo => (
                <div class="tr row" key={todo.id}>
                  <span className="td todoItem col-6 col-sm-6"
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none"
                    }}
                  >
                    {todo.text} {todo.completed === true ? "(completed)" : ""}
                  </span>
                  <span className="td actionButtons col-6 col-sm-6">
                  <span title="Delete item" className="fas fa-check-square completeButton col-6 col-sm-6"
                      onClick={() => this.props.toggleTodo(todo.id)}
                      />
                    
                    <span title="Mark item complete" className="fas fa-eraser deleteButton col-6 col-sm-6" onClick={() => this.props.deleteTodo(todo.id)}
                    
                    />
                   
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-danger">
              You have no Todo items
            </div>
          </div>
        )}{" "}
        </Styles>
      </div>
      
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);