import Vue from 'vue@2.6'
import BootstrapVue from 'bootstrap-vue'
import manageclub from './manageclub'
import router from '.router'
import store from './store'
import { createApp } from 'vue@2.6'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip=false
/*
const manageclub = createApp(manageclub)
*/
new Vue({
    el: '#manageclubpage',
    router,
    components: { manageclub },
    template: '<manageclub/>',
    render: h=>h(manageclub)

}).$mount('#manageclubpage')
