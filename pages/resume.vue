<template>
  <div class="resume">
    <div class="resume__container" id="resume__container">
      <div class="resume__info">
        <div class="resume__lastUpdate">
          Last updated: March 12, 2021
        </div>
        <div class="resume__download">
          <span>Download: </span>
          <a href="/pdfs/SebastianTooResume.pdf" target="_blank">Resume</a>
          <a href="/pdfs/SebastianTooCurriculumVitae.pdf" target="_blank">Curriculum Vitae</a>
        </div>
      </div>
      <ResumeHeader/>
      <ResumeDivider/>
      <ResumeEducation/>
      <ResumeJob/>
      <ResumeResearch/>
      <ResumePresentations/>
      <ResumeCertifications/>
      <ResumeTechnicalSkills/>
      <ResumeLanguage/>
    </div>
  </div>
</template>

<style scoped>
.resume__info {
  margin-top: 5vh;
  padding-bottom: 5vh;
}

.resume__lastUpdate {
  float: left;
}

.resume__download {
  margin: auto;
  text-align: right;
  float: right;
}

.resume__download a {
  color: black;
  text-decoration: underline;
}

.resume__container {
  width: 90%;
  margin: auto;
  border: 1px solid black;
  margin-top: 10vh;
  padding-left: 2vw;
  padding-right: 2vw;
}

.resume__container * {
  font-family: 'proxima-nova', serif;
}

@media only screen and (max-width: 640px) {
  .resume__container {
    height: 80%;
    margin-bottom: 35%;
  }
  .resume__container * {
    font-size: .75em;
  }
}
</style>