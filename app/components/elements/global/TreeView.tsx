import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUrlDirector } from './UrlNavigator'

interface treeprops{
    links:any[]
    page:string
}

export default function TreeView(props:treeprops) {
   const gotourl =useUrlDirector()
  return (
    <div>
         <div className="breadcrumbs text-lg mb-5">
            <ul>
                {props.links?.map((item:any,idx:number)=>(
                    <li key={idx}><a onClick={()=>gotourl(item.url)}>{item.name}</a></li>
                ))}
                <li>{props.page}</li>
            </ul>
        </div>
    </div>
  )
}
