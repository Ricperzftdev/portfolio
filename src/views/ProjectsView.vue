<script setup>

</script>

<template>
    <main class="projects-page">
        <div class="container py-5" style="max-width: 724px;">
            <header class="text-center pb-5">
                <h1 class="projects-page-title"><span class="text-decorator"></span>{{$t("projects.title")}}</h1>
                <p class="mt-5">{{$t("projects.description")}}</p>
            </header>

            <section class="projects">
                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[0].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[0].company")}}</p>
                                    <a :href="$t('projects.projects[0].url')" target="_blank" class="project-status">{{$t("projects.projects[0].status")}}<i
                                            class="bi bi-box-arrow-up-right text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[0].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/bcp_preview.png" class="img-fluid h-100"
                                alt="Blockchain pilots project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>

                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[1].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[1].company")}}</p>
                                    <a :href="$t('projects.projects[1].url')" target="_blank" class="project-status">{{$t("projects.projects[1].status")}}<i
                                            class="bi bi-box-arrow-up-right text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[1].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/tp_preview.png" class="img-fluid h-100"
                                alt="Tokenperkz project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>

                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[2].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[2].company")}}</p>
                                    <a :href="$t('projects.projects[2].url')" target="_blank" class="project-status">{{$t("projects.projects[2].status")}}<i
                                            class="bi bi-box-arrow-up-right text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[2].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/sp_preview.png" class="img-fluid h-100"
                                alt="Springboard project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>

                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[3].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[3].company")}}</p>
                                    <a  :href="$t('projects.projects[3].url')" target="_blank" class="project-status">{{$t("projects.projects[3].status")}}<i
                                            class="bi bi-box-arrow-up-right text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[3].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/rnft_preview.png" class="img-fluid h-100"
                                alt="RetroNFTs project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>

                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[4].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[4].company")}}</p>
                                    <a target="_blank" class="project-status">{{$t("projects.projects[4].status")}}<i
                                            class="bi bi-clock text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[4].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/tw_preview.png" class="img-fluid h-100"
                                alt="Trait Wars NFT Game project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>

                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[5].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[5].company")}}</p>
                                    <a target="_blank" class="project-status">{{$t("projects.projects[5].status")}}<i class="bi bi-clock text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[5].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/dg_preview.png" class="img-fluid h-100"
                                alt="Dungeon RPG Clicker Game project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>

                <article class="card shadow mb-5 overflow-hidden" style="background: transparent;">
                    <div class="row g-0">
                        <div class="col-md-8 bg-white">
                            <div class="card-body p-5">
                                <header class="mb-4 project-header position-relative">
                                    <h5 class="card-title project-title">{{$t("projects.projects[6].title")}}</h5>
                                    <p class="company-name">{{$t("projects.projects[6].company")}}</p>
                                    <a target="_blank" class="project-status">{{$t("projects.projects[6].status")}}<i class="bi bi-clock text-muted ms-1"></i></a>
                                </header>
                                <p class="card-text">{{$t("projects.projects[6].description")}}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="@/assets/img/projects/nftv_preview.png" class="img-fluid h-100"
                                alt="NFT Cardano Viewer project preview" style="object-fit: cover;">
                        </div>
                    </div>
                </article>
            </section>
        </div>
    </main>
</template>

<style scoped>
.projects-page {
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

.projects-page-title {
    font-weight: 700;
    font-size: 35px;
}

.project-header::after {
    content: "";
    position: absolute;
    top: 0;
    left: -3rem;
    height: 100%;
    width: 10px;
    background-color: #0050ff;
}

.project-title {
    font-weight: 800;
    color: #0050ff;
    margin-bottom: 0;
}

.company-name {
    color: #6c757d;
    margin-bottom: 0;
    line-height: 1;
}

.project-status {
    color: #6c757d;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1;
    text-decoration: underline;
}

article {
    height: 376px;
}

.row {
    height: 100%;
}

@media screen and (max-width: 992px) {
    .projects-page {
        margin-top: 118px;
    }
}

@media screen and (max-width: 768px) {
    article {
        height: auto;
    }

    .row {
        height: auto;
    }
}
</style>