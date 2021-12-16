<template>
<div class="container">
<div class="column1"><h3 class="h3">Vac     </h3><div class="vac-empresa" v-for="(empresa, index) in empresas" :key="index"> <h3 class="company">{{empresa.vac}}</h3></div>          </div>
<div class="column2"><h3 class="h3">Empresa </h3><div class="vac-empresa" v-for="(empresa, index) in empresas" :key="index"> <h3 class="company">{{empresa.companyName}}</h3></div>     </div>
<div class="column3">
        <h4 class="h4">Otros datos</h4>
            <div class="other-date">
                <h5 class="h5">Año                      <div class="data" v-for="(month, index) in months" :key="index">{{month.year}} </div></h5>
                <h5 class="h5">Numero                   <div class="data" v-for="(month, index) in months" :key="index">{{month.number}} </div></h5>
                <h5 class="h5">Viajes oficiales         <div class="data" v-for="(month, index) in months" :key="index">{{month.registeredTravels}} </div></h5>
                <h5 class="h5-1">Registros oficiales    <div class="data" v-for="(month, index) in months" :key="index">{{month.officialTravels}} </div></h5>
            </div> 
                   
</div>
</div>
</template>

<script setup>
    
import concesiones from '@/assets/concesiones.json';
/* import { computed } from 'vue'; */
    
    let empresas = concesiones/*  computed(()=>consesiones.map((empresas)=> empresas)) */
    let [{months}] = empresas

    console.log(months);

   
    
    


</script>

<style scoped>
   .container{
       display: grid;
       grid-template-columns: 1fr 2fr 3fr;
       grid-template-rows: 1fr;
       position: absolute;
       margin: 0px;
       padding: 0px;
       border: 1px solid black;
       height: 300px;
       width: 98%;
   }
   .column1{
       border-right: 1px solid black;
   }
   .column2{
       border-right: 1px solid black;
   }
   .other-date{
       display: grid;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       grid-template-rows: 1fr;
       margin-top: -40px;
       margin-bottom: -38px;
   }
   .h3{
       border-bottom: 1px solid black;
       height: 46px;
   }
   .vac-empresa{
       border-bottom: 1px solid black;
       
   }
   .h5{
       height: 20px;
       border-right: 1px solid black;
       border-bottom: 1px solid black;
       border-top: 1px solid black;
   }
   .h5-1{
       height: 20px;
       border-bottom: 1px solid black;
       border-top: 1px solid black;
   }
 .data{
     margin-top: 20px;
     border-bottom: 1px solid black;
     height: 30px;
 }
</style>