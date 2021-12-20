<template>
    <table v-for="(cabecera, index) in cabeceras" :key="index">
        <tr class="tr">
            {{cabecera}}
        </tr>
    </table>
</template>

<script setup>


let cabeceras = ["VAC", "Nombre empresa", "Viajes Sirde / Viajes Sitranbus", "Rutas"]





</script>

<style scope>
    


</style>