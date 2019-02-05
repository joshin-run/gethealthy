<template>
    <v-container id="dashboard" fluid>
        <v-layout class="page-title">
            <h1>Dashboard</h1>
        </v-layout>
        <personal-goals />
    </v-container>
</template>
<script>
import PersonalGoals from '@/components/PersonalGoals';

export default {
    name: 'Dashboard',
    components: {
        PersonalGoals
    }
};
</script>
<style lang="scss" scoped>
#dashboard {
    background: #EEEEEE;
    height: 100%;
    .page-title {
        padding: 0;
        margin: 0 0 20px 0;
        // background: rgb(115, 215, 255);
    }
}
</style>