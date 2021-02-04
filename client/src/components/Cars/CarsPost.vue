<template>
<v-container class="grey lighten-3 mb-6">
  <div class="search-wrapper">
      <v-toolbar dark color="cyan">
        <v-toolbar-title>Search</v-toolbar-title>
        <input class="input" type="text" v-model="search" @input="filterCars" placeholder="Search model.." />

        <v-btn id="homebutton" icon router-link to="/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-toolbar>
    </div> 
<createCar v-if="apear"/>
  <v-btn
      v-if="userstatus === 'admin'"
      class="mx-2"
      dark
      large
      color="cyan"
   @click="apearcarcreate"
    > create car
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
      <h2 class="text-center" color="black">Tunis Carthage Airport Agency</h2>
      <v-row>
        <v-col v-for="(car) in cars" :key="car._id" cols="12" md="4" >
          <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
          <v-card outlined class="mx-auto" :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          height="400"
          max-width="600">
            <v-img class="black--text align-end" height="200px" :src="car.imageUrl">
            </v-img>
            <v-card-title>{{ car.title }}</v-card-title>
            <v-card-subtitle id="cost" class="pb-0"><span id="price">{{ car.price }}</span> <span id="tnd"> TND per day </span></v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ car.text }}
                <mdiAirConditioner />
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn id="reserve" dark color="cyan" @click="showcar(car._id)">Reserve</v-btn>
                
                <v-btn v-if="userstatus === 'admin'" class="ma-1" color="red" @click="remove(car._id)">Delete</v-btn>
            </v-card-actions>
          </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import createCar from './createCar';
import mdiAirConditioner from 'vue-material-design-icons/Menu.vue';
const Cookie =require('js-cookie');

export default {
  name: "CarsPost",

 data() {
    return {
        cars: [],
        apear : false,
        userstatus:Cookie.get('status'),
        search: "",
        
  }},

  components: {
    createCar,
    mdiAirConditioner,
  },

 async mounted() {
    const response = await axios.get("http://localhost:5000/api/Car");
    console.log(response.data)
    console.log(this.userstatus)
    this.cars = response.data;
  },
  methods: {
    showcar(id){
      this.$router.push(`/CarShow/${id}`)

    },
    apearcarcreate(){
      this.apear = !this.apear;
    },
    async remove(id){
            await axios.delete(`/api/Car/${id}`);
            window.location.replace("/CarsPost");
        },
        async filterCars() {
      var car = await axios.post(
        "http://localhost:5000/api/car/findcar",
        { title: this.search }
      );console.log(car.data)
      this.cars = car.data;
    },
  },
//   computed: {
//     filterCars() {
      
//       return this.car.filter(
//         (e) =>{        

//          return e.title.toLowerCase().includes(this.search.toLowerCase()) ||
//           e.address.toLowerCase().includes(this.search.toLowerCase())
// }
//       );
//     },
//   },
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
    
</style>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 1;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  width: 100%;
}
.search {
  font-size: 12px;
}
.search-wrapper {
  height: 85px;
}
.input {
  box-sizing: content-box;
  width: 85%;
  margin: 10px;
  padding: 20px;
  /* border: rgb(159, 45, 45); */
  font: bold 19px / normal "Garamond", Times, serif;
  color: white;
  text-align: justify;
  letter-spacing: 1px;
  -webkit-transform: rotateY(0.5729577951308232deg);
  transform: rotateY(0.5729577951308232deg);
}
#card2 {
  background-color: rgba(22, 184, 199, 0.7);
  color: white;
}
#reserve {
  width: 100%;
}
#delete {
    width: 100%;
}
#cost {
  background-color: black;
}
#price {
  font-size: 20px;
  color: green;
}
#tnd {
  color:azure
}
</style>