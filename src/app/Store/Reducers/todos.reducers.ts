import { createReducer, on } from "@ngrx/store";
import { TodoState } from "src/app/models/todo-state.model";
import { addTodoSuccess, deleteTodoSuccess, getSingleTodoSuccess, loadAllTodoSuccess, updateTodoSuccess } from "../Actions/todos.actions";

const initState:TodoState={
    todos:[],
    todo:null
}
export const todoReducer=createReducer(
    initState,
    on(loadAllTodoSuccess,(state,{data})=>({...state,todos:[...data]})),
    on(addTodoSuccess, (state, { data }) => {
        return Object.assign({}, state, {
          todos: state.todos.concat(data)
        });
      }),
    on(deleteTodoSuccess,(state,{id})=>({...state,todos:state.todos.filter(t=>t.todoId!=id)})),
    on(updateTodoSuccess,(state,{data})=>({...state,todos:[...state.todos.map(t=>t.todoId==data.todoId?data:t)]})),
    on(getSingleTodoSuccess,(state,{todo})=>({...state,todo:todo}))
)