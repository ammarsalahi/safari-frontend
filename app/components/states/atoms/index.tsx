import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";


// const { persistAtom } = recoilPersist()

const SignupAtom = atom({
    key:"signup-atom",
    default:{
        email:"",
        fullname:"",
        pid:"",
        gender:"",
    }
})


const TokenAtom= atom({
    key:"token-atom",
    default:"",
    // effects_UNSTABLE: [persistAtom],

})

const UserAtom = atom({
    key:"user-atom",
    default:{
        fullname:"",
        theme:"light",
        color:"orange"
    }
})

export {

    SignupAtom,
    TokenAtom,
    UserAtom

}