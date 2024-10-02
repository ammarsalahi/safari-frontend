import { selector } from "recoil";
import { SignupAtom, TokenAtom, UserAtom } from "../atoms";


const SignupSelector = selector({
    key:"signup-selector",
    get:({get})=>{
        const value=get(SignupAtom)
        return value
    },
    set:({set},newValue)=>{
        set(SignupAtom,newValue)
    }
});


const TokenSelector = selector({
    key:"token-selector",
    get:({get})=>{
        const value=get(TokenAtom)
        return value
    },
    set:({set},newValue)=>{
        set(TokenAtom,newValue)
    }
})

const UserSelector = selector({
    key:"user-selector",
    get:({get})=>{
        const value=get(UserAtom)
        return value
    },
    set:({set},newValue)=>{
        set(UserAtom,newValue)
    }
})

export {
    
    SignupSelector,
    TokenSelector,
    UserSelector

}

// 18 - 38
//2:26 - 2:50