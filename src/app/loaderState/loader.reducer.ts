import { createReducer, on } from "@ngrx/store"
import { changeStatus } from "./loader.action"
import { LoaderModel } from "../models/loader-model"

const initstate:LoaderModel={
    showloader:false
}
export const loaderReducer=createReducer(
    initstate,
    on(changeStatus,(state,action)=>({...state,showloader:action.status}))
)