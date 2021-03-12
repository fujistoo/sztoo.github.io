<template>
  <div>
    <div 
      class="about__header"
      :style="resize ? headerOverrideStyle : headerBaseStyle">
      <div class="about__headshot">
        <Headshot :style="resize ? headshotOverrideStyle : headshotBaseStyle"/>
      </div>
      <div class="about__header_content">
        <div class="about__header_content_list">
          <span
            v-for="i in descriptions"
            :key="i"
            :style="resize ? headerContentOverrideStyle : headerContentBaseStyle"
          > {{ i }}.</span>
        </div>
        
      </div>
    </div>
    <SectionDivider/>
    <Contact/>
    <div 
      class="about__content"
      :style="resize ? contentOverrideStyle : contentBaseStyle">
      <span class="about__content_headline glitch">{{ headline }}</span>
      <p>{{ background }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resize: false,
      intro: ['Data Science','Software Engineering','Software Development','Big Data','Cloud Computing',
              'UI/UX','Machine Learning','Vue.js','Storytelling'],
      headline: 'Storytelling through data.',
      background: 'I graduated with a Bachelor\'s Degree in Computer Science from Illinois Institute of Technology in 2018. ' +
                  'Later, I worked as a Data Scientist with a team across Italy, London and Chicago on a Digital Analytics ' +
                  'project revolving agriculutral and construction equipment vehicles. I acquired project and time management skills, ' +
                  'as well as the ability to communicate with team ' + 
                  'members and clients while effectively meeting milestones and deadlines. Prior to that, ' +
                  'I also had software engineering and technology consulting experiences with multinational ' +
                  'companies in Southeast Asia. ' + 
                  '',
      headerBaseStyle: {
        margin: 'auto',
        width: '100%',
        transition: '0.4s',
        paddingBottom: '30%'
      },
      headerOverrideStyle: {
        width: '85%',
        transition: '0.4s',
        marginBottom: '2%'
      },
      headshotBaseStyle: {
        width: '100%',
        transition: '0.4s'
      },
      headshotOverrideStyle: {
        width: '80%',
        transition: '0.4s'
      },
      headerContentBaseStyle: {
        fontSize: '3em',
        opacity: '0.5',
        fontFamily: 'inherit',
        transition: '0.4s'
      },
      headerContentOverrideStyle: {
        fontSize: '2em',
        transition: '0.4s'
      },
      contentBaseStyle: {
        paddingTop: '2%',
      },
      contentOverrideStyle: {
        paddingTop: '3%',
      }
    }
  },
  methods: {
    handleScroll () {
      if(pageYOffset > 30) {
        this.resize = true; 
      } else {
        this.resize = false; 
      }
    },
    sample () {
      // sample N elements 
      var n = 5; 
      var result = new Array(n); 
      var len = this.intro.length; 
      var taken = new Array(len);

      while(n--) {
        var x = Math.floor(Math.random() * len); 
        result[n] = this.intro[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len; 
      }
      return result; 
    }
  },
  computed: {
    descriptions () {
      return this.sample().concat(['Formula 1 Enthusiast']);
    },
    aboutMe () {
      return this.headline + ' ' + this.background;
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }

}
</script>

<style scoped>

/* header */
.about__header {  
  margin: auto;
  display: flex;
  text-align: center;
  align-items: center;
  padding-top: 3%;
  overflow: auto;
}

.about__headshot {
  width: 25vw;
  margin: 5vmin;
}

.about__header_content {
  width: 70vw;
  text-align:left;
  padding-left: 5vmin;
  margin-right: 5vmin;
}

.about__header_content_list span {
  font-family: inherit;
  font-size: 3em;
  opacity: 0.5;
  animation: pulsate 12s infinite;
}

.about__header_content_list span:nth-of-type(1) {
  animation-delay: 0s;
}

.about__header_content_list span:nth-of-type(2) {
  animation-delay: 2s;
}

.about__header_content_list span:nth-of-type(3) {
  animation-delay: 4s;
}

.about__header_content_list span:nth-of-type(4) {
  animation-delay: 6s;
}

.about__header_content_list span:nth-of-type(5) {
  animation-delay: 8s;
}

.about__header_content_list span:nth-of-type(6) {
  animation-delay: 10s;
}

@keyframes pulsate {
  0% {
    opacity: 0.5;
  }
  10% {
    opacity: 0.75;
  }
  15% {
    opacity: 1;
    color: #9536e3;
  }
  20% {
    opacity: 0.75;
  }
  23.33% {
    opacity: 0.5;
  }
}
/* *******************  */

/* personal background content */
.about__content { 
  margin: auto;
  width: 85%;
  font-size: 1.25em;
  padding-top: 2vh;
  padding-bottom: 10vh;
  padding-left: 10vmin;
  padding-right: 10vmin;
  text-align: justify;
}

.about__content span, p {
  display: inline; 
  font-family: inherit;
  font-size: .85em;
}
/* *******************  */

/* screen sizes conditions */
@media only screen and (max-width:768px) {
  .about__header {
    flex-direction: column;
  }

  .about__headshot {
    display: none;
    transition: 0.4s;
  }

  .about__header_content {
    margin: 0;
    text-align: center;
    padding: 0;
  }

  .about__header_content_list {
    font-size: .85em;
    transition: 0.3s;
  }

  .about__content {
    text-align: center;
  }
}

@media only screen and (max-width: 640px) {
  .about__header_content_list {
    font-size: .78em;
    padding-bottom: 4vh;
  }
}

@media only screen and (max-width: 426px) {
  .about__header_content_list {
    font-size: .625em;
  }

  .about__content {
    padding-bottom: 20vh;
  }
}

</style>