<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text
            text-xs-center">GET HEALTHY</div>
            <div class="display-4 font-weight-black white--text text-xs-center
            mb-3">GET HAPPY</div>
            <div class="display-1 font-weight-bold sub-title
            text-xs-center">Finally be the you that you were always meant to be.</div>
            <v-btn fab class="mt-5 black darken-4">
            <v-icon large color="white">\/</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://res.cloudinary.com/j-create-it-llc/image/upload/v1548216592/jumping-yellow.png');
    /* background: url('https://res.cloudinary.com/j-create-it-llc/image/upload/v1548215025/jumping-dark.jpg'); */
    /* background: url('https://res.cloudinary.com/j-create-it-llc/image/upload/v1548214598/jumping.jpg'); */
    background-size: cover;
    /* width: 100%; */
    /* height: 100%; */
    height: calc(100vh - 64px);
}
.sub-title {
  color: black;
}
</style>