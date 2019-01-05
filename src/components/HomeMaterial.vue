<template>
<section>
    <div class="section">
    <div class="container">
        <h3 class="subtitle is-3 is-uppercase">Co-chairs</h3>
        </br>
    </div>
    <div class="columns is-variable">
        <div class="column is-vcentered is-6">
            <div class="card has-text-left ">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-image">
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Ryan Qi Wang</p>

                        </div>
                    </div>
                    <p>Assistant Professor</p>
                </div>
            </div>
        </div>
        <div class="column is-vcentered is-6">
            <div class="card has-text-left ">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-image">
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Farrokh Jazizadeh</p>

                        </div>
                    </div>
                    <p>Assistant Professor</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
    <scope-material></scope-material>
    <format-material></format-material>
    <budget-material></budget-material>
    <program-material></program-material>
</section>
</template>

<script>
import NavigationModule from './NavigationModule.vue'
import ScopeMaterial from './ScopeMaterial.vue'
import BudgetMaterial from './BudgetMaterial.vue'
import ProgramMaterial from './ProgramMaterial.vue'
import FormatMaterial from './FormatMaterial.vue'

export default {
    name: "HomeMaterial",
    components: {
        NavigationModule,
        ScopeMaterial,
        BudgetMaterial,
        ProgramMaterial,
        FormatMaterial
    }

}
</script>

<style>

</style>
