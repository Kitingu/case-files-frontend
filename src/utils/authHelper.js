import jwt from "jsonwebtoken";

export const decodeToken = (token) =>
  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return false;
    }
    localStorage.setItem("justiceNetwork_user_data", JSON.stringify(decoded));
    return decoded;
  });

export const storeToken = (token) => {
  localStorage.setItem("auth_access_token", token);
  decodeToken(token);
};

export const getToken = () => localStorage.getItem("auth_access_token") || "";

export const isLoggedIn = () => {
  let token = localStorage.getItem("auth_access_token") || "";
  let user = localStorage.getItem("justiceNetwork_user_data") || "";

  return !!token && !!user;
};
