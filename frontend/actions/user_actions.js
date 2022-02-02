export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserAPIUTILS from "../util/user_api_utils";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = (userId) => (dispatch) => {
  return UserAPIUTILS.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
}