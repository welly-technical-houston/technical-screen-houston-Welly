import {
  GET_IMAGES,
  SET_SELECTED_IMAGE,
  CLEAR_SELECTED_IMAGE
} from "./types";
import { combineReducers} from 'redux';

// TODO: Create reducer logic
const getreducer = (state=[], action) => {
  if(action.type === 'GET_IMAGES') {
    return action.payload;
  }
  return state;
}
const selectedreducer = (selectedImage=null, action) => {
  if (action.type === 'SET_SELECTED_IMAGE') {
    return action.payload;
  }
    return selectedImage;
};
const clearreducer = (selectedImage=null, action) => {
  if (action.type === 'CLEAR_SELECTED_IMAGE') {
    return action.payload;
  }
  return selectedImage;
}

export default combineReducers({
  Img: getreducer,
  selectedImage: selectedreducer,
  clearImage: clearreducer
});

