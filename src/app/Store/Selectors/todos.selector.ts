import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "src/app/models/todo-state.model";

export const featureSelector=createFeatureSelector<TodoState>('todo');
export const todoSelector=createSelector(featureSelector,(state)=>state.todos)