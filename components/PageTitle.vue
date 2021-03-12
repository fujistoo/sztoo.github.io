<template>
  <div v-show="visible" class='page__title'>
    <h2>{{ title }} </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notShown: ['index','test']
    }
  },
  computed: {
    visible () {
      if (this.notShown.includes(this.$route.name)) {
        return false
      } else {
        return true
      }
    },
    title () {
      if (this.$route.name == 'about') {
        return this.$route.name + ' me';
      } else {
        return this.$route.name;
      }
    }
  }
}
</script>

<style>
.page__title {
  padding-top: 3vh;
  padding-bottom: 3vh;
}

@media screen and (max-width: 426px) {
  .page__title {
    display: none;
  }
}
</style>