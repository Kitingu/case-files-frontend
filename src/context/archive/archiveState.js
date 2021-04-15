import React, { useReducer } from 'react';
import axios from 'axios';
import { GET_BLOGS, SET_BLOG } from '../types';
import ArchiveReducer from './archiveReducer';
import ArchiveContext from './archiveContext';

const ArchiveState = (props) => {
  const initialState = {
    loading: false,
    archives: [],
  };

  const [state, dispatch] = useReducer(ArchiveReducer, initialState);

  const fetchArchives = async () => {
      const token = localStorage.getItem('auth_access_token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
     const response = await axios.get(
       'https://app.justicenetworksea.org/api/v1/cases',
       config
     );
    dispatch({ type: GET_BLOGS, payload: res.data });
  };
  

  return (
    <ArchiveContext.Provider
      value={{
        blogs: state.blogs,
        user: state.user,
        fetchArchives,
        currentBlog: state.currentBlog,
      }}
    >
      {props.children}
    </ArchiveContext.Provider>
  );
};

export default ArchiveState;
