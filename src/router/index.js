/* Router - index.js */

import Vue from 'vue';
import VueRouter from 'vue-router';
import AccountInput from '../components/AccountInput'
import AccountList from '../components/AccountList'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // 주소창의 # 을 만들지 않음
    routes: [
        {
            path: '/',
            redirect: '/list'
        },
        {  
            path: '/list',           // path : url 주소
            name: 'AccountList',
            component: AccountList  // component : url 주소로 갔을 때 표시될 컴포넌트
        },
        {  
            path: '/input',
            name: 'AccountInput',
            component: AccountInput
        }
    ]
})
