'use server' 
import { db } from "@/lib/db"; 
import { modalSchema } from "../components/modal/add-image-modal";
import { z } from "zod";
 

export const   AddImage = async (values :z.infer <typeof modalSchema>)=>{
    try {  
 
      
   
 

         await db.gallery.create({
        data:{
            image:values.image
        }
       }); 
       console.log("done");
      return {success:"true"}
 
      } catch (error) {
     return {error:"true"}
      }
}