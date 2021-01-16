import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '../pages/index.vue';
import NotFoundPage from '../pages/404.vue'

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: IndexPage
    },
    {
        path: "/404",
        component: NotFoundPage
    }
];

export function createRouter() {
    return new Router({
        mode: 'history',
        base: "/",
        routes
    });
};
