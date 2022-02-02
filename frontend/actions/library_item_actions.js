export const RECEIVE_ALL_LIBRARY_ITEMS = 'RECEIVE_ALL_LIBRARY_ITEMS';
export const RECEIVE_LIBRARY_ITEM = 'RECEIVE_LIBRARY_ITEM';
export const RECEIVE_LIBRARY_ERRORS = 'RECEIVE_LIBRARY_ERRORS'

import * as LibraryApiUtil from '../util/library_api_util';

const receiveAllLibraryItems = (libraryItems) => {
  return {
    type: RECEIVE_ALL_LIBRARY_ITEMS,
    libraryItems
  }
}

const receiveLibraryItem = (libraryItem) => {
  return {
    type: RECEIVE_LIBRARY_ITEM, 
    libraryItem
  }
}

const receiveLibraryErrors = (errors) => {
  return {
    type: RECEIVE_LIBRARY_ERRORS,
    errors
  }
}

export const fetchAllLibraryItems = (userId) => (dispatch) => {
  return LibraryApiUtil.fetchAllLibraryItems(userId)
    .then((items) => {
      dispatch(receiveAllLibraryItems(items))
    }, (errors) => {
      dispatch(receiveLibraryErrors(errors.responseJSON))
    })
}

export const createLibraryItem = (item) => (dispatch) => {
  return LibraryApiUtil.postLibraryItem(item)
    .then((payload) => {
      dispatch(receiveLibraryItem(payload))
    }, (errors) => {
      dispatch(receiveLibraryErrors(errors.responseJSON))
    })
}