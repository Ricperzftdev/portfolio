<script setup>

</script>

<template>
    <section class="hero d-flex flex-column flex-md-row">
        <div class="first-area"></div>
        <div class="second-area"></div>
    </section>
</template>

<style scoped>
.hero {
    width: 100%;
    height: 100vh;
}

.first-area {
    background-color: #e6dace;
    width: 40%;
}

.second-area {
    width: 60%;
}

@media screen and (max-width: 768px) {
    .first-area {
        height: 40%;
        width: 100%;
    }

    .second-area {
        height: 60%;
        width: 100%;
    }
}
</style>