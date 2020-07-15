import Vue from 'vue'
import Vuex from 'vuex'
import items from './items'
import sections from './sections'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: items,
        sections: sections,
    },
    getters: {
        getItems: state => {
            return state.items
        },
        getSections: state => {
            return state.sections
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})