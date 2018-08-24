import React from 'react';
import { ROLE } from '../utils/config';
/*
 * The reducer takes care of state changes in our app through actions
 */

import {
    SET_AUTH,
    SENDING_REQUEST,
    REQUEST_ERROR,
    CLEAR_ERROR
} from '../actions/constants'
import auth from '../utils/auth';

// The initial application state
let initialState = {
  error: null,
  loading: false,
  loggedIn: auth.loggedIn(),
  username: localStorage.getItem('username'),
  role: localStorage.getItem('role'),
  organization_name: localStorage.getItem('organization_name')
}
  
  // Takes care of changing the application state
  function authReducer (state = initialState, action) {
    switch (action.type) {
      case SET_AUTH:
        return {...state, loggedIn: action.newAuthState, username: action.username, role: action.role, organization_name: action.organization_name}
      case SENDING_REQUEST:
        return {...state, loading: action.sending}
      case REQUEST_ERROR:
        return {...state, error: action.error}
      case CLEAR_ERROR:
        return {...state, error: null}
      default:
        return state
    }
  }
export default authReducer;