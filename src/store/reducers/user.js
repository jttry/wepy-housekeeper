import {handleActions} from 'redux-actions';
import {GET_OPENID} from '../types/user';

export default handleActions({
    [GET_OPENID] (state, action) {
        const openid = action.payload;
        return {
            ...state,
            openid
        }
    }
}, {
    openid: ''
});