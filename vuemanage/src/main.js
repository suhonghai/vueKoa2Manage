/*
 * @Descripttion: 
 * @version: 
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-27 17:49:11
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import store from './store'
import 'element-ui/lib/theme-chalk/display.css';
import {
    Row,
    Col,
    Container,
    Header,
    Main,
    Aside,
    Footer,
    RadioGroup,
    RadioButton,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dropdown,
    Button,
    DropdownMenu,
    DropdownItem,
    Form,
    FormItem,
    Input,
    Message

} from 'element-ui';
Vue.use(Row).use(Col).use(Container).use(Header).use(Main).use(Aside).use(Footer).use(RadioGroup).use(RadioButton).use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Dropdown).use(Button).use(DropdownMenu).use(DropdownItem).use(Form).use(FormItem).use(Input)

Vue.prototype.$tips = ({ message, type, duration }) => {
    Message({
        duration: duration || 2000,
        showClose: true,
        type,
        message
    });
};
Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
