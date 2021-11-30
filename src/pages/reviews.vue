<script setup>
import { onUnmounted, ref } from 'vue';

import useReview from '../composable/useReview';

import {author} from '../composable/useReview'

const {reviews, unsubscribe, sendReview} = useReview();

const newReview = ref('');

const send = () => {
    sendReview(newReview.value)
    newReview.value = '';
    author.value = '';
}

onUnmounted(() => {
    unsubscribe()
})

</script>
<template>
<div class="flex items-center justify-center text-red-500 text-5xl text-center bg-gray-500">
<img class="w-40 h-20" src="/src/assets/reviewimage.png" alt="Contact Image"/>
</div>
    <h1 class="text-center py-7 text-3xl text-red-700">Hello Customers. If you have visited Extreme Cuts barbershop or wish to share any comments you have heard from freinds or family feel free to share on this page.</h1>
    <h2 class="text-5xl">Customer Reviews:</h2>
    <div class="flex flex-col min-h-[900px] w-full mt-6 rounded-lg justify-between border-4 border-indigo-900">
    <ul class="p-5 space-y-5">
        <li v-for="review in reviews" :key="review.id" class="text-4xl"> 
            <div class="flex justify-between px-5 py-3 rounded-2xl bg-blue-500">
                <span>Review: {{review.text}}</span>
                <span>Reviewer Name: {{review.author}}</span>
            </div>
        </li>
    </ul>
    <div>
        <h1 class="text-red-500 text-4xl py-4">Name and Message are required fields. Anybody can submit a review! Press enter to submit.</h1>
        <input required class="w-96 p-3 rounded-xl focus:outline-none focus:bg-red-100 mb-5" type="text" placeholder="Enter Name Here" v-model="author"/>
        <input required class="w-full min-h-[100px] p-5 rounded-xl focus:outline-none focus:bg-red-100" type="text" placeholder="Type a message here" v-model="newReview" @change="send"/>
    </div>
</div>
</template>