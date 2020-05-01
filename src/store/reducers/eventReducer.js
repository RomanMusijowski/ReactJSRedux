import {eventConstant} from "../../constans/eventConstant";
import _ from 'lodash';
import {authConstants} from "../../constans/authConstans";

const INITIAL_STATE = {

};

const eventReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case eventConstant.FETCH_LIST_OF_EVENTS_SUCCESS:
            const newEvents = _.mapKeys(action.payload.data.content, 'id');
            return {...state, ...newEvents};

        // case eventConstant.DELETE_POST:
        //     //action.payload === id of a post to delete
        //     return _.omit(state, action.payload);
        case authConstants.LOGUOT:
            return { }
        default:
            return state
    }
};

export default eventReducer