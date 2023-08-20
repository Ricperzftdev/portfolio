<script setup>
import { storage, storageRef, getStorageURL } from "@/plugins/firebase"
import { ref } from 'vue'

const language = window.navigator.language.substring(0, 2) || "en";

const downloadLink = ref("")

const filePath = language === "en" ? "Full_Stack_Developer_Richard_Perez_CV.pdf" : "Desarrollador_Full_Stack_Richard_Perez_CV.pdf";
const fileRef = storageRef(storage, filePath);
getStorageURL(fileRef)
    .then(url => {
        downloadLink.value = url
    })
    .catch(error => console.log(error))
</script>

<template>
    <main class="resume-page">
        <div class="container py-5" style="max-width: 724px;">
            <header class="text-center pb-5">
                <h1 class="resume-title"><span class="text-decorator"></span>{{ $t("resume.title") }}</h1>
            </header>

            <section class="resume">
                <article class="professional-profile">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="resume-subtitles">{{ $t("resume.profile.title") }}</h2>
                        <a :href="downloadLink" target="_blank" class="download-cv-btn">
                            {{ $t("resume.btn") }}
                        </a>
                    </div>

                    <div class="card shadow">
                        <div class="card-body p-4 p-lg-5">
                            {{ $t("resume.profile.content") }}
                        </div>
                    </div>
                </article>

                <article class="experience mt-5">
                    <div class="mb-3">
                        <h2 class="resume-subtitles">{{ $t("resume.experience.title") }}</h2>
                    </div>

                    <div class="card shadow">
                        <div class="card-body p-4 p-lg-5">
                            <div class="row">
                                <p class="dates">05/2022 - 08/2023</p>
                                <div class="col-12 col-lg-4">
                                    <p class="mb-0 text-secondary fw-bold">{{ $t("resume.experience.history[0].role") }}</p>
                                    <p class="text-secondary">Blockchain Pilots</p>
                                </div>
                                <div class="col-12 col-lg-8">
                                    <ul>
                                        <li>{{ $t("resume.experience.history[0].activities[0]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[1]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[2]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[3]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[4]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[5]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[6]") }}</li>
                                        <li>{{ $t("resume.experience.history[0].activities[7]") }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="skills mt-5">
                    <div class="mb-3">
                        <h2 class="resume-subtitles">{{ $t("resume.skills.title") }}</h2>
                    </div>

                    <div class="card shadow">
                        <div class="card-body p-4 p-lg-5">
                            <div class="row">
                                <div class="col-12 col-sm-4">
                                    <ul class="mb-0">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>Vue.js</li>
                                        <li>Nuxt.js</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-4">
                                    <ul class="mb-0">
                                        <li>GCP</li>
                                        <li>Git</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                        <li>TypeScript</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-4">
                                    <ul class="mb-0">
                                        <li>Blockchain APIs</li>
                                        <li>Jira</li>
                                        <li>Photoshop</li>
                                        <li>Figma</li>
                                        <li>Python</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="languages mt-5">
                    <div class="mb-3">
                        <h2 class="resume-subtitles">{{ $t("resume.languages.title") }}</h2>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-6 mb-4 mb-md-0">
                            <div class="card shadow p-3">
                                <div class="card-body">
                                    <h4>Español</h4>
                                    <p class="mb-0">Hablo y entiendo español a la perfección, ya que soy oriundo de
                                        Venezuela.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card shadow p-3">
                                <div class="card-body">
                                    <h4>English</h4>
                                    <p class="mb-0">I can communicate and understand in writing, but speaking and listening
                                        are
                                        difficult.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="education mt-5">
                    <div class="mb-3">
                        <h2 class="resume-subtitles">{{ $t("resume.education.title") }}</h2>
                    </div>

                    <div class="card shadow">
                        <div class="card-body p-4 p-lg-5">
                            <div class="row">
                                <p class="dates">06/2017 - 05/2022</p>
                                <div class="col-12 col-lg-4">
                                    <p class="mb-0 text-secondary fw-bold">UNELLEZ</p>
                                    <p class="text-secondary">{{ $t("resume.education.history[0].degree") }}</p>
                                </div>
                                <div class="col-12 col-lg-8">
                                    <p>{{ $t("resume.education.history[0].description") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="reference mt-5">
                    <div class="mb-3">
                        <h2 class="resume-subtitles">{{ $t("resume.references.title") }}</h2>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-6 mb-4">
                            <div class="card shadow p-3">
                                <div class="card-body">
                                    <h4 class="mb-0 fw-bold"><span class="text-decorator"></span>Terry West</h4>
                                    <p class="text-muted">Blockchain Pilots</p>
                                    <p class="mb-0"><i class="bi bi-quote quote"></i>Richard has been a pleasure to work
                                        with.
                                        Always pushing to find the best solution and solve unforseen problems. He quickly
                                        grew
                                        from a junior team member to helping lead the development process of new projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                            <div class="card shadow p-3">
                                <div class="card-body">
                                    <h4 class="mb-0 fw-bold"><span class="text-decorator"></span>Nathan Staples</h4>
                                    <p class="text-muted">Blockchain Pilots</p>
                                    <p class="mb-0"><i class="bi bi-quote quote"></i>Richard has always shown a keen eye for
                                        detail and an ability to pivot when required.
                                        He has always been enthusiastic and diligent in his approach to work.
                                        It has been an absolute pleasure to work with this talented young man.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    </main>
</template>

<style scoped>
.resume-page {
    background-color: #e6dace;
    margin-top: 95.5px;
}


.text-decorator {
    background-color: #0050ff;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.resume-title {
    font-weight: 700;
    font-size: 35px;
}

.resume-subtitles {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 0;
}

.download-cv-btn {
    background-color: #0050ff;
    border: 1px solid #0050ff;
    color: white;
    text-transform: uppercase;
    padding: 6px 20px;
    text-decoration: none;
    border-radius: 23px;
    transition: all ease-in-out 0.2s;
}

.download-cv-btn:hover {
    background-color: transparent;
    color: black;
    border-color: black;
}

.dates {
    font-weight: 800;
    font-size: 20px;
    color: #0050ff;
    margin-bottom: 0;
}

ul {
    list-style-type: square;
}

li {
    margin-bottom: 10px;
}

li::marker {
    color: #0050ff;
}

.languages h4 {
    font-weight: 700;
    color: #0050ff;
}

.quote {
    color: #0050ff;
    font-size: 20px;
}

@media screen and (max-width: 992px) {
    .resume-page {
        margin-top: 118px;
    }
}
</style>