<template>
    <v-container fluid>
        <v-layout>
            <h1>Menu Page</h1>
        </v-layout>
            <home-plans></home-plans>
    </v-container>
</template>
<script>
import HomePlans from '@/components/HomePlans';

export default {
    name: 'Menu',
    components: {
      HomePlans
    }
};
</script>
<style scoped>
</style>