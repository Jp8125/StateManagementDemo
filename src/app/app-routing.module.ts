import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodosComponent } from './components/add-todos/add-todos.component';

const routes: Routes = [
  {path:'',redirectTo:'/add',pathMatch:'full'},
  {path:'todo',component:TodosComponent},
  {path:'add',component:AddTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
