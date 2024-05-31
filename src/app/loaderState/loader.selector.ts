import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoaderModel } from "../models/loader-model";

export const featureselector=createFeatureSelector<LoaderModel>('loader')
export const loaderSelector=createSelector(featureselector,(state)=>state.showloader)