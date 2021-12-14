import { Action, createReducer, on, props } from "@ngrx/store";
import { add_item, remove_item } from "./item.actions";
import { model } from "./model";



const initialState = new model("", "", Date.now(), [], "", "", "")

const _itemReducer = createReducer(
    initialState,
    on(add_item, (store, {item})=> store = item),
    on(remove_item, (store) => store = new model("", "", Date.now(), [], "", "", ""))
)


export const itemReducer = ( state:any, action: Action) =>{
    return _itemReducer(state, action)
}