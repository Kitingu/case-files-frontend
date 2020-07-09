import { REGISTER_SUCCESS } from '../../actionTypes';
import { setError, setSpinner } from '../shared';
import axios from 'axios';

  // Register User
  export const addUser = (formData) => async dispatch => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    try {
      setSpinner(true, dispatch);
      const res = await axios.post(
        'https://case-files.herokuapp.com/api/v1/auth/register',
        formData,config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      setSpinner(false, dispatch);
    } catch (error) {
      setError(error.response.data, dispatch);
      setSpinner(false, dispatch);
    }
  };