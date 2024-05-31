import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { deleteTodo, loadAllTodo, updateTodo } from 'src/app/Store/Actions/todos.actions';
import { todoSelector } from 'src/app/Store/Selectors/todos.selector';
import { Todo } from 'src/app/models/todo';
import { TodoState } from 'src/app/models/todo-state.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos$:Observable<Array<Todo>>=of([])
id:number=0
editTodoForm!:FormGroup
constructor(private todoStore:Store<TodoState>,private fb:FormBuilder){}
ngOnInit(): void {
  this.todoStore.dispatch(loadAllTodo())
  this.todos$=this.todoStore.select(todoSelector)
  this.editTodoForm=this.fb.group({
    task: ['',[Validators.required]],
    dueTime: ['',[Validators.required]],
    status: ['',[Validators.required]]
  })
}
EditForm(todo:Todo){
  this.id=todo.todoId
  this.editTodoForm.patchValue({...todo})
}
DeleteTodo(id:number){
  console.log(id);
  this.todoStore.dispatch(deleteTodo({id:id}))
}
UpdateTodo(){
  this.todoStore.dispatch(updateTodo({id:this.id,data:this.editTodoForm.value}))
}
}
