import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/Store/Actions/todos.actions';
import { TodoState } from 'src/app/models/todo-state.model';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit{
todoForm!:FormGroup
constructor(private fb:FormBuilder,private todoStore:Store<TodoState>){}
ngOnInit(): void {
  this.todoForm=this.fb.group({
    task: ['',[Validators.required]],
    dueTime: ['',[Validators.required]],
    status: ['',[Validators.required]]
  })
}
Add(){
  this.todoStore.dispatch(addTodo({todo:this.todoForm.value}))
  this.todoForm.reset()
}
}
