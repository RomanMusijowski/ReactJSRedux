import {eventConstant} from "../../constans/eventConstant";
import _ from 'lodash';
import {authConstants} from "../../constans/authConstans";
import {userConstants} from "../../constans/userConstans";

const INITIAL_STATE = {

};

const eventReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case eventConstant.FETCH_LIST_OF_FRIENDS_EVENTS_SUCCESS:
            const newEvents = _.mapKeys(action.payload.data, 'id');
            return {
                ...state,
                ...newEvents
            };
        case userConstants.FETCH_INVITED_EVENTS_SUCCESS:
            const newEventsFromInvitesList = _.mapKeys(action.payload.data, 'id');
            return {
                ...state,
                ...newEventsFromInvitesList
            };
        case authConstants.LOGUOT:
            return { }
        default:
            return state
    }
};

export default eventReducer