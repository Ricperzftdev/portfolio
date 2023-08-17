<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container py-3">
            <RouterLink class="navbar-brand" to="/"><span class="text-decorator"></span>Richard Perez <span class="my_role d-block d-lg-inline"><span class="slash d-none d-md-inline">/</span> full stack developer</span></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-uppercase">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background: #fff !important;
}

.text-decorator {
    background-color: #0050ff;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

.navbar-brand {
    font-weight: 800;
    font-size: 25px;
}

.navbar-brand .my_role {
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;
}

.navbar-brand .my_role .slash {
    margin: 0 5px;
}

</style>