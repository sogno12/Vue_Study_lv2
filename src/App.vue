<template>
  <div id="app">
    <account-header></account-header>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <account-footer></account-footer>
  </div>
</template>

<script>
import AccountHeader from './components/AccountHeader.vue';
import AccountFooter from './components/AccountFooter.vue';


export default {
  name: 'App',
  components: {
    AccountHeader,
    AccountFooter,
  }
}
</script>

<style>
</style>
