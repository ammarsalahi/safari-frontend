import Swal from "sweetalert2"


const ErrorSwal=(title:string)=>{
    Swal.fire({
        title:title,
        icon:"error",
        showCloseButton:false,
        showConfirmButton:true,
        confirmButtonText:"باشه",
        confirmButtonColor:"#f97316"
      })
}

export {

    ErrorSwal
}