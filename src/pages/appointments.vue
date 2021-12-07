<script setup>

import {onUnmounted} from "vue";

import saveinfo from "../composable/saveinfo";

import authorize from "../composable/authorize";

import {fullname, username,phonenumber, enterdate, apptime, barbers, comments} from "../composable/authorize";

const {unsubscribe, sendInformation} = saveinfo();

const send = () => {
    sendInformation(comments.value)
}

onUnmounted(() => {
    unsubscribe();
})

const {authStatus, signin} = authorize();

const submitButton = () => {
    signin(fullname.value, username.value, phonenumber.value, enterdate.value, apptime.value, barbers.value, comments.value)

    
};

const clear = () => {
    fullnames.value = "";
    usernames.value = "";
    phonenumbers.value = "";
    enterdates.value = "";
    apptimes.value = "";
    barber.value = "";
    comment.value = "";
}
const checktime = () => {
    if(apptime.value > "19:30")
    {
        apptimes.value = "";
        window.alert("Enter a correct time - from 8:00AM to 7:30PM");
    }
     
    if(apptime.value < "08:00")
    {
        apptimes.value = "";
        window.alert("Enter a correct time - from 8:00AM to 7:30PM");
    }
    
}

const checkdate = () => {
    const days = new Date(enterdates.value);
    const currentday = new Date();

    const yesterday = new Date(currentday);

    yesterday.setDate(yesterday.getDate() - 1);

    let day = days.getDay();

    let currentyear = currentday.getFullYear();

    let chosenyear = days.getFullYear();

    let currentmonth = currentday.getMonth() + 1;

    let chosenmonth = days.getMonth() + 1;

    let currentdays = currentday.getDate() + 1;

    let chosenday = days.getDate() + 1;

    let yesterdayday = yesterday.getDate();

    if(day === 6)
    {
        enterdate.value = "";
        window.alert("Enter a correct date. Must be from Monday-Saturday.")
    }
    else if(currentmonth > chosenmonth && currentyear >= chosenyear || chosenday === yesterdayday && currentmonth === chosenmonth || chosenmonth === currentmonth && chosenday < currentdays)
    { 
        enterdate.value = "";
        window.alert("You cannot enter a date after today's.");
    }
    

}

</script>

<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/appointmentimage.png" alt="Appointment Image"/>
</div>
<div class="text-center text-4xl text-red-700">
    <h1 class="py-3">Welcome to the Appointment page!</h1>
    <h1 class="py-3">Here you will enter the information in order to book an appointment at Extreme Cuts!!</h1>
    <h1 class="py-3">We look forward to seeing you!! Once you finish making an appointment you can login with information that you entered to see your appointment details.</h1>
    <span class="flex flex-col py-3 border-8 border-blue-500">Appointment Made: {{authStatus}}</span>
</div>
<div class="flex flex-col items-center mx-auto text-red-700">
<div ><img class="h-60 px-80 py-3" src="/src/assets/appointment.png" alt="Appointment IMG"></div>
</div>
<div class="mx-auto text-red-700 border-8 border-gray-500 bg-blue-400">
    <form @submit.prevent="submitButton" class="text-center text-xl space-x-3 space-y-4 py-7">
        <input required id="fullnames" type="text" class="rounded-lg border-4" placeholder="Enter Full Name" v-model="fullname"/>
        <input required id="usernames" type="email" class="rounded-lg border-4" placeholder="Enter Email address" v-model="username"/>
        <input required id="phonenumbers" type="tel" pattern="\d*" title="You must enter numbers only- No special characters or letters" class="rounded-lg border-4" placeholder="Phone: 1111111111" v-model="phonenumber"/>
        <h1 class="text-2xl text-black">Enter desired date for appointment:</h1>
        <input required @change="checkdate()" id="enterdates" type="date" class="rounded-lg border-4" v-model="enterdate"/>
        <div class="space-x-3 space-y-5">
            <span class="text-2xl text-black">Time:</span>
            <input required id="apptimes" type="time" class="rounded-lg border-4" v-model="apptime"/>
            <label class="text-2xl text-black">Select a barber from list:</label>
            <select required id="barber" v-model="barbers">
                <option value="Luis Escobedo">Luis Escobedo</option>
                <option value="Brandon Garza">Brandon Garza</option>
                <option value="Juan Garcia">Juan Garcia</option>
                <option value="John Smith">John Smith</option>
                <option value="Alex Rodriguez">Alex Rodriguez</option>
                <option value="Ruben Martinez">Ruben Martinez</option>
                <option value="Joe Ortiz">Joe Ortiz</option>
                <option value="Tony Gonzalez">Tony Gonzalez</option>
                <option value="Baker Smith">Baker Smith</option>
                <option value="John Velazquez">John Velazquez</option>
            </select>
            <input id="comment" type="text" class="rounded-lg border-4" placeholder="Optional* Extra Comments" v-model="comments"/>
        </div>
        <button @click="checktime(), send()"  type="submit" @submit.prevent="submitButton" class="bg-blue-500 text-black">Submit</button>
        <button @click="clear()" class="bg-red-500 text-black">Cancel</button>
    </form>
</div>
</template>