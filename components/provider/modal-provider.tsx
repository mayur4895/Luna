'use client'

import { useEffect, useState } from "react"
import AddImageModal from "../modal/add-image-modal"
 
   

const ModalProvider = ()=>{

const [isMounted,setisMounted] = useState(false)


useEffect(()=>{
setisMounted(true);
},[setisMounted])

if(!isMounted){
    return null
}

    return(<>
 
      <AddImageModal/>
    </>)
}

export default ModalProvider;