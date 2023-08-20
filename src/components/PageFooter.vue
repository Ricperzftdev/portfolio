<script setup>

</script>

<template>
    <footer>
        <div class="container py-3">
            <div class="row">
                <div class="col-12 col-lg-7 order-3 order-lg-1 d-flex">
                    <p class="align-self-end fw-bold">©2023 {{$t("general.by")}} Richard Perez</p>
                </div>
                <div class="col-8 col-lg-4 order-1 order-lg-2 mb-2 mb-lg-0">
                    <div class="text-lg-center">
                        <p class="f-title">{{$t("general.contact")}}</p>
                        <p>
                            Richardfrontend@gmail.com
                        </p>
                    </div>
                </div>
                <div class="col-4 col-lg-1 order-2 order-lg-3">
                    <div class="text-lg-center">
                        <p class="f-title">{{$t("general.follow")}}</p>
                        <div>
                            <a href="https://twitter.com/Ricperzdev" target="_blank" class="text-black"><i class="bi bi-twitter me-2"></i></a>
                            <a href="https://www.linkedin.com/in/richardev99/" target="_blank" class="text-black"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
p {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
}

.f-title {
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: capitalize;
}
</style>