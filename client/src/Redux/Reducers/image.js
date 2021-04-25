import produce from 'immer';
import createdReducer from './reducerUtils'


const initialState = {
  image: {
    title: "",
    media_type: "",
    url: "",
  }
}
const images = {
  setTitle(state, action) {
    state.image.title = action.payload;
  },
  setUrl(state, action) {
    state.image.url = action.payload;
  },
  setMediaType(state, action) {
    state.image.media_type = action.payload;
  },
};

export default produce((state, action) => createdReducer(state, action, images), initialState);
