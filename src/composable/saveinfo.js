import {ref} from "vue";

import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";

import {infodb} from "/src/composable/firebase";

import {fullname, username,phonenumber, enterdate, apptime, barbers, comments} from "../composable/authorize";

const info = ref([]);

const saveinfo = () => {
    const informationCollection = collection(infodb, 'information')

    const informationquery = query(informationCollection, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(informationquery, querySnapshot => {
        info.value = []
        querySnapshot.forEach(doc => {
            info.value.push({id: doc.id, ...doc.data()})
        })
    })

    const sendInformation = async information => {
        await addDoc(informationCollection, {
            appointment: enterdate.value,
            barber: barbers.value,
            comments: comments.value,
            createdAt: new Date(),
            email: username.value,
            fullname: fullname.value,
            phoneNumber: phonenumber.value,
            time: apptime.value
            
        })
    }

    return {unsubscribe, sendInformation}
}
export default saveinfo;
