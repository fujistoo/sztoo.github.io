<template>
  <div>
    <div class="buttons mobileButtons">
      <a 
        class="button--green"
        v-for="sm in socialMedia"
        :class="'button--' + sm.title"
        :key="sm.title"
        :href="sm.link"
        :title="sm.title">
        {{ sm.title }}
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
}
</script>

<style scoped>
.mobileButtons {
  margin-left: .5vw;
  margin-right: .5vw;
  display: flex;
  flex-direction: column;
}

.mobileButtons a {
  margin: 2vw auto;
}

@media only screen and (max-width: 640px) {
  .mobileButtons {
    flex-direction: row;
  }
}

@media only screen and (max-width: 426px) {
  .mobileButtons {
    flex-direction: column;
  }
}
</style>