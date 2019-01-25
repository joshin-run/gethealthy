<template>
    <v-app>
        <Nav />

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue';
import firebase from 'firebase'

export default {
    name: 'App',
    components: {
        Nav
    },
    methods: {
        initFirebase () {
            firebase.initializeApp(
                {
                    apiKey: "AIzaSyAPkck056r7B-L_TudFrivuNNUk0rQPWbI",
                    authDomain: "gethealthy-2019.firebaseapp.com",
                    databaseURL: "https://gethealthy-2019.firebaseio.com",
                    projectId: "gethealthy-2019",
                    storageBucket: "gethealthy-2019.appspot.com",
                    messagingSenderId: "551346752209"
                }
            )
        }    
    },
    mounted () {
        this.initFirebase()
    }
};
</script>

<style lang="scss">
// #app {
//     font-family: 'Avenir', Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }
// #nav {
//     padding: 30px;
//     a {
//         font-weight: bold;
//         color: #2c3e50;
//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
