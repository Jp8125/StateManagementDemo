import { Todo } from "./todo";

export interface TodoState {
    todos:Array<Todo>,
    todo:Todo|null
}
