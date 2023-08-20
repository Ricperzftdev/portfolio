<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="presentation-card">
        <div class="card shadow my-5 overflow-hidden">
            <div class="row g-0">
                <div class="col-12 col-lg-5 position-relative" style="background-color: #f4ece6;">
                    <div class="main-information d-flex flex-column justify-content-center align-items-center py-5">
                        <img src="@/assets/img/profile_picture.jpeg" class="img-fluid rounded-circle profile-picture"
                            alt="Richard Perez profile picture">
                        <h1 class="name">
                            Richard
                            <br>
                            Perez
                        </h1>
                        <div class="horizontal-line mt-2">

                        </div>
                        <p class="role mt-4">
                            Full Stack Developer
                        </p>
                        <div class="links-container d-lg-none my-4">
                            <RouterLink to="/resume" class="link-btn me-3">
                                {{$t("aboutMe.resume")}}
                            </RouterLink>
                            <RouterLink to="/projects" class="link-btn">
                                {{$t("aboutMe.projects")}}
                            </RouterLink>
                        </div>
                    </div>
                    <div class="social-media-container bg-white w-100 text-center py-2">
                        <a href="https://twitter.com/Ricperzdev" target="_blank" class="text-black"><i class="bi bi-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/richardev99/" target="_blank" class="text-black mx-2"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-12 col-lg-7 pb-5 py-lg-5">
                    <div class="card-body">
                        <p class="card-title welcome-title">{{$t("aboutMe.hello")}}</p>
                        <p class="welcome-subtitle custom-padding">{{$t("aboutMe.ImIdo")}}</p>
                        <div class="links-container d-none d-lg-block my-4 custom-padding">
                            <RouterLink to="/resume" class="link-btn me-3">
                                {{$t("aboutMe.resume")}}
                            </RouterLink>
                            <RouterLink to="/projects" class="link-btn">
                                {{$t("aboutMe.projects")}}
                            </RouterLink>
                        </div>
                        <p class="card-text welcome-description custom-padding">{{$t("aboutMe.description")}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.presentation-card {
    position: absolute;
    width: 60%;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.profile-picture {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.name {
    font-weight: 800;
    text-align: center;
    font-size: 27px;
    margin: 20px 0
}

.role {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 200;
}

.horizontal-line {
    width: 68px;
    height: 2px;
    background-color: #0050ff;
}

.links-container .link-btn {
    background-color: #0050ff;
    border: 1px solid #0050ff;
    color: white;
    padding: 6px 20px;
    text-decoration: none;
    border-radius: 23px;
    text-transform: uppercase;
    transition: all ease-in-out 0.2s;
}

.links-container .link-btn:hover {
    background-color: transparent;
    color: black;
    border-color: black;
}

.social-media-container {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 20px;
    
}

.social-media-container a i {
    transition: all ease-in-out 0.2s;
}

.social-media-container a:hover i {
    color: #0050ff !important;
}

.welcome-title {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 0;
    color: black;
    line-height: 1;
}

.welcome-subtitle {
    font-size: 20px;
    font-weight: bold;
}

.welcome-description {
    font-size: 17px;
    font-weight: 200;
}

.custom-padding {
    padding-left: 3.5px;
}

@media screen and (max-width: 992px) {
    .presentation-card {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        width: 90%;
    }

    .welcome-title {
        font-size: 40px;
    }

    .welcome-subtitle {
        font-size: 15px;
    }

    .custom-padding {
        padding-left: 3px;
    }
}

/* @media screen and (max-width: 772px) {
    .welcome-title {
        font-size: 70px;
    }

    .welcome-subtitle {
        font-size: 15px;
    }
} */
</style>