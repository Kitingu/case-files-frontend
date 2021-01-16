import { LOGIN_SUCCESS, ERROR } from '../../actionTypes/index';
import apiCall from '../../../utils/api';
import { storeToken } from '../../../utils/authHelper';
import { setError, setSpinner } from '../shared';

export const getData = (data) => async (dispatch) => {
  try {
    setSpinner(true, dispatch);
    const token = localStorage.getItem('auth_access_token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await apiCall.get(
      'https://app.justicenetworksea.org/api/v1/cases',
      config
    );

    storeToken(res.data.data['x-access-token']);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
    setSpinner(false, dispatch);
  } catch (error) {
    setError(error.response, dispatch);
    setSpinner(false, dispatch);
  }
};
