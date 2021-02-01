<template>
  <v-content>
    <div>
             <h1 class="text-center"> About Us </h1>
      <!-- <img src="https://www.pngitem.com/pimgs/m/376-3765871_transparent-tunisia-flag-png-png-download.png" id="aboutimg" alt/> -->
        <v-row>
          <v-col>
            <v-container>
            </v-container>
          </v-col>
        </v-row>
    </div>
    <div>
      <v-container>
        <h1 class="text-center"> Tunisia Discovery </h1>
        <v-row>
          <br> 
          <strong> <p> 
            Hello and welcome to Tunisia Discovery, the place to find the best about tunisia for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product and services.
            We at Tunisia Discovery  believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.
          </p> </strong>
        </v-row>
           <h1 class="text-center" color="bleu"> Team Member </h1>
        <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list dense>
      <v-subheader> Team Member</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      </v-container>
    </div>
  </v-content>
</template>
<script>
  export default {
    name: "about",
    data: () => ({
      selectedItem: 1,
      items: [
       { text: 'Faiza Bannour', icon: 'mdi-account' },
        { text: 'Khalil Charef', icon: 'mdi-account' },
       { text: 'Yasser Gharssali', icon: 'mdi-account' },
       { text: 'Dheker ben Lazrek', icon: 'mdi-account' },
      ],
    }),
  }
</script>
<style> 
 #aboutimg {
margin: auto;
width:50%;
height:40%;
} 
</style>