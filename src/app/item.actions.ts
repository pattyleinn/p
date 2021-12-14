import { createAction, props } from "@ngrx/store";
import { model } from "./model";

export const add_item = createAction('add_item', props<{item: model}>())
export const remove_item = createAction('remove_item')