<template>
  <div>
    <h3>Account Input</h3>

    <label>InputNum: </label><input type="num" v-model="inputNum" /> //
    <label>inputText: </label><input type="text" v-model="inputText" />
    <button @click="inputStore">입력</button> <br />
    
    USER = <br />
    <li v-for="(value, key, index) in user" :key="value.name">
      {{ index }} : {{ key }} = {{ value }}
    </li>

    <hr />

    <h3>STORE 변경 확인하기</h3>
    store.num: {{ this.$store.state.num }} <br />
    store.text: {{ this.$store.state.text }} <br />
    getters.doubleNum : {{ this.$store.getters.doubleNum }} <br />
    getters.changeText : {{ this.$store.getters.changeText }} <br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNum: null,
      inputText: null,
    };
  },
  computed: {
      user() {
          return this.$store.state.user;
      }
  },
  methods: {
    inputStore() {
      this.$store.state.num = this.inputNum; //store의 num 값에 inputNum 값을 넣어줌
      this.$store.state.text = this.inputText; //store의 text 값에 inputText 값을 넣어줌
      if (this.inputNum != null) {
        // store의 mutations에 접근하여 'putList' 함수에 {데이터} 값을 넣어 실행
        this.$store.commit("putList", {
          name: this.inputNum,
          text: this.inputText,
        });
        this.$store.dispatch("GET_USER", this.inputNum);
      }
    },
  },
};
</script>

<style></style>
