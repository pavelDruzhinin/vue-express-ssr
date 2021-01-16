import Vue from 'vue';
import Vuex from 'vuex';
import Meta from 'vue-meta'
import App from './App.vue';
import { createRouter } from './router';
import createStore from './store';
import { sync } from 'vuex-router-sync'

import VueCompositionAPI from '@vue/composition-api';

Vue.use(Vuex);
Vue.use(Meta, {
    ssrAppId: 1
});
Vue.use(VueCompositionAPI);

export const createApp = (context) => {
    const router = createRouter();
    const store = createStore(context.state);

    sync(store, router)

    const app = new Vue({
        store,
        router,
        render: h => h(App),
    });

    return { app, router, store };
};