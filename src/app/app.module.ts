import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TodosComponent } from './components/todos/todos.component';
import { AddTodosComponent } from './components/add-todos/add-todos.component';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './Store/Reducers/todos.reducers';
import { TodoEffect } from './Store/Effects/todos.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LetDirective } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { loaderReducer } from './loaderState/loader.reducer';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodosComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({todo:todoReducer,loader:loaderReducer}),
    EffectsModule.forRoot([TodoEffect]),
    StoreDevtoolsModule.instrument({logOnly:isDevMode()}),
    LetDirective,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
