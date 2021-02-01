import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
 car:null,hotel:null
 ,event:null,payments:0
},
  mutations: {
    setCar(state,car) {
        state.car = car
    },
    setHotel(state,hotel) {
        state.hotel = hotel
    },
    setEvents(state,event) {
        state.event = event
    },
    incrementPayments(state){
        state.payments++
    },
    decrementPayments(state){
        state.payments--
    }
  },
  actions:{

  },
  getters: {}
})
export default store