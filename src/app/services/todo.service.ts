import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { AddTodo } from '../models/add-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string='https://localhost:7219/api/Todos'
  constructor(private http:HttpClient) { }
  getTodos(){
    return this.http.get<Array<Todo>>(this.url)
  }
  getTodo(id:number){
    return this.http.get<Todo>(this.url+`/${id}`)
  }
  postTodo(data:AddTodo){
     return this.http.post<Todo>(this.url,data)
  }
  updateTodo(id:number,data:Todo){
   return this.http.put<Todo>(this.url+`/${id}`,data)
  }
  deleteTodo(id:number){
    return this.http.delete<{id:number}>(this.url+`/${id}`)
  }
}
