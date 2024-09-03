'use server' 
import { db } from "@/lib/db"; 

export const   GetImages = async ()=>{
    try {  
        const images =  await db.gallery.findMany( {}); 
      return {success:"true",images}
 
      } catch (error) {
     return {error:"true"}
      }
}