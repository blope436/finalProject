import {ref} from "vue";

const authStatus = ref(false);

const fullname = ref("");

const username = ref("");

const phonenumber = ref("");

const enterdate = ref("");

const apptime = ref("");

const barbers = ref("");

const comments = ref("");

const authorize = () => {

    const signin = (fullname, username, phonenumber, enterdate, apptime, barbers, comments) =>
    {
        
            authStatus.value = true;
    };
    
    const signout = () => {
        authStatus.value = false;
    };
    return {authStatus, signin, signout}
};


export default authorize;
export {fullname, username, phonenumber, enterdate, apptime, barbers, comments}

