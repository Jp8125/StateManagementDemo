import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "src/app/services/todo.service";
import { addTodo, addTodoSuccess, deleteTodo, deleteTodoSuccess, getSingleTodo, getSingleTodoSuccess, loadAllTodo, loadAllTodoSuccess, updateTodo, updateTodoSuccess } from "../Actions/todos.actions";
import { map, mergeMap } from "rxjs";
import { Store } from "@ngrx/store";
import { LoaderModel } from "src/app/models/loader-model";
import { changeStatus } from "src/app/loaderState/loader.action";

@Injectable()
export class TodoEffect {
    constructor(private actions$: Actions, private todoService: TodoService, private loaderStore: Store<LoaderModel>) { }
    loadTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAllTodo),
            mergeMap(() => {
                return this.todoService.getTodos().pipe(
                    map(res => {
                        return loadAllTodoSuccess({ data: res })
                    }
                    )
                )
            }
            )
        )
    })
    addTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addTodo),
            mergeMap(
                (data) => {
                    return this.todoService.postTodo(data.todo).pipe(
                        map((res) => {

                            return addTodoSuccess({ data: res })
                        }
                        )
                    )
                }
            )
        )
    })
    deleteTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteTodo),
            mergeMap((actionData) => {
                return this.todoService.deleteTodo(actionData.id)
                    .pipe(map(res => {
                        return deleteTodoSuccess({ id: res.id })
                    }))
            })
        )
    })
    updateTod$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateTodo),
            mergeMap(actionProps => {
                return this.todoService.updateTodo(actionProps.id, actionProps.data)
                    .pipe(map(res => {
                        return updateTodoSuccess({ data: res })
                    }))
            }
            )
        )
    })
    getsingleTodo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getSingleTodo),
            mergeMap((res) => {
                return this.todoService.getTodo(res.id)
                    .pipe(map(res => {
                        return getSingleTodoSuccess({ todo: res })
                    }
                    ))
            }
            )
        )
    })
}