<script setup lang="ts">
import FeatureCard from '~/components/cards/FeatureCard.vue';
</script>

<template>
    <div class="main-page">
        <FeatureCard type="right" size="large" color="radial">
            <div class="content">
                <IconLightning class="icon" />
                <h3>Современные технологии</h3>
                <p>Применение качественных материалов и передовых решений</p>
            </div>
        </FeatureCard>
    </div>
</template>

<style scoped lang="scss">
.main-page {
    padding: 50px;
    margin: 50px;
}
</style>