<template>
  <div class="block latestPostBlock">
    <h2 class="text-center">Your Car</h2>
    <v-container v-if="cars">
      <v-row rows="12" md="4">
        
          <v-card outlined class="mx-auto">
            <v-img class="black--text align-end" height="300px" width="600px" :src="cars.imageUrl">
              
            </v-img>
            <v-card-title >{{ cars.title }}</v-card-title>
            <v-card-subtitle class="pb-0"> {{ cars.price }} <span> TND per day </span></v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ cars.text }}</div>
            </v-card-text>

            <v-container fluid>
            <v-row dense>
            <v-col>
             <v-text-field 
              v-model="startD"
              type="date"
              label="Date taken"
            >
            </v-text-field>
            <v-text-field
            v-model="endD"
            type="date"
            label="Date delivered"
            @change="BetweenDates"
            >
            </v-text-field>
           
            <v-select
              v-model="time"
              :items="items"
              label="Time of taken and delivered"
          dense
        ></v-select>
            </v-col>
            </v-row>
            </v-container>
            Total: <input type="text" v-model="total" disabled> DT
            <v-card-actions>
              
                <v-btn color="primary" text @click="paymentSend">Reserve</v-btn>
            </v-card-actions>
          </v-card>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
const Cookie =require('js-cookie');

export default {
    
    name: "CarShow",
     data() {
    return {
       cars:null,
       username:Cookie.get('name'),
       useremail:Cookie.get('email'),
       userphone:Cookie.get('number'),   
       startD:"",
       endD:"",
       time:null,
       total:"",
       items:["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"],
       
       show: false,
    }   
},
    async mounted(){
       const id= this.$route.params.idcars
       console.log(id)
       const show = await axios.get(`http://localhost:5000/api/Car/${id}`);
       console.log(show.data)
       this.cars = show.data


    },
    methods:{
     BetweenDates ()  {
        const startDate = new Date(this.startD) 
        const endDate = new Date(this.endD) 
        let dayCount = 0
        console.log(startDate, endDate)
        while (endDate > startDate) {
        dayCount++
        startDate.setDate(startDate.getDate() + 1)
      }
        this.total=dayCount*this.cars.price
        console.log(this.total)
        return dayCount
},

async paymentSend(){
  let newPayment = {
        title:this.cars.title,
        username: this.username,
        useremail: this.useremail,
        userphone: this.userphone,
        startD: this.startD,
        endD: this.endD,
        time: this.time,
        total: this.total,
        
      };
      var car = await axios
        .post("http://localhost:5000/api/CarPay", newPayment)
        if(!car.data.message) {
          this.$store.commit('setCar',car.data)
          this.$store.commit('incrementPayments')
          this.error = "";
          alert("added to payment");
          this.$router.push("/home")
        } else {
          this.error = "Error try later"
        }
       
}

}
       
}
</script>
<style>
</style>