import * as mess from '../constants/messages';
import { CHANGE_NOTIFY } from '../constants/actionTypes';
const initialState = mess.MSG_INTRO;
// tạo reducer -> notify
const notify =(state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_NOTIFY:
            state = action.content;
            return state;
        default:
            return state;
    }
}
export default notify;