 
 
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing(); 
 
export const ourFileRouter = {  

  AddImage: f({ image: { maxFileSize: "1MB" } })  
  .onUploadComplete(()=>{}),  

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;