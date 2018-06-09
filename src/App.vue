<template>
  <div>
    <h1>Bar Foo Vue Starter</h1>
    <router-link :to="{ name: 'Bar' }">To Bar</router-link>
    <router-link :to="{ name: 'Foo' }">To Foo</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
</style>
