import { createAction, props } from "@ngrx/store";

export const changeStatus=createAction('changeStatus',props<{status:boolean}>())
