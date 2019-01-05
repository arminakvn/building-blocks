<template>
<section class="hero">
    <div class="hero-body has-background-light">
        <div class="container">
            <div class="content is-large">
                <h2 class="title is-size-2 has-text-weight-light is-uppercase">
                    {{items[0]}}
                </h2>
            </div>
            <h2 class="title is-size-3 has-text-weight-light is-uppercase">
                {{items[1]}}
            </h2>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "LandingMaterial",
    data: function () {
        return {
            items: [
                "A Workshop on Building Blocks of Smarter Cities",
                "Mid-May 2019"
            ]
        }
    }

}
</script>

<style scoped>

</style>
