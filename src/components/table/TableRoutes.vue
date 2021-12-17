<template>
    <h1>Tabla Rutas</h1>
    <div class="campName">
        <h3 class="h3">Rutas</h3>
        <h3 class="h3">¿Ruta oficial?</h3>
        <h3 class="h3-meses" v-for="(mes, index) in meses" :key="index">{{ mes }}</h3>
        <h3 class="h3">Billetes</h3>
    </div>
    <div class="container">
        <div class="column1">
            <div class="vac-empresa">
                <h3 class="company"></h3>
            </div>
        </div>

        <div class="column2">
            <div class="vac-empresa">
                <h3 class="company"></h3>
            </div>
        </div>

        <div class="column2">
            <div class="vac-empresa">
                <h3 class="company"></h3>
                <h3 class="company1"></h3>
            </div>
        </div>

        <div class="column3">
            <div class="vac-empresa">
                <h3 class="company">
                    <a href="#"></a>
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>

import concesiones from '@/assets/concesiones.json';
import { computed } from 'vue';

let empresas = computed(() => concesiones.map((empresas) => empresas))

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(empresas);


</script>

<style scoped>
.campName {
    background: rgb(184, 184, 184);
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    grid-template-rows: 1fr;
    height: 40px;
    margin-top: 60px;
    padding-bottom: 20px;
    position: absolute;
    width: 98%;
}
.container {
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 0.9fr;
    grid-template-rows: 1fr;
    height: 500px;
    margin-top: 121px;
    overflow-y: scroll;
    padding: 0px;
    position: absolute;
    width: 98%;
}
.column1 {
    border-right: 1px solid black;
}
.column2 {
    border-right: 1px solid black;
}
.other-date {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.9fr;
    grid-template-rows: 1fr;
    margin-bottom: -38px;
    margin-top: -0px;
}
.vac-empresa {
    border-bottom: 1px solid black;
}
.h5 {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-top: 1px solid black;
    height: 20px;
}
.h5-1 {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    height: 20px;
}
.data {
    border-bottom: 1px solid black;
    height: 30px;
    margin-top: 20px;
}

.company {
    color: green;
}
.company1 {
    color: red;
}
.h3-meses {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    overflow-x: hidden;
}
</style>