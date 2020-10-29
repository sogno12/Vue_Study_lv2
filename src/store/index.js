/* Store - index.js */

import Vue from "vue";
import Vuex from "vuex";

import { $getUser } from "../api/index.js"; //api에서 생성된 메소드 가져옴

Vue.use(Vuex);

export const store = new Vuex.Store({
         // 1. state : 여러 컴포넌트에 공유되는 데이터 Vue data
         // 접근: this.$store.state.데이터명 으로 접근가능
         state: {
           num: 1,
           text: "",
           list: [],
           user: null,
         },
         // 2. getters : 연산된 state 값을 접근하는 속성 computed
         //              데이터(state)변경에 사용, but 인자값 넘겨받지못함 -> compute에 등록&사용
         // 접근: this.$store.getters.메소드명 으로 접근가능
         getters: {
           doubleNum(state) {
             return state.num * 2;
           },
           changeText(state) {
             return (state.text += " Text 변경!");
           },
         },
         // 3. mutations : state 값을 변경하는 이벤트 로직/메서드 methods
         //               state값 변경 + 인자값 받을 수 있음 -> method에 등록&사용
         // 접근: this.$store.commit('함수명', 데이터) --> 동기처리
         mutations: {
           putList(state, obj) {
             state.list.push(obj);
           },
           setUser(state, data) {
             state.user = data;
           },
         },
         // 4. Actions : 비동기 처리 로직을 선언하는 메서드 aysnc methods,
         //              주로 Mutations를 실행시킴
         // 접근: this.$store.dispatch('함수명', 데이터)
         actions: {
           async GET_USER(context, num) {
             try {
               const { data } = await $getUser(num);
               context.commit("setUser", data);
             } catch (error) {
               console.log("GET_USER error: " + error);
             }
           },
         },
       });
