<template>
  <div class="index__container">
    <div>
      <p class="name">
        {{ name }}
      </p>
      <Contact v-if="display"/>
      <ContactButton v-else/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: "Sebastian Too",
      display: true, 
    }
  },
  methods: {
    handleWidthChange () {
      const width = window.outerWidth; 
      
      this.display = (width <= 425) ? false : true; 
    },
  },
  beforeMount () {
    window.addEventListener('load', this.handleWidthChange);
    window.addEventListener('resize', this.handleWidthChange);
    window.addEventListener('orientationchange', this.handleWidthChange);
  },
  beforeDestroy () {
    window.removeEventListener('load', this.handleWidthChange);
    window.removeEventListener('resize', this.handleWidthChange);
    window.removeEventListener('orientationchange', this.handleWidthChange);
  }
}
</script>

<style>
.index__container {
  margin: 0 auto;
  min-height: 80vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.name {
  display: block;
  font-weight: 300;
  font-size: 5em;
  color: #35495e;
  letter-spacing: 10px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.buttons {
  padding-top: 30px;
}

.button--green {
  margin: 0;
  font-size: 2vh;
  padding: 8px 30px;
  opacity: 0.8;
  transition: 0.3s;
}

.button--green:hover {
  opacity: 1
}

@media only screen and (max-width: 768px) {
  .index__container {
    min-height: 75vmin;
  }
  
  .name {
    font-size: 4em;
  }
}

@media only screen and (max-width: 640px) {
  .index__container {
    min-height: 100vmin;
  }
}
@media only screen and (max-width: 426px) {
  .index__container {
    min-height: 70vmin;
  }
  .name {
    font-size: 3.5em;
    letter-spacing: 5px;

  }
  .button--resume {
    display: none; 
  }
}
</style>
