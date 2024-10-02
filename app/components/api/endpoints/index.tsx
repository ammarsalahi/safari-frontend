import { BASE_URL } from ".."

const _=(url:string)=>{
    return `${BASE_URL}/${url}`
}

const USER = _("/users/")
const USER_SIGNUP =_("/users/signup/");

const USER_SIGNIN =_("/users/signin/");

const USER_DETAILS = _("/users/details/") 

const USER_CHECK_PID = (pid:string)=>_(`/users/${pid}/`)


// Validation Urls
const VALIDATION_EMAIL = _("/validations/")

const VALIDATION_CODE =_("/validations/code/");

export {

    USER, USER_SIGNIN, USER_SIGNUP, USER_DETAILS,USER_CHECK_PID,
    VALIDATION_EMAIL, VALIDATION_CODE,

}