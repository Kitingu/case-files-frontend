// import jwt from "jsonwebtoken";
import JWTDecode from 'jwt-decode';

export const decodeToken = (token) => {
  const decoded = JWTDecode(token);
  console.log(decoded);
   
  localStorage.setItem('justiceNetwork_user_data', JSON.stringify(decoded));
  return decoded;
};

export const storeToken = (token) => {
  localStorage.setItem('auth_access_token', token);
  decodeToken(token);
};

export const getToken = () => localStorage.getItem('auth_access_token') || '';

export const isLoggedIn = () => {
  
  let token = localStorage.getItem('auth_access_token') || '';
  let user = localStorage.getItem('justiceNetwork_user_data') || '';
 

  return !!token && !!user;
};
