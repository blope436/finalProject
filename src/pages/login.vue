<script setup>
import {ref} from "vue";

import { useRouter } from "vue-router";

import loginauthorize from "../composable/loginauthorize";

import {names,emails} from "../composable/loginauthorize";

import {fullname, username,phonenumber, enterdate, apptime, barbers, comments} from "../composable/authorize";

const {loginStatus,login, logout} = loginauthorize();

const router = useRouter();


const submitButton = () => {
    login(names.value, emails.value)
    if (loginStatus.value)
    {
        router.push("/");
    }
};

const clear = () => {
    names.value = "";
    emails.value = "";
}
</script>
<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/loginimage.png" alt="Login Image"/>
</div>
<div class="text-center text-4xl text-red-700">
    <h1>Welcome to the login page!</h1>
    <h1>Here you will enter the information that you entered when you made an appointment</h1>
    <h1>You must make an appointment to continue. When you login you will be able to access the Appointment Information page.</h1>
    <h2 class="py-3 text-black border-4 border-blue-500">Loggged In: {{loginStatus}}</h2>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/loginimage2.jpg" alt="Login IMG"></div>
</div>
<div class="flex justify-center mx-auto text-red-700">
    <form @submit.prevent="submitButton" class="text-center text-xl space-y-7 py-3 ">
        <img class="h-10 rounded-lg mx-auto" src="/src/assets/loginicon.png" alt="Name"/>
        <input required id="names" name="names" type="text" class="rounded-lg border-4" placeholder="Enter Full Name" v-model="names"/>
        <div>
        <img class="h-10 rounded-lg mx-auto" src="/src/assets/email.jpg" alt="Name"/>
        <input required id="emails" name="emails" type="text" class="rounded-lg border-4" placeholder="Enter Email Address" v-model="emails"/>
        </div>
        <div class="space-x-2">
        <button id="submitButton" @submit.prevent="submitButton" class="bg-blue-500 text-black">Submit</button>
        <button @click="clear()" class="bg-red-500 text-black">Cancel</button>
        </div>
    </form>
</div>
</template>