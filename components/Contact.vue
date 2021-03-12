<template>
  <div>
    <div v-show="iconVisible" class="social-media-icons">
      <a 
        class="social-media-link"
        v-for="sm in socialMedia"
        :key="sm.title"
        :href="sm.link"
        :title="sm.title">
        <icon :wrapper-class="sm.iconClass" :kind="sm.iconKind"></icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notShown: ['resume','test'],
      socialMedia: [
        {
          link: "https://github.com/sztoo",
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
          iconKind: "icon-envelope-square",
          iconClass: "envelope",
          title: "email"
        },
      ]
    }
  },
  computed: {
    iconVisible () {
      if (this.notShown.includes(this.$route.name)) {
        return false;
      }
      return true;
    },
  }
}
</script>

<style scoped>
.social-media-icons {
  margin: 0 auto;
  text-align: center; 
  padding-top: 5%;
}

.social-media-link {
  opacity: 0.85;
  transition: 0.3s;
  margin-left: 5px;
  margin-right: 5px;
}

.social-media-link:hover {
  opacity: 1;
}

.github {
  fill: #6e5494;
}

.linkedin {
  fill: #4875B4;
}

.envelope {
  fill: #dd4b39;
}
</style>