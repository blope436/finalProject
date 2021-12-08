<script setup>

import {fullname, username,phonenumber, enterdate, apptime, barbers, comments} from "../composable/authorize";

</script>
<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/Appointmentinformationimage.png" alt="Appointment Information Image"/>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/appointmentinfo.png" alt="Appointment Information IMG"></div>
</div>
<div class="mx-auto text-red-700">
    <div class="text-3xl text-center py-11 border-black border-8 rounded-xl">
        <h1 class="text-5xl py-11 border-b-4 border-black">Appointment Info</h1>
        <p class="py-8 border-b-4 border-gray-500">Full Name: {{fullname}}</p>
        <p class="py-8 border-b-4 border-gray-500">Email Address: {{username}}</p>
        <p class="py-8 border-b-4 border-gray-500">Phone Number: {{phonenumber}}</p>
        <p class="py-8 border-b-4 border-gray-500">Appointment Date: {{enterdate}}</p>
        <p class="py-8 border-b-4 border-gray-500">Scheduled Time(Military Time): {{apptime}}</p>
        <p class="py-8 border-b-4 border-gray-500">Selected Barber: {{barbers}}</p>
        <p class="py-8">Optional Comments: {{comments}}</p>
    </div>
</div>
</template>