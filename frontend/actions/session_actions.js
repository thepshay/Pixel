export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

import * as SessionUtilApi from '../util/session_api_util';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}

export const signup = (user) => (dispatch) => {
  return SessionUtilApi.signup(user)
    .then(() => {
      dispatch(receiveCurrentUser(user))
    }, (errors) => {
      dispatch(receiveSessionErrors(errors))
    })
}

export const login = (user) => (dispatch) => {
  return SessionUtilApi.login(user)
    .then(() => {
      dispatch(receiveCurrentUser(user))
    }, (errors) => {
      dispatch(receiveSessionErrors(errors))
    })
}

export const logout = () => (dispatch) => {
  return SessionUtilApi.logout()
    .then(() => {
      dispatch(logoutCurrentUser())
    }, (errors) => {
      dispatch(receiveSessionErrors(errors))
    })
}