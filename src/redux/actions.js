// TODO: Complete the actions
import axios from 'axios';

export const getImages = () => async dispatch => {
    const response = await (axios.get('https://picsum.photos/v2/list'));
    dispatch({type: 'GET_IMAGES', payload: response.data})
};

export const setSelectedImage = (Images) => {
    return {
        type: 'SET_SELECTED_IMAGE',
        payload: Images
    };
};
