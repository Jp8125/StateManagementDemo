import { createAction, props } from "@ngrx/store";
import { AddTodo } from "src/app/models/add-todo";
import { Todo } from "src/app/models/todo";

export const loadAllTodo=createAction("loadAllTodos");
export const loadAllTodoSuccess=createAction("loadAllTodoSuccess",props<{data:Todo[]}>())
export const addTodo=createAction("addTodo",props<{todo:AddTodo}>())
export const addTodoSuccess=createAction("addTodoSuccess",props<{data:Todo}>())
export const deleteTodo=createAction("deleteTodo",props<{id:number}>())
export const deleteTodoSuccess=createAction("deleteTodoSuccess",props<{id:number}>())
export const updateTodo=createAction("updateTodo",props<{id:number,data:Todo}>())
export const updateTodoSuccess=createAction("updateTodoSuccess",props<{data:Todo}>())
export const getSingleTodo=createAction("getSingleTodo",props<{id:number}>())
export const getSingleTodoSuccess=createAction("getSingleTodoSuccess",props<{todo:Todo}>())
