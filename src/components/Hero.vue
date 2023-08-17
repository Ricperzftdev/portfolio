<script setup>

</script>

<template>
    <section class="hero d-flex flex-column flex-md-row position-relative">
        <PresentationCard />
        <div class="first-area"></div>
        <div class="second-area"></div>
    </section>
</template>

<style scoped>
.hero {
    width: 100%;
    margin-top: 95.5px;
    height: calc(100vh - 95.5px);
}

.first-area {
    background-color: #e6dace;
    width: 40%;
}

.second-area {
    width: 60%;
}

@media screen and (max-width: 992px) {
    .hero {
        height: auto;
        margin-top: 118px;
    }

    .first-area {
        height: 40%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .second-area {
        display: none;
    }
}
</style>