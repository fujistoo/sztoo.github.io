<template>
  <div class="resume__header">
    <div class="resume__header_title">
      <span>
        {{ bio.name }}
      </span>
    </div>
    <div class="resume__header_contacts_container">
      <span v-for="c in bio.contacts" :key="c.title">
        <!-- <icon :iconKind="c.iconClass" :wrapperClass="c.iconClass"></icon> -->
        {{ c.text }} 
        <br/>
      </span>
    </div>
    <br/>
    <div class="resume__header_links_container">
      <a v-for="l in bio.links" :key="l.title" :href="l.link" class="resume__header_links">
        {{ l.text }} 
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bio: {
        name: 'Sebastian Too',
        contacts: [
          {
            title: 'Location',
            text: 'Kuala Lumpur, Malaysia',
            link: '',
            iconClass: 'location',
            iconKind: 'icon-pin',
          },
        ],
        links: [
          {
            title: 'Email',
            text: 'stoo@hawk.iit.edu',
            link: 'mailto:stoo@hawk.iit.edu',
            iconClass: 'email',
            iconKind: 'icon-envelope-square',
          },
          {
            title: 'Github',
            text: 'github.com/sztoo',
            link: 'http://github.com/sztoo',
            iconClass: 'github',
            iconKind: 'icon-github-square',
          },
          {
            title: 'Linkedin',
            text: 'linkedin.com/in/sztoo',
            link: 'http://linkedin.com/in/sztoo',
            iconClass: 'linkedin',
            iconKind: 'icon-linkedin-square',
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* header component */
.resume__header {
  margin: 0 auto;
  font-family: 'Times New Roman', Times, serif;
  padding-top: 10vh;
}

.resume__header_title {
  font-weight: 400;
  font-size: 3em;
  padding-bottom: 3vh;
}

.resume__header_contacts_container, .resume__header_links_container * {
  text-decoration: none;
  color: black;
  font-size: 1em;
}

.resume__header_contacts a:hover {
  color: #7400f8;
}

.resume__header_links {
  text-decoration: underline;
  margin-right: 2vw;
}
</style>