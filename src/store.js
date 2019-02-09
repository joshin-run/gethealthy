import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search',
        user: null,
        isAuthenticated: false,
        userRecipes: [],
        // minutes: {
        //     d_2: 0,
        //     w_2: 0 
        // },
        // water: {
        //     d_4: 0,
        //     w_4: 0 
        // },
        // meals: {
        //     d_3: 0,
        //     w_3: 0 
        // },
        // miles: {
        //     d_1: 0,
        //     w_1: 0 
        // },
        setGoals: {
            minutes_d: 0,
            minutes_w: 0,
            water_d: 0,
            water_w: 0,
            meals_d: 0,
            meals_w: 0,
            miles_d: 0,
            miles_w: 0
          
        },
        results: {
            empty: 0
        },
        enterResults: {
            minutes_w1_r1: 0,
            minutes_w1_r2: 0,
            minutes_w1_r3: 0,
            minutes_w1_r4: 0,
            minutes_w1_r5: 0,
            minutes_w1_r6: 0,
            minutes_w1_r7: 0,
            minutes_w2_r1: 0,
            minutes_w2_r2: 0,
            minutes_w2_r3: 0,
            minutes_w2_r4: 0,
            minutes_w2_r5: 0,
            minutes_w2_r6: 0,
            minutes_w2_r7: 0,
            minutes_w3_r1: 0,
            minutes_w3_r2: 0,
            minutes_w3_r3: 0,
            minutes_w3_r4: 0,
            minutes_w3_r5: 0,
            minutes_w3_r6: 0,
            minutes_w3_r7: 0,
            minutes_w4_r1: 0,
            minutes_w4_r2: 0,
            minutes_w4_r3: 0,
            minutes_w4_r4: 0,
            minutes_w4_r5: 0,
            minutes_w4_r6: 0,
            minutes_w4_r7: 0,
            minutes_w5_r1: 0,
            minutes_w5_r2: 0,
            minutes_w5_r3: 0,
            minutes_w5_r4: 0,
            minutes_w5_r5: 0,
            minutes_w5_r6: 0,
            minutes_w5_r7: 0,
            minutes_w6_r1: 0,
            minutes_w6_r2: 0,
            minutes_w6_r3: 0,
            minutes_w6_r4: 0,
            minutes_w6_r5: 0,
            minutes_w6_r6: 0,
            minutes_w6_r7: 0,
            water_w1_r1: 0,
            water_w1_r2: 0,
            water_w1_r3: 0,
            water_w1_r4: 0,
            water_w1_r5: 0,
            water_w1_r6: 0,
            water_w1_r7: 0,
            water_w2_r1: 0,
            water_w2_r2: 0,
            water_w2_r3: 0,
            water_w2_r4: 0,
            water_w2_r5: 0,
            water_w2_r6: 0,
            water_w2_r7: 0,
            water_w3_r1: 0,
            water_w3_r2: 0,
            water_w3_r3: 0,
            water_w3_r4: 0,
            water_w3_r5: 0,
            water_w3_r6: 0,
            water_w3_r7: 0,
            water_w4_r1: 0,
            water_w4_r2: 0,
            water_w4_r3: 0,
            water_w4_r4: 0,
            water_w4_r5: 0,
            water_w4_r6: 0,
            water_w4_r7: 0,
            water_w5_r1: 0,
            water_w5_r2: 0,
            water_w5_r3: 0,
            water_w5_r4: 0,
            water_w5_r5: 0,
            water_w5_r6: 0,
            water_w5_r7: 0,
            water_w6_r1: 0,
            water_w6_r2: 0,
            water_w6_r3: 0,
            water_w6_r4: 0,
            water_w6_r5: 0,
            water_w6_r6: 0,
            water_w6_r7: 0,
            meals_w1_r1: 0,
            meals_w1_r2: 0,
            meals_w1_r3: 0,
            meals_w1_r4: 0,
            meals_w1_r5: 0,
            meals_w1_r6: 0,
            meals_w1_r7: 0,
            meals_w2_r1: 0,
            meals_w2_r2: 0,
            meals_w2_r3: 0,
            meals_w2_r4: 0,
            meals_w2_r5: 0,
            meals_w2_r6: 0,
            meals_w2_r7: 0,
            meals_w3_r1: 0,
            meals_w3_r2: 0,
            meals_w3_r3: 0,
            meals_w3_r4: 0,
            meals_w3_r5: 0,
            meals_w3_r6: 0,
            meals_w3_r7: 0,
            meals_w4_r1: 0,
            meals_w4_r2: 0,
            meals_w4_r3: 0,
            meals_w4_r4: 0,
            meals_w4_r5: 0,
            meals_w4_r6: 0,
            meals_w4_r7: 0,
            meals_w5_r1: 0,
            meals_w5_r2: 0,
            meals_w5_r3: 0,
            meals_w5_r4: 0,
            meals_w5_r5: 0,
            meals_w5_r6: 0,
            meals_w5_r7: 0,
            meals_w6_r1: 0,
            meals_w6_r2: 0,
            meals_w6_r3: 0,
            meals_w6_r4: 0,
            meals_w6_r5: 0,
            meals_w6_r6: 0,
            meals_w6_r7: 0,
            miles_w1_r1: 0,
            miles_w1_r2: 0,
            miles_w1_r3: 0,
            miles_w1_r4: 0,
            miles_w1_r5: 0,
            miles_w1_r6: 0,
            miles_w1_r7: 0,
            miles_w2_r1: 0,
            miles_w2_r2: 0,
            miles_w2_r3: 0,
            miles_w2_r4: 0,
            miles_w2_r5: 0,
            miles_w2_r6: 0,
            miles_w2_r7: 0,
            miles_w3_r1: 0,
            miles_w3_r2: 0,
            miles_w3_r3: 0,
            miles_w3_r4: 0,
            miles_w3_r5: 0,
            miles_w3_r6: 0,
            miles_w3_r7: 0,
            miles_w4_r1: 0,
            miles_w4_r2: 0,
            miles_w4_r3: 0,
            miles_w4_r4: 0,
            miles_w4_r5: 0,
            miles_w4_r6: 0,
            miles_w4_r7: 0,
            miles_w5_r1: 0,
            miles_w5_r2: 0,
            miles_w5_r3: 0,
            miles_w5_r4: 0,
            miles_w5_r5: 0,
            miles_w5_r6: 0,
            miles_w5_r7: 0,
            miles_w6_r1: 0,
            miles_w6_r2: 0,
            miles_w6_r3: 0,
            miles_w6_r4: 0,
            miles_w6_r5: 0,
            miles_w6_r6: 0,
            miles_w6_r7: 0
        }
    },    
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
        },
        // storeIdValue(state, item) {
        //     state.
        // }
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: 'b9f8068e',
                        app_key: '136bb12eb2712c9770b807c5e8cf416c',
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        },
        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                });
                router.push('/dashboard');
        },
        userLogin({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                });
                router.push('/dashboard');
                // router.push('/');
        },
        userSignOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        addRecipe({ state }, payload) {
            firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .push(payload.recipe.label);
        },
        getUserRecipes({ state, commit }) {
            return firebase
                .database()
                .ref('users/' + state.user.user.uid)
                .once('value', snapshot => {
                    commit('setUserRecipes', snapshot.val());
                });
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
