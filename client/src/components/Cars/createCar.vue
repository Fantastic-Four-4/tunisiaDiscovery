<template>
<v-container fluid >
    <v-row>
      <v-col cols="4">
        <v-subheader> image</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="image"
          v-model="image"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>title</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="title"
          v-model="title"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>text</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="text"
          v-model="text"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-subheader>price</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="price"
          v-model="price"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
     @click="createcar"
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>

import axios from 'axios'
export default {
    name:"createCar",
     data() {
    return {
        title:"",
        image:"",
        text:"",
        price:"",
    }},
    methods:{
      async createcar(){
          const newcar = await axios.post('http://localhost:5000/api/Car/create', {
              title : this.title,
              imageUrl: this.image,
              text: this.text,
              price: this.price
          });
          if(newcar){
              alert('car saved !')
              window.location.replace('/CarsPost');
          }
      }
  }
}
</script>

<style scoped>

</style>