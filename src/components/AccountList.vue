<template>
  <div>
      <h2> Account List </h2>
    
      <li v-for="(i, index) in list" v-bind:key="i.name">
          <!-- ( item, index )-->
        {{ index }} : {{ i }}
        
      </li>
      <hr />
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        }
    },
    methods: {
        getList () {
            this.list = this.$store.state.list;
        }
    },
    created() { // created될 때 실행할 내용 지정
        this.getList();
    }
}
</script>

<style>

</style>