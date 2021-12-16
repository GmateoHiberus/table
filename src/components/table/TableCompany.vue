<template>
<h1>Tabla Concesiones</h1>
<div class="campName">
<h3 class="h3">Vac</h3>
<h3 class="h3">Empresa </h3>
<h3 class="h3">Viajes Sirde / Viajes Sitranbus</h3> 
<h3 class="h3">rutas</h3> 

</div>
<div class="container">

    <div class="column1">
        <div class="vac-empresa" v-for="(empresa, index) in empresas" :key="index"> 
            <h3>{{empresa.vac}}</h3>
        </div>          
    </div>

    <div class="column2">
        <div class="vac-empresa" v-for="(empresa, index) in empresas" :key="index"> 
            <h3>{{empresa.companyName}}</h3>
        </div>     
    </div>

    <div class="column2">
        <div class="vac-empresa" v-for="(empresa, index) in empresas" :key="index"> 
            <h3 class="company" v-if="empresa.TravelSirde === empresa.TravelSitranbus">{{empresa.TravelSirde}} / {{empresa.TravelSitranbus}}</h3>
            <h3 class="company1" v-if="empresa.TravelSirde !== empresa.TravelSitranbus">{{empresa.TravelSirde}} / {{empresa.TravelSitranbus}}</h3>
        </div>
    </div>

    <div class="column3">
        <div class="vac-empresa" v-for="(index) in empresas" :key="index"> 
            <h3 class="company"><a href="#">ver</a></h3>
        </div>
    </div>

</div>
</template>

<script setup>
    
import concesiones from '@/assets/concesiones.json';
import { computed } from 'vue'; 
    
    let empresas =  computed(()=>concesiones.map((empresas)=> empresas)) 
    
    


</script>

<style scoped>
.campName{
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-template-rows: 1fr;
    position: absolute;
    margin-top: 60px;
    width: 98%;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    background: rgb(184, 184, 184);
    height: 40px;
    padding-bottom: 20px;
    
}
.container{
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 0.9fr;
    grid-template-rows: 1fr;
    position: absolute;
    margin-top: 121px;
    padding: 0px;
    border: 1px solid black;
    height: 500px;
    width: 98%;
    overflow-y: scroll;
}
.column1{
    border-right: 1px solid black;
}
.column2{
    border-right: 1px solid black;
}
.other-date{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.9fr;
    grid-template-rows: 1fr;
    margin-top: -0px;
    margin-bottom: -38px;
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

.company{
    color:green
}
.company1{
    color:red
}
</style>