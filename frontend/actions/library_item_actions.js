export const RECEIVE_ALL_LIBRARY_ITEMS = 'RECEIVE_ALL_LIBRARY_ITEMS';
export const RECEIVE_LIBRARY_ITEM = 'RECEIVE_LIBRARY_ITEM';

import * as LibraryApiUtil from '../util/library_api_util';

const receiveAllLibraryItems = (libraryItems) => {
  debugger
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

export const fetchAllLibraryItems = () => (dispatch) => {
  debugger
  return LibraryApiUtil.fetchAllLibraryItems()
    .then((items) => {
      dispatch(receiveAllLibraryItems(items))
    })
}

export const createLibraryItem = (item) => (dispatch) => {
  return LibraryApiUtil.postLibraryItem(item)
    .then((payload) => {
      dispatch(receiveLibraryItem(payload))
    })
}