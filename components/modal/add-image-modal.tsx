'use client'
 
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form" 
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
 
import {  useRouter } from "next/navigation" 
import { useModal } from "@/hooks/use-modal-store"
import FileUpload from "../FileUpload"
import { AddImage } from "@/actions/addimage"
import { toast } from "../ui/use-toast"
 
 
 
 


export const modalSchema = z.object({
  
    image: z.string().min(1,{message:"required"})
    
  
      
})
const AddImageModal = ()=>{
 const { isOpen,type ,onOpen ,onClose} = useModal();
 const isModalOpen = isOpen && type== "AddImage";
 const router = useRouter();
 const form = useForm<z.infer<typeof modalSchema>>({
    resolver: zodResolver(modalSchema),
    defaultValues: {
        image:"",   
    },
  })

  const isloding = form.formState.isSubmitting;
   async function onSubmit(values: z.infer<typeof modalSchema>) {
      
   try {
 
   
    const res = await AddImage(values);

    if(res.success){
      console.log(values);
        toast({
            title:"Images added to gallery"
        })

        onClose();
    }
   } catch (error) {
     console.log(error);  
   }
  }

 const handleChnage =()=>{
  form.reset();
   onClose();
 }
 
    return(<>
    <Dialog open={isModalOpen} onOpenChange={handleChnage}  >
  <DialogContent className=" outline-none  border-none  text-white  ">
    <DialogHeader>
      <DialogTitle className="text-2xl">Create your own Server</DialogTitle>
      <DialogDescription>
        You can change the server image and name of server.
      </DialogDescription>
    </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> 
      <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload endpoint="AddImage" value={field.value} onChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
        <Button type="submit" className="bg-blue-500 hover:bg-blue-800">{isloding ? "Creating":"Upload Image"}</Button>
      </form>
    </Form> 
  </DialogContent>
 
</Dialog>

    </>) 
}


export default AddImageModal;