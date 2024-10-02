import { useNavigate } from "@remix-run/react";



const useUrlDirector=()=>{
	const navigate=useNavigate();
	const gotoUrl=(url:string)=>{
		navigate(url)
	}
	return gotoUrl
}


export {useUrlDirector}