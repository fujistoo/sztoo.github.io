<template>
  <div v-show="visible" class="social-media-icons footer">
    <a 
      class="social-media-link"
      v-for="sm in socialMedia"
      :key="sm.title"
      :href="sm.link"
      :title="sm.title">
      <icon :wrapper-class="sm.iconClass" :kind="sm.iconKind"></icon>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notShown: ['index','about','resume','test'],
      socialMedia: [
        {
          link: "https://github.com/ssztoo",
          iconKind: "icon-github-square",
          iconClass: "github",
          title: "github"
        },
        {
          link: "https://www.linkedin.com/in/sztoo",
          iconKind: "icon-linkedin-square",
          iconClass: "linkedin",
          title: "linkedin"
        },
                {
          link: "mailto:sebastiantoo.university@gmail.com",
          iconKind: "icon-envelope",
          iconClass: "envelope",
          title: "email"
        },
      ]
    }
  },
  computed: {
    visible () {
      if (this.notShown.includes(this.$route.name)) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style>
.footer {
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 90%; 
  left: 0;
  bottom: 0;
  padding-bottom: 5%;
}

.heartshape {
  color: red;
}

.social-media-icons {
  padding-top: 5%;
  justify-content: space-evenly;
}

.social-media-link {
  opacity: 0.85;
  transition: 0.3s;
  margin-left: 10px;
  margin-right: 10px;
}

.social-media-link:hover {
  opacity: 1;
}
</style>