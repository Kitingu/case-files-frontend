import {REGISTER_SUCCESS} from '../../actionTypes';

const initialState ={
    data:null,
    error:null,
    status:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: action.user,
        status: 'success',
      };
    default:
      return {
        ...state,
      };
  }
};