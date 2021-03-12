<template>
  <nav class="navbar">
    <nuxt-link
      class="navlinks navleft logo"
      to="/"
    > 
      <b>
        <span>s</span>
        <em>.</em>
        <span>t</span>
        <span>o</span>
        <span>o</span>
      </b>
    </nuxt-link>
    <nuxt-link
      class="navlinks navright"
      v-for="l in links"
      :key="l.id"
      :to="l.link"
      > {{ l.title }} </nuxt-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          id: 1,
          title: "résumé",
          link: "/resume"
        },
        {
          id: 2, 
          title: "about",
          link: "/about"
        },
        {
          id: 3, 
          title: "home",
          link: "/"
        }
      ]
    }
  },
}
</script>

<style scoped>

a.nuxt-link-exact-active {
  color: #00c58e;
}

.navbar {
  overflow: hidden;
  position: relative; 
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
  margin: 0 auto; 
}

.navleft, .navright {
  padding-top: 10px;
  padding-bottom: 10px;
}

.navleft {
  justify-content: center;
  background-color: black;
  float: left;
  font-weight: 900; 
  color: white !important;
  padding-left: 1vw;
  padding-right: 1vw; 
}

.navright {
  float: right;
  margin-left: 3vw;
  font-weight: 750;
}

.navlinks {
  font-family: 'proxima-nova', sans-serif;
  color: #35495e;
  text-decoration: none;
  text-align: center;
}

.navlinks:hover {
  color: #00cc92;
  text-decoration: underline;
}

.logo {
  color: #fee;
}

.logo b span {
  animation: blink linear infinite 2s;
}

.logo b span:nth-of-type(3) {
  animation: blink linear infinite 3s;
}

@keyframes blink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
     color: #333;
  }
  80% {
    
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}

/* mobile */
@media screen and (max-width: 426px) {
  .navbar {
    padding-top: 0;
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
  }

  .navleft {
    display: none;
  }

  .navlinks {
    margin: auto;
    font-size: 1.25em;
  }
}
</style>