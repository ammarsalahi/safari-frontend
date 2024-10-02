

const AuthConfigHeader=(token:string):{ Authorization: string ,"Content-Type":string} => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
}

const AuthConfigHeaderFile=(token:string):{ Authorization: string ,"Content-Type":string} => {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
}

const HeaderConfig = (token:string,types:string)=>{
    return{
        headers:types==""?AuthConfigHeader(token):AuthConfigHeaderFile(token)    
    }
}
export {

    HeaderConfig,
    AuthConfigHeader
}