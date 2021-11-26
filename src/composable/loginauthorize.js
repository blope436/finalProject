import {ref} from "vue"

import {fullname, username} from "../composable/authorize"

const loginStatus = ref(false)

const names = ref("");

const emails = ref("");

const loginauthorize = () => {

    const login = (names, emails) =>
    {
           
            loginStatus.value = true;
           

        
    };
    
    const logout = () => {
        loginStatus.value = false;
    };
    return {loginStatus, login, logout}
};
export default loginauthorize;
export {names, emails};