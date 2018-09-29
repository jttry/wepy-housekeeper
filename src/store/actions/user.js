import {GET_OPENID} from '../types/user';
import {createAction} from 'redux-actions';
import wepy from 'wepy';

export const getOpenId = createAction(GET_OPENID, async openid => {
    return openid;
});