<template>
<div class="home">
    <section>
        <div class="container">
            <landing-material></landing-material>
        </div>
    </section>
    <section>
     <div class="container">
      <router-view></router-view>
     </div>
      
    </section>
    <section>
        <div class="container">
            <navigation-module></navigation-module>
            <landing-material></landing-material>
            </div>
        </section>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LandingMaterial from "@/components/LandingMaterial.vue"
import HomeMaterial from '@/components/HomeMaterial.vue'
import NavigationModule from '@/components/NavigationModule.vue'

export default {
    name: "home",
    components: {
        LandingMaterial,
        HomeMaterial,
        NavigationModule
    }
};
</script>
