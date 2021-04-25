import produce from 'immer';
import createdReducer from "./reducerUtils";

const initialState = {
    user: {
        id:"",
        name: "",
        password: "",
        email:"",
    }
}

const users = {
    setId(state, action) {
        state.user.id = action.payload;
    },
    setName(state, action) {
        state.user.name = action.payload;
    },
    setPassword(state, action) {
        state.user.password = action.payload;
    },

    setEmail(state, action) {
        state.user.email = action.payload
    }
};
export default produce((state, action) => createdReducer(state, action, users), initialState);
