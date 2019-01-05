<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container has-background-dark">
        <div class="navbar-start">
            <div class="navbar-item is-tab">
                <p class="subtitle is-5 ">
                    <router-link :to="{ name: 'home-material' }">
                        <span class="has-text-light">Home</span></router-link>
                </p>
            </div>
            </div>
            <div class="navbar-end">
            <div class="navbar-item is-tab">
                <p class="subtitle is-5">
                    <router-link :to="{ name: 'scope-material' }">
                        <span class="has-text-light">Scope</span></router-link>
                </p>

            </div>
            <div class="navbar-item is-tab">
                <p class="subtitle is-5">
                    <router-link :to="{ name: 'format-material' }">
                        <span class="has-text-light">Format</span></router-link>
                </p>
            </div>
            <div class="navbar-item is-tab">
                <p class="subtitle is-5">
                    <router-link :to="{ name: 'audiance-material' }">
                        <span class="has-text-light">Target Audiance</span></router-link>
                </p>

            </div>
            <div class="navbar-item is-tab">
                <p class="subtitle is-5">
                    <router-link :to="{ name: 'budget-material' }">
                        <span class="has-text-light">Tentative Budget</span></router-link>
                </p>

            </div>
            <div class="navbar-item is-tab">
                <p class="subtitle is-5">
                    <router-link :to="{ name: 'program-material' }">
                        <span class="has-text-light">Workshop Tentative Program</span></router-link>
                </p>

            </div>
            </div>

    </div>
</nav>
</template>

<script>
export default {
    name: "NavigationModule"
}
</script>

<style>

</style>
