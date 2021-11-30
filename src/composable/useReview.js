import {ref} from "vue";

import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";

import {reviewdb} from "/src/composable/firebase";

const reviews = ref([]);

const author = ref([]);


const useReview = () => {
    const reviewCollection = collection(reviewdb, 'review')

    const reviewquery = query(reviewCollection, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(reviewquery, querySnapshot => {
        reviews.value = []
        querySnapshot.forEach(doc => {
            reviews.value.push({id: doc.id, ...doc.data()})
        })
    })

    const sendReview = async review => {
        await addDoc(reviewCollection, {
            text: review,
            author: author.value,
            createdAt: new Date(),
        })
    }

    return {reviews, unsubscribe, sendReview}
}

export default useReview;

export {author};