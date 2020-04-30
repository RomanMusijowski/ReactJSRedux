import createAction from "../action";
import {eventConstant} from "../../constans/eventConstant";


export const eventCreateSuccess = (data) => createAction(eventConstant.CREATE_SUCCESS, data);
export const eventCreateFailure = (error) => createAction(eventConstant.CREATE_FAILURE, error);

export const eventFetchListSuccess = (data) => createAction(eventConstant.FETCH_LIST_OF_EVENTS_SUCCESS, data);
export const eventFetchListFailure = (error) => createAction(eventConstant.FETCH_LIST_OF_EVENTS_FAILURE, error);