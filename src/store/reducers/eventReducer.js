import {eventConstant} from "../../constans/eventConstant";
import _ from 'lodash';

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
        default:
            return state
    }
};

export default eventReducer