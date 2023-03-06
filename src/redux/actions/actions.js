import * as actions from "./actionTypes";
export const setUser = (payload) => {
  return {
    type: actions.SET_USER,
    user: payload,
  };
};
export const setLoading = (status) => ({
  type: actions.SET_LOADING_STATUS,
  status: status,
});
export const getArticles = (payload) => ({
  type: actions.GET_ARTICLES,
  payload: payload,
});
