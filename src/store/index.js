import { Store } from 'vuex';

const createStore = (state) => {
    return new Store({
        strict: process.env.NODE_ENV !== 'production',
        state
    });
};

export default createStore;