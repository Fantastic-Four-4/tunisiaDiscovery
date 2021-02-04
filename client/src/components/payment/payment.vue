<template>
 <div class="block latestPostBlock">
    <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isCar" >
      <v-card-title> Car Payment</v-card-title>
      <v-card-text class="text--primary">
      <div>Your Car is:  {{$store.state.car.title}}</div>
      <div> FullName:  {{$store.state.car.username}}</div>
      <div>E-mail:  {{$store.state.car.useremail}}</div>
      <div>Phone:  {{$store.state.car.userphone}}</div>
      <div><span> From: </span>{{$store.state.car.startD}} </div>
      <div><span> To: </span>{{$store.state.car.endD}} </div>
      <div> At: {{$store.state.car.time}} </div>
      <div> Total:  {{$store.state.car.total}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelCar"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container>

    <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isEvent" >
      <v-card-title> Event Payment</v-card-title>
      <v-card-text class="text--primary">
      <div>Your Event is:  {{$store.state.event.title}}</div>
      <div> FullName:  {{$store.state.event.username}}</div>
      <div>E-mail:  {{$store.state.event.useremail}}</div>
      <div>Phone:  {{$store.state.event.userphone}}</div>
      <div><span> From: </span>{{$store.state.event.dateevents}} </div>
      <div> Total:  {{$store.state.event.price}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelEvent"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container>
    <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isHotel" >
      <v-card-title> Hotel Payment</v-card-title>
      <v-card-text class="text--primary">
      <div>Your Hotel is:  {{$store.state.hotel.title}}</div>
      <div> FullName:  {{$store.state.hotel.username}}</div>
      <div>E-mail:  {{$store.state.hotel.useremail}}</div>
      <div>Phone:  {{$store.state.hotel.userphone}}</div>
      <div><span> From: </span>{{$store.state.hotel.startD}} </div>
      <div><span> To: </span>{{$store.state.hotel.endD}} </div>
      <div> Total:  {{$store.state.hotel.total}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelHotel"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
    name: "Payment",
    data:()=>{
        return {
            car:null,
            hotel:null,
            event:null,
            isCar:false,
            isEvent:false,
            isHotel:false,
        }
    },
    beforeMount(){
       this.isCar = this.$store.state.car
       this.isEvent= this.$store.state.event
       this.isHotel= this.$store.state.hotel
    },
    methods:{
      pay(){},
      cancelCar(){
        this.$store.commit('setCar',null)
          this.$store.commit('decrementPayments')
          this.$router.push("/home")
          this.isCar = null
      },
      cancelEvent(){
        this.$store.commit('setEvents',null)
          this.$store.commit('decrementPayments')
          this.$router.push("/home")
          this.isEvent = null
      },
      cancelHotel(){
        this.$store.commit('setHotel',null)
          this.$store.commit('decrementPayments')
          this.$router.push("/home")
          this.isHotel = null
      }
    },
   
}
</script>
<style>

</style>