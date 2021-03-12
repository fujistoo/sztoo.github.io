<template>
  <div class="button__totop" v-show="visible" @click="scrollToTop">
    <icon :wrapper-class="iconClass" :kind="iconKind"></icon>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      iconClass: 'arrowup',
      iconKind: 'icon-up-square'
    }
  },

  methods: {
    scrollToTop () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    displayScrollToTop () {
      this.visible = window.scrollY > 30;
    },
  },
  beforeMount () {
    window.addEventListener('scroll', this.displayScrollToTop);
  },
  destroyed () {
    window.removeEventListener('scroll', this.displayScrollToTop);
  }
}
</script>

<style>
.button__totop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;  
  border-radius: 10%;
  background-color: #cccccc;
}

@media (max-width:800px) {
  .button__totop {
    display: none;
  }
}
</style>
